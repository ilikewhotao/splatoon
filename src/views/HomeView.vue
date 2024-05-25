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
      .get('/splatoon/public/json/user.json')
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
      .get('/splatoon/public/json/record.json')
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
  <n-h1>斯普拉遁3 🏆小白杯</n-h1>
  <n-h3 prefix="bar"> 报名流程 </n-h3>
  <n-p>
    需要玩家提供SW码以及游戏内的玩家名称。（活动期间尽量不要修改玩家名称）
  </n-p>
  <n-divider />
  <n-h3 prefix="bar"> 活动时间 </n-h3>
  <n-ul>
    <n-li> 开始时间：2024-05-25（周六）</n-li>
    <n-li> 结束时间：2024-06-14（周五）</n-li>
  </n-ul>
  <n-divider />
  <n-h3 prefix="bar"> 活动流程 </n-h3>
  <n-ul>
    <n-li>参加的玩家首先需要报名</n-li>
    <n-li>每场对局需要8名玩家和1名裁判，裁判进入观看席位</n-li>
    <n-li>由裁判创建房间，设置房间参数（随机地图、取消追加能力等等）</n-li>
    <n-li>8名玩家随机分成两组对战</n-li>
    <n-li>时间结束，涂地面积多的获胜</n-li>
  </n-ul>

  <n-divider />
  <n-h3 prefix="bar"> 注意事项 </n-h3>
  <n-ul>
    <n-li>禁止使用“2024夏季赛”新武器参与活动</n-li>
    <n-li>禁止使用其他账号参与活动</n-li>
  </n-ul>

  <n-divider />
  <n-h3 prefix="bar"> 计分规则 </n-h3>
  <n-ul>
    <n-li>胜利组 每人+1分 </n-li>
    <n-li>失败组 每人-1分</n-li>
  </n-ul>
  <n-p>如果存在玩家掉线，导致游戏中断或继续，本次对局都视为无效。</n-p>
  <n-p>
    最终会从玩家所有对局中随机选出20局，合计得出最终得分。（不满20局的，剩余场次均按照失败计算）
  </n-p>

  <n-divider />
  <n-h3 prefix="bar"> 活动奖励 </n-h3>
  <n-p>本活动由小白独家赞助💰</n-p>
  <n-p>本次活动第一名可以获得《斯普拉遁3》amiibo手办任选一个</n-p>
  <div style="max-width: 750px; margin: 0px auto">
    <img
      src="https://img2.imgtp.com/2024/05/23/9kGGvZ01.jpg"
      alt=""
      style="display: block; width: 100%"
    />
  </div>
</template>

<style scoped></style>
