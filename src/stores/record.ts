import { ref } from 'vue'
import { defineStore } from 'pinia'

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

export const useRecordStore = defineStore('record', () => {
  const records = ref<Record[]>([])
  function setRecords(data: Record[]) {
    records.value = data
  }
  return { records, setRecords }
})
