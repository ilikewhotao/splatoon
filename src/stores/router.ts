import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRouterStore = defineStore('router', () => {
  const routerName = ref<string>('home')
  function setRouter(newName: string) {
    routerName.value = newName
  }
  return { routerName, setRouter }
})
