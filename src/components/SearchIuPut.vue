<template>
  <el-input @change="ischange" v-model="input" placeholder="Please input ...">
    <template #append>
      <el-button type="primary" @click="buildconn" @keyup.enter="buildconn">Search
        <el-icon class="el-icon--right">
        <Search />
      </el-icon>
      </el-button>
    </template>
  </el-input>
  <el-alert v-if="seen" title="error alert" type="error" />
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref, inject } from 'vue'
import {useRouter} from 'vue-router'

const input = ref('')
// console.log(input.value)
const socket = inject('socket')

let seen = false
let change = false
//let seqnum = 0;
const router = useRouter()

socket.on("connect", () => {
  console.log(socket.id);

});



// socket.on("msg", (res) => {
//   console.log("", res);
//   });

//test
  socket.emit('require_stock', 'ZOOM')

  // socket.on('response_stock', ()=>{
  //   console.log('get data')
  // })
function ischange(){
    change = true
}
function buildconn() {
  console.log(input.value)
  if(change){
    socket.emit("require_stock", input.value, () => {
      console.log(1)
      //console.log(response)
      socket.on('response_stock', (response) => {
        console.log(2)
        //页面跳转
        router.push({
          name: 'about',
          params: {data: response}
        })
      })
    })
  }
}

// onMounted(()=>window.addEventListener('click', buildconn))
// onUnmounted(()=>window.addEventListener('click', buildconn))
</script>

