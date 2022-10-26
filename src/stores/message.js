import { defineStore } from 'pinia';
import _ from 'lodash';
import msgList from '@/assets/data/content.json';

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    messages: [],
  }),
  getters: {
    msgCount() {
      let count = 0
      this.messages.forEach((item) => {
        if (item.readyn === 'n') count++
      })
      return count
    }
  },
  actions: {
    resetMessage() {
      this.messages = _.cloneDeep(msgList)

      this.messages.forEach((item) => {
        _.set(item, 'readyn', 'n')
      })
    },
    changeRead(name) {
      this.messages.forEach((item) => {
        if (item.name === name) {
          item.readyn = 'y'
        }
      })
    }
  }
})