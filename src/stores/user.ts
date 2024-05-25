import { ref } from 'vue'
import { defineStore } from 'pinia'

type User = {
  sw: string
  username: string
  nickname: string
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])
  function setUsers(data: User[]) {
    users.value = data
  }
  function swToUsername(sw: string) {
    return users.value.find(item => item.sw === sw)?.username
  }
  return { users, setUsers, swToUsername }
})
