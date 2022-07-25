<template>
  <!-- <el-input @change="ischange" v-model="input" placeholder="Please input ...">
    <template #append>
      <el-button type="primary" @click="buildconn" @keyup.enter="buildconn">Search
        <el-icon class="el-icon--right">
        <Search />
      </el-icon>
      </el-button>
    </template>
  </el-input>
  <el-alert v-if="seen" title="error alert" type="error" /> -->
  <div style="height: 100px;width: 700px;box-shadow:0 0 30px 10px rgba(0,0,0,0.9) ;border-radius: 50px;position: relative;background-color: rgb(255,255,255);">

    <input style="width: 500px;position: absolute;height: 70px;top: 15px;font-size: 30px;border: none;outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0);transition: all .5s ease-in-out;"
           placeholder="Please input ..." @focus="focus" @blur="blur" :style="{'left':textLeft+'px'}"
           v-model="input" @keydown="ischange()" @keyup.enter="buildconn"/>
    <div style="height: 70px;position: absolute;top: 15px;width: 70px;border-radius: 35px;background-color: #efc21a;
	display: flex;justify-content: center;align-items: center;transition: all .5s ease-in-out;" :style="{'left':searchLeft+'px'}"
         @click="buildconn">
      <el-icon size=30><Search /></el-icon>
    </div>
  </div>
</template>

<script setup>



import { Search } from '@element-plus/icons-vue'
import {ref, defineEmits,inject} from'vue'
import {useRouter} from 'vue-router'

// 定义emit事件
const emit = defineEmits({
  'onSubmit': null,
})

let searchLeft=ref(15);
let textLeft=ref(100);
function focus(){
  searchLeft.value=615;
  textLeft.value=30;
  emit('isfocused',true);
}
function blur(){
  searchLeft.value=15;
  textLeft.value=100;
  emit('isfocused',false);
}



const input = ref('')
// console.log(input.value)
const socket = inject('socket')

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
//socket.emit('require_stock', 'ZOOM')

// socket.on('response_stock', ()=>{
//   console.log('get data')
// })
function ischange(){
  if(input.value!=''){
    change = true;
  }
  else change=false;
}
function buildconn() {
  console.log(input.value)
  if(change){
    socket.emit("require_stock", input.value, () => {
      //console.log(response)
      socket.on('response_stock', (response) => {
        console.log(response)
        //页面跳转
        router.push({
          name: 'about',
          params: {data: response}
        })
      })
    })
  }
}
</script>

