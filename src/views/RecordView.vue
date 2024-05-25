<script setup lang="ts">
import axios from 'axios'
import { computed, ref } from 'vue'

type Record = {
  datetime: string
  score: {
    win: number
    lose: number
  }
  win: string[]
  lose: string[]
}

type ShowRecord = Record & {
  result: string
}

type User = {
  sw: string
  name: string
  nickname: string
}

const searchUserValue = ref('')
const searchUserSW = (searchUserValue: string) => {
  return searchUserValue.slice(
    searchUserValue.indexOf('#') + 1,
    searchUserValue.indexOf('#') + 18
  )
}

const userData = ref<User[]>([])
const options = ref<{ label: string; value: string }[]>([])

function searchUser(value: string) {
  options.value = userData.value
    .filter(
      (item: { sw: string; name: string; nickname: string }) =>
        item.sw.includes(value) ||
        item.name.includes(value) ||
        (item.nickname && item.nickname.includes(value))
    )
    .map((item: { sw: string; name: string; nickname: string }) => {
      const emojis = ['🦑', '🐙']
      const emoji = emojis[Math.floor(Math.random() * 2)]
      const showValue =
        '#' +
        item.sw +
        '@' +
        item.name +
        (item.nickname ? emoji + item.nickname : '')
      return {
        label: showValue,
        value: showValue
      }
    })
}

function updateValue(value: string) {
  options.value = []
  if (userData.value.length === 0) {
    axios
      .get('/dist/public/json/user.json')
      .then(function (response) {
        userData.value = response.data
        searchUser(value)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {})
  } else {
    searchUser(value)
  }
}

const recordData = ref([])
const searchRecordValue = ref<ShowRecord[]>([])

function searchRecord(value: string) {
  searchRecordValue.value = recordData.value
    .filter((item: Record) => {
      return (
        item.win.includes(searchUserSW(value)) ||
        item.lose.includes(searchUserSW(value))
      )
    })
    .map((item: Record) => {
      return {
        result: item.win.includes(searchUserSW(value)) ? 'win' : 'lose',
        ...item
      }
    })
}

function selectValue(value: string) {
  if (recordData.value.length === 0) {
    axios
      .get('/dist/public/json/record.json')
      .then(function (response) {
        recordData.value = response.data

        searchRecord(value)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {})
  } else {
    searchRecord(value)
  }
}

const showModal = ref(false)
const searchRecordModel = ref<Record>()

function swname(sw: string) {
  return userData.value.find(item => item.sw === sw)?.name
}

function showModalFun(data: Record) {
  searchRecordModel.value = data
  showModal.value = true
}
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
    @update:value="updateValue"
    @select="selectValue"
  />
  <n-p>
    胜率统计：
    <n-text>
      {{
        searchRecordValue.filter(e => e?.result === 'win').length +
        '/' +
        searchRecordValue.length
      }}
    </n-text>
  </n-p>

  <n-list bordered hoverable clickable>
    <n-list-item v-for="item in searchRecordValue" @click="showModalFun(item)">
      <div style="display: flex; justify-content: space-between">
        <n-tag
          :bordered="false"
          :type="item.result === 'win' ? 'success' : undefined"
          size="small"
        >
          {{ item.result === 'win' ? 'WIN!' : 'LOSE...' }}
        </n-tag>

        <div>{{ item.datetime }}</div>
      </div>
    </n-list-item>
  </n-list>

  <n-modal
    style="width: 80%; max-width: 750px"
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    title="对战详情"
    :bordered="false"
  >
    <n-h3  style="display: flex; justify-content: space-between">
      <n-text type="success">WIN!</n-text>
      <n-text type="success">{{ searchRecordModel?.score.win }}%</n-text>
    </n-h3>
    <n-list bordered>
      <n-list-item v-for="item in searchRecordModel?.win">
        <n-text
          :type="item === searchUserSW(searchUserValue) ? 'success' : 'default'"
        >
          {{ swname(item) }}
        </n-text>
      </n-list-item>
    </n-list>

    <n-h3 style="display: flex; justify-content: space-between">
      <n-text type="error">LOSE...</n-text>
      <n-text type="error">{{ searchRecordModel?.score.lose }}%</n-text>
    </n-h3>
    <n-list bordered>
      <n-list-item v-for="item in searchRecordModel?.lose">
        <n-text
          :type="item === searchUserSW(searchUserValue) ? 'error' : 'default'"
        >
          {{ swname(item) }}
        </n-text>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style scoped></style>
