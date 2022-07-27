<template>
	<div style="height: 60px;box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);border-radius: 30px;
	transition: all .5s;overflow: hidden;" @mouseenter="enter"
	@mouseleave="leave" :style="{'width':width+'px'}">
		<div style="width: 50px;height: 50px;background-color: #efc21a;border-radius: 25px;
		display: flex;justify-content: center;align-items: center;position: absolute;top: 5px;left: 5px;">
			<el-icon size=30><Search /></el-icon>
		</div>
		<input style="width: 200px;height: 50px;position: absolute;top: 5px;left:70px ;
		font-size: 25px;border: none;outline: none;" placeholder="Please input..." v-if="isExisted" v-model="msg" @keydown="ischange" @keyup.enter="send"/>
	</div>
</template>

<script setup>

import {inject, ref} from 'vue'


let width=ref(60);
let isExisted=ref(false);
let change = false
let msg = ref('')
const router = useRouter()
const socket = inject('socket')
const reload = inject('reload')

socket.on('response_stock', (response) => {
  console.log(response)
  //页面跳转
  router.push({
    path: "/about",
    params: {data: response}
  })
  reload()
})

function ischange(){
  if(msg.value!=='') change=true
  else change=false
}

function send(){
  if(change){
    socket.emit("require_stock", msg.value)
  }
}

function enter(){
	width.value=300;
	isExisted.value=true;
}

function leave(){
	width.value=60;
	isExisted.value=false;
}
</script>
