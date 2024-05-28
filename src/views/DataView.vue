<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

type User = {
  sw: string
  username: string
  nickname: string
}

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

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

const createColumns = (): DataTableColumns<User> => [
  {
    type: 'selection'
  },
  {
    title: '玩家名称',
    key: 'username'
  },
  {
    title: 'SW',
    key: 'sw'
  }
]
const columns = createColumns()
const checkedRowKeysRef = ref<DataTableRowKey[]>([])
function handleCheck(rowKeys: DataTableRowKey[]) {
  checkedRowKeysRef.value = rowKeys
  console.log(checkedRowKeysRef.value)
}
const rowKey = (row: User) => row.sw

const recordJson = ref()
const datetime = ref('2024-05-27 20:00')
const win = ref(0)
const lose = ref(0)
function searchUser() {
  recordJson.value = `
  {
    "datetime": "${datetime.value}",
    "win": {
      "score": ${win.value},
      "sw": [
        "${checkedRowKeysRef.value[0]}",
        "${checkedRowKeysRef.value[1]}",
        "${checkedRowKeysRef.value[2]}",
        "${checkedRowKeysRef.value[3]}"
      ]
    },
    "lose": {
      "score": ${lose.value},
      "sw": [
        "${checkedRowKeysRef.value[4]}",
        "${checkedRowKeysRef.value[5]}",
        "${checkedRowKeysRef.value[6]}",
        "${checkedRowKeysRef.value[7]}"
      ]
    }
  }
  `
}

getUser()
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="users"
    :row-key="rowKey"
    @update:checked-row-keys="handleCheck"
  />
  <div>
    <n-date-picker
      v-model:formatted-value="datetime"
      value-format="yyyy-MM-dd HH:mm"
      type="datetime"
      clearable
    />
    <n-input-number v-model:value="win" clearable />
    <n-input-number v-model:value="lose" clearable />
  </div>
  <n-button type="primary" @click="searchUser">提取</n-button>
  <n-input
    v-model:value="recordJson"
    type="textarea"
    placeholder="基本的 Textarea"
  />
</template>

<style>
@media screen and (min-width: 750px) {
  .n-grid > div {
    padding: 0 24px;
  }
}
</style>
