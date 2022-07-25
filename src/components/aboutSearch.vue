<template>
	<div style="height: 60px;box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);border-radius: 30px;
	transition: all .5s;overflow: hidden;" @mouseenter="enter"
	@mouseleave="leave" :style="{'width':width+'px'}">
		<div style="width: 50px;height: 50px;background-color: #efc21a;border-radius: 25px;
		display: flex;justify-content: center;align-items: center;position: absolute;top: 5px;left: 5px;">
			<el-icon size=30><Search /></el-icon>
		</div>
		<input style="width: 200px;height: 50px;position: absolute;top: 5px;left:70px ;
		font-size: 25px;border: none;outline: none;" placeholder="Please input..." v-if="isExisted"/>
	</div>
</template>

<script setup>
// 	import {
// 		Search
// 	} from '@element-plus/icons-vue'
// 	import {
// 		ref,
// 		defineEmits,
// 		inject
// 	} from 'vue'
// 	import {
// 		useRouter
// 	} from 'vue-router'

// 	// 定义emit事件
// 	const emit = defineEmits({
// 		'onSubmit': null,
// 	})

// 	let searchLeft = ref(15);
// 	let textLeft = ref(100);

// 	function focus() {
// 		searchLeft.value = 615;
// 		textLeft.value = 30;
// 		emit('isfocused', true);
// 	}

// 	function blur() {
// 		searchLeft.value = 15;
// 		textLeft.value = 100;
// 		emit('isfocused', false);
// 	}



// 	const input = ref('')
// 	// console.log(input.value)
// 	const socket = inject('socket')

// 	let change = false
// 	//let seqnum = 0;
// 	const router = useRouter()

// 	socket.on("connect", () => {
// 		console.log(socket.id);

// 	});



// 	// socket.on("msg", (res) => {
// 	//   console.log("", res);
// 	//   });

// 	//test
// 	socket.emit('require_stock', 'ZOOM')

// 	// socket.on('response_stock', ()=>{
// 	//   console.log('get data')
// 	// })
// 	function ischange() {
// 		if (input.value != '') {
// 			change = true;
// 		} else change = false;
// 	}

// 	function buildconn() {
// 		console.log(input.value)
// 		if (change) {
// 			router.push({
// 				name: 'about',
// 				params: {
// 					data: `{
//   "trick": "AAPL",
//   "seqnum": 2,
//   "positive" : 10,
//   "negative" : 5,
//   "neutral": 20,
//   "total": 35,
//   "news": [
//     {"title": "1",
//     "context": "11",
//     "link": "https://111.com",
//     "type": "success"},
//     {"title": "2",
//       "context": "22",
//       "link": "https://222.com",
//       "type": "info"},
//     {"title": "3",
//       "context": "33",
//       "link": "https://333.com",
//       "type": "danger"}
//   ]
// }`
// 				}
// 			})
// 			console.log(3333)
// 			// socket.emit("require_stock", input.value, () => {
// 			//   console.log(1)
// 			//   //console.log(response)
// 			//   socket.on('response_stock', (response) => {
// 			//     console.log(2)
// 			//     //页面跳转

// 			//   })
// 			// })
// 		}
// 	}

import {ref} from 'vue'
let width=ref(60);
let isExisted=ref(false);
function enter(){
	width.value=300;
	isExisted.value=true;
}

function leave(){
	width.value=60;
	isExisted.value=false;
}
</script>
