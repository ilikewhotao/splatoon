<script setup lang="ts">
import { useRecordStore } from '@/stores/record'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

type User = {
  sw: string
  username: string
  nickname: string
}

type Record = {
  datetime: string
  win: {
    score: number
    sw: string[]
  }
  lose: {
    score: number
    sw: string[]
  }
}

type filterRecord = Record & {
  sw: string
  status: string
}

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const searchUserValue = ref('')
const options = ref<{ label: string; value: string }[]>([])

async function getJson(url: string) {
  return await axios
    .get(url)
    .then(function (response) {
      // 处理成功情况
      return response.data
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error)
    })
    .finally(function () {
      // 总是会执行
    })
}

async function getUser() {
  if (users.value.length === 0) {
    const data = await getJson('./json/user.json')
    userStore.setUsers(data)
  }
}

async function getRecord() {
  if (records.value.length === 0) {
    const data = await getJson('./json/record.json')
    setTimeout(() => {
      recordStore.setRecords(data)
    }, 1000)
  }
}

const userToSW = (searchUserValue: string) => {
  return searchUserValue.slice(
    searchUserValue.indexOf('#') + 1,
    searchUserValue.indexOf('#') + 18
  )
}

function updateUser(value: string) {
  options.value = users.value
    .filter(
      (item: User) =>
        item.sw.includes(value) ||
        item.username.includes(value) ||
        (item.nickname && item.nickname.includes(value))
    )
    .map((item: User) => {
      const emojis = ['🦑', '🐙']
      const emoji = emojis[Math.floor(Math.random() * 2)]
      const showValue =
        '#' +
        item.sw +
        '@' +
        item.username +
        (item.nickname ? emoji + item.nickname : '')
      return {
        label: showValue,
        value: showValue
      }
    })
}

const filterRecords = ref<filterRecord[]>([])
function selectUser(value: string) {
  filterRecords.value = records.value
    .filter((item: Record) => {
      return (
        item.win.sw.includes(userToSW(value)) ||
        item.lose.sw.includes(userToSW(value))
      )
    })
    .map((item: Record) => {
      return {
        sw: userToSW(value),
        status: item.win.sw.includes(userToSW(value)) ? 'win' : 'lose',
        ...item
      }
    })
}

const showModal = ref(false)
const showRecord = ref<filterRecord>()
function handleModal(item: filterRecord) {
  showModal.value = true
  showRecord.value = item
}

getUser()
getRecord()
</script>

<template>
  <n-p>可以通过输入SW码、玩家名称、昵称来查询。</n-p>
  <n-auto-complete
    v-model:value="searchUserValue"
    :input-props="{
      autocomplete: 'disabled'
    }"
    :options="options"
    placeholder="例：“小白”"
    clearable
    @update:value="updateUser"
    @select="selectUser"
  />
  <n-p>
    胜率统计：
    <n-text>
      {{
        filterRecords.filter(v => v?.status === 'win').length +
        '/' +
        filterRecords.length
      }}
    </n-text>
  </n-p>

  <n-list bordered hoverable clickable>
    <n-list-item v-for="item in filterRecords" @click="handleModal(item)">
      <div style="display: flex; justify-content: space-between">
        <n-tag
          :bordered="false"
          :type="item.status === 'win' ? 'success' : undefined"
          size="small"
        >
          {{ item.status === 'win' ? 'WIN!' : 'LOSE...' }}
        </n-tag>

        <div>{{ item.datetime }}</div>
      </div>
    </n-list-item>
  </n-list>

  <n-modal
    style="width: 80%; max-width: 750px"
    v-model:show="showModal"
    preset="card"
    title="对战详情"
    :bordered="false"
  >
    <n-h3 style="display: flex; justify-content: space-between">
      <n-text type="success">WIN!</n-text>
      <n-text type="success">{{ showRecord?.win.score }}%</n-text>
    </n-h3>
    <n-list bordered>
      <n-list-item v-for="sw in showRecord?.win.sw">
        <n-text :type="sw === showRecord?.sw ? 'success' : 'default'">
          {{ userStore.swToUsername(sw) }}
        </n-text>
      </n-list-item>
    </n-list>

    <n-h3 style="display: flex; justify-content: space-between">
      <n-text type="error">LOSE...</n-text>
      <n-text type="error">{{ showRecord?.lose.score }}%</n-text>
    </n-h3>
    <n-list bordered>
      <n-list-item v-for="sw in showRecord?.lose.sw">
        <n-text :type="sw === showRecord?.sw ? 'error' : 'default'">
          {{ userStore.swToUsername(sw) }}
        </n-text>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style scoped></style>
