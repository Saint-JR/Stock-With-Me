<template>
  <el-input v-model="input" placeholder="Please input ...">
    <template #append>
      <el-button type="primary" @click="buildconn">Search<el-icon class="el-icon--right"><Search /></el-icon></el-button>
    </template>
  </el-input>
  <el-alert :style="styleObject" title="error alert" type="error" />
</template>

<script>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
// import { inject } from "vue"
//
// const socket = inject("socket")

export default {
  name: 'SearchInPut',
  props:{

  },
  setup(){
    const input = ref('')

    return {input}
  },
  data() {
    return {
      styleObject: {
        display: 'none'
      }
    }
  },
  methods: {
    buildconn() {
      console.log(self.input)
      if (self.$socket.connected){
        self.$socket.emit("stock", self.input, (err, response) => {
          if (err) {
            self.styleObject.display = 'block'
          } else {
            //build connect success
            //router
            console.log(response);
          }
        })
      } else{
        self.$socket.emit("connect", self.input, (err, response) => {
          if (err) {
            self.styleObject.display = 'block'
          } else {
            //build connect success
            //router
            console.log(response);
          }
        })
      }
    },


  },
  components: {
    Search
  }
}
</script>

