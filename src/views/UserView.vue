<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import type { DataTableColumns } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

type User = {
  sw: string
  username: string
  nickname: string
}

const createColumns = (): DataTableColumns<User> => {
  return [
    { title: '玩家名称&昵称', key: 'name' },
    { title: 'SW', key: 'sw' }
  ]
}
const columns = createColumns()
const loading = ref(false)
const emojis = ['🦑', '🐙']
const filterUsers = computed(() => {
  return users.value.map(item => {
    const emoji = emojis[Math.floor(Math.random() * 2)]
    return {
      sw: item.sw,
      name: item.username + (item.nickname ? ` ${emoji + item.nickname}` : '')
    }
  })
})

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
    const data = await getJson('./json/user.json')
    setTimeout(() => {
      loading.value = false
      userStore.setUsers(data)
    }, 1000)
  }
}
getUser()
</script>

<template>
  <n-alert title="注意" type="warning">
    玩家名称为《斯普拉遁3》游戏内的玩家名称，请仔细检查玩家名称是否存在错误，这会影响到对局结算计分。
  </n-alert>
  <n-p>
    参赛人数：<n-text style="font-size: 24px">{{
      filterUsers.length || '--'
    }}</n-text>
  </n-p>
  <n-data-table
    :loading="loading"
    :columns="columns"
    :data="filterUsers"
    :bordered="false"
    :single-line="false"
    :scroll-x="400"
  />
</template>

<style scoped></style>
