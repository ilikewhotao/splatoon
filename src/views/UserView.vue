<script setup lang="ts">
import axios from 'axios'
import type { DataTableColumns } from 'naive-ui'
import { computed, ref } from 'vue'

type User = {
  sw: string
  name: string
  nickname: string
}

const createColumns = (): DataTableColumns<User> => {
  return [
    {
      title: '玩家名称',
      key: 'name'
    },
    {
      title: 'SW',
      key: 'sw'
    }
  ]
}
const columns = createColumns()

const emojis = ['🦑', '🐙']
const users = ref<User[]>([])
const loading = ref(true)
const userData = computed(() => {
  return users.value.map(item => {
    const emoji = emojis[Math.floor(Math.random() * 2)]
    return {
      sw: item.sw,
      name: item.name + (item.nickname ? ` ${emoji + item.nickname}` : '')
    }
  })
})

function getUser() {
  axios
    .get('/splatoon/dist/public/json/user.json')
    .then(function (response) {
      // 处理成功情况
      setTimeout(() => {
        loading.value = false
        users.value = response.data
      }, 1000)
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error)
    })
    .finally(function () {
      // 总是会执行
    })
}
getUser()
</script>

<template>
  <n-alert title="注意" type="warning">
    玩家名称为《斯普拉遁3》游戏内的玩家名称，请仔细检查玩家名称是否存在错误，这会影响到对局结算计分。
  </n-alert>
  <n-p>
    参赛人数：<n-text style="font-size: 24px">{{
      users.length || '--'
    }}</n-text>
  </n-p>
  <n-data-table
    :loading="loading"
    :columns="columns"
    :data="userData"
    :bordered="false"
    :single-line="false"
    :scroll-x="400"
  />
</template>

<style scoped></style>
