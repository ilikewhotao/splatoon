<script setup lang="ts">
import {
  NIcon,
  darkTheme,
  type MenuOption,
  type DrawerPlacement
} from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'

import MenuComponent from './components/MenuComponent.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100vh">
      <n-layout-header
        style="
          height: 64px;
          padding: 0 24px;
          display: flex;
          align-items: center;
        "
        bordered
      >
        <MenuComponent />
      </n-layout-header>

      <n-layout
        position="absolute"
        style="top: 64px; bottom: 64px"
        content-style="padding: 24px;"
        :native-scrollbar="false"
      >
        <RouterView />
      </n-layout>

      <n-layout-footer
        position="absolute"
        style="
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 24px;
        "
        bordered
      >
        最终解释权归小白所有
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped></style>
