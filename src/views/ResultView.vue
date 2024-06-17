<script setup lang="ts">
import { useRecordStore } from '@/stores/record'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import type { DataTableColumns } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

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

const userToSW = (searchUserValue: string) => {
  return searchUserValue.slice(
    searchUserValue.indexOf('#') + 1,
    searchUserValue.indexOf('#') + 18
  )
}

const createColumns = (): DataTableColumns<User> => {
  return [
    { title: '玩家名称&昵称', key: 'name' },
    { title: '胜率&得分区间', key: 'scores' }
  ]
}
const columns = createColumns()
const loading = ref(false)
const emojis = ['🦑', '🐙']
const resultRecord = ref<{ scores: number; name: string }[]>([])
const filterUsers = () => {

  
  resultRecord.value = users.value
    .map(item => {
      const emoji = emojis[Math.floor(Math.random() * 2)]
      const filterRecords = records.value
        .filter((i: Record) => {
          return (
            i.win.sw.includes(userToSW(item.sw)) ||
            i.lose.sw.includes(userToSW(item.sw))
          )
        })
        .map((i: Record) => {
          return {
            sw: userToSW(item.sw),
            status: i.win.sw.includes(userToSW(item.sw)) ? 'win' : 'lose',
            ...i
          }
        })

      const length = filterRecords.length

      const win = filterRecords.filter(v => v?.status === 'win').length
      const lose = length - win

      let max = 2 * win - 20
      let min = 20 - 2 * lose
      max = max > 20 ? 20 : max
      min = min < -20 ? -20 : min

      let scores: number = 0

      if (length <= 20) {
        scores = 2 * win - 20
      } else {
        let newArrry = []
        for (let i = 0; i < 20; i++) {
          const index = Math.floor(Math.random() * length)
          newArrry.push(filterRecords[index])
          filterRecords.splice(index, 1)
        }

        scores = newArrry.filter(v => v?.status === 'win').length * 2 - 20
      }

      const bi = length === 0 ? 0 : win / length

      return {
        scores: scores,
        name: item.username + (item.nickname ? ` ${emoji + item.nickname}` : '')
      }
    })
    .sort((a, b) => b.scores - a.scores)
}

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
    loading.value = true
    const data = await getJson('./json/user.json?t=' + new Date().getTime())
    setTimeout(() => {
      loading.value = false
      userStore.setUsers(data)
      filterUsers()
    }, 1000)
  }
}

async function getRecord() {
  if (records.value.length === 0) {
    const data = await getJson('./json/record.json?t=' + new Date().getTime())
    recordStore.setRecords(data)
    await getUser()

  }
}

getRecord()
</script>

<template>
  <n-button type="primary" @click="filterUsers">模拟结果</n-button>
  <n-p>以下结果为模拟结果，不代表最终结果：</n-p>
  <n-data-table
    :loading="loading"
    :columns="columns"
    :data="resultRecord"
    :bordered="false"
    :single-line="false"
  />
</template>

<style scoped></style>
