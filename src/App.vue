<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { zhCN, dateZhCN } from 'naive-ui'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import RecordView from '@/views/RecordView.vue'
import ResultView from '@/views/ResultView.vue'
import DataView from '@/views/DataView.vue'

const tabs = ref([
  {
    name: 'home',
    title: '🏆小白杯',
    components: shallowRef(HomeView)
  },
  {
    name: 'user',
    title: '参赛人员',
    components: shallowRef(UserView)
  },
  {
    name: 'record',
    title: '战绩查询',
    components: shallowRef(RecordView)
  },
  {
    name: 'result',
    title: '结果公示',
    components: shallowRef(DataView)
  }
])
const currentTab = ref('home')
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-layout class="wrapper" style="height: 100vh">
      <n-layout-header
        style="
          height: 64px;
          padding: 0 24px;
          display: flex;
          align-items: center;
        "
        bordered
      >
        <n-tabs type="bar">
          <n-tab
            v-for="item in tabs"
            :name="item.name"
            @click="currentTab = item.name"
          >
            {{ item.title }}
          </n-tab>
        </n-tabs>
      </n-layout-header>

      <n-layout
        :native-scrollbar="false"
        position="absolute"
        style="top: 64px; bottom: 64px"
      >
        <n-tabs
          type="line"
          animated
          class="tab_hidden"
          v-model:value="currentTab"
        >
          <n-tab-pane
            v-for="item in tabs"
            :name="item.name"
            :tab="item.title"
            class="pane_class"
          >
            <component :is="item.components"></component>
          </n-tab-pane>
        </n-tabs>
      </n-layout>

      <n-layout-footer
        position="absolute"
        style="
          height: 64px;
          padding: 0 24px;
          display: flex;
          align-items: center;
        "
        bordered
      >
        最终解释权归小白所有
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style>
.tab_hidden .n-tabs-nav {
  display: none;
}
.n-tabs.n-tabs--top .pane_class {
  padding: 24px;
  box-sizing: border-box;
}
</style>
