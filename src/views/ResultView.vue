<script setup lang="ts">
import { useRecordStore } from '@/stores/record'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import { NA, type DataTableColumns } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { computed, ref, h } from 'vue'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

type Table = {
  sw: string
  name: string
  score: number
  records: {
    datetime: string
    status: string
  }[]
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

const createColumns = ({
  openModal
}: {
  openModal: (row: Table) => void
}): DataTableColumns<Table> => {
  return [
    { title: '玩家名称&昵称', key: 'name' },
    {
      title: '胜率&得分区间',
      key: 'scores',
      render(row) {
        return h(
          NA,
          {
            style: {
              textDecoration: 'underline'
            },
            onClick: () => openModal(row)
          },
          {
            default: () => row.score + '分'
          }
        )
      }
    }
  ]
}
const showModal = ref(false)
const modelContent = ref<{ datetime: string; status: string }[]>([])
const openModal = (row: Table) => {
  showModal.value = true
  modelContent.value = row.records
}
const columns = createColumns({ openModal })
const loading = ref(false)
const emojis = ['🦑', '🐙']

const resultRecord = ref<Table[]>([])

const filterRecord = () => {
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

      let score: number = 0
      let resultRecords: {
        datetime: string
        status: string
      }[] = []

      let newArrry = []
      if (filterRecords.length <= 20) {
        newArrry = filterRecords
        score = 2 * win - 20
      } else {
        for (let i = 0; i < 20; i++) {
          const index = Math.floor(Math.random() * (length - i))
          newArrry.push(filterRecords[index])
          filterRecords.splice(index, 1)
        }

        score = newArrry.filter(v => v?.status === 'win').length * 2 - 20
      }

      resultRecords = newArrry
        .map(v => {
          return {
            datetime: v.datetime,
            status: v.status
          }
        })
        .sort(
          (a, b) =>
            new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
        )
      return {
        sw: item.sw,
        score: score,
        records: resultRecords,
        name: item.username + (item.nickname ? ` ${emoji + item.nickname}` : '')
      }
    })
    .sort((a, b) => b.score - a.score)
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

    loading.value = false
    userStore.setUsers(data)
  }
}

async function getRecord() {
  if (records.value.length === 0) {
    const data = await getJson('./json/record.json?t=' + new Date().getTime())
    recordStore.setRecords(data)
    await getUser()
  }
  filterRecord()
}

getRecord()
</script>

<template>
  <n-button type="primary" @click="filterRecord">重新模拟结果</n-button>
  <n-p>以下结果为模拟结果，不代表最终结果：</n-p>
  <n-data-table
    :loading="loading"
    :columns="columns"
    :data="resultRecord"
    :bordered="false"
    :single-line="false"
  />

  <n-modal
    style="width: 80%; max-width: 750px"
    v-model:show="showModal"
    preset="card"
    title="抽取战绩"
    :bordered="false"
  >
    <n-list bordered>
      <n-list-item v-for="item in modelContent">
        <n-text style="display: flex; justify-content: space-between">
          <n-text :type="item.status === 'win' ? 'success' : 'error'">
            {{ item.datetime }}
          </n-text>
          <n-text :type="item.status === 'win' ? 'success' : 'error'">
            {{ item.status === 'win' ? '+1' : '-1' }}
          </n-text>
        </n-text>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style scoped></style>
