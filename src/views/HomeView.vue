<template>
  <div class="home">
    <div class="noti-section">
      <div class="title">
        <strong>Notifications</strong>
        <div class="num">{{ this.messageStore.msgCount }}</div>
        <button class="btn">Mark all as read</button>
      </div>
      <div class="noti-list">
        <div class="msgs">
          <div v-for="item in messageStore.messages" :key="item.name" 
          :class="['', {'msg' : item.readyn === 'n', 'rd-msg' : item.readyn === 'y'}]" @click="messageStore.changeRead(item.name)">
            <img :src="require(`@/assets/images/${item.imgUrl}`)" class="user-img">
            <span>
              <div v-html="item.message"/>
              <div v-html="item.ago"/>
              <div v-if="item.prvMsg" v-html="item.prvMsg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useMessageStore } from '@/stores/message.js'

const useMsgList = () => {
  const list = require('@/assets/data/content.json')
  const msgCount = list.length

  return { list, msgCount }
}

export default defineComponent ({
  name: 'HomeView',
  setup() {
    const msgList = useMsgList()
    const messageStore = useMessageStore()

    return { msgList, messageStore }
  },
  created() {
    this.messageStore.resetMessage()
  },
})
</script>
