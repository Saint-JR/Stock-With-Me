<!--duwenjie 2022/7/25-->
<template>
  <div style="width: 100%;height: 100%;position: absolute;">
	<img src="../assets/chat.jpg" style="height: 100%;width: 100%;position: absolute;top: 0;left: 0;"/>
	<div style="position: absolute;width: 100%;height: 100%;display: flex;justify-content: center;">
    <img src="../assets/logo20.png" alt="logo" style="width: 30%; height: auto; display: block; position: absolute; left: 0; top: 0; margin: 0;" @click="gotohome">
    <div style="position: absolute; right: 60px; top: 8px;">
      <el-popover
          placement="bottom"
          title="Click"
          :width="200"
          trigger="hover"
          content="You can talk with us to evaluate your risk"
      >
        <template #reference>
          <el-button type="success" @click="forward" class="forward">
            <el-icon><ArrowRightBold /></el-icon>
          </el-button>
        </template>
      </el-popover>
    </div>
		<div style="width: 40%;height: 100%;position: relative;">
			<div style="overflow-y: auto;bottom: 120px;top: 0;width: 100%;position: absolute;
			background-color: rgba(255,255,255,0.9);">
				
				<div v-for="(message,index) in messages" :key="index" style="width: 100%;
				padding-top: 10px;padding-bottom: 10px;">
          <div style="position: relative;">
            <div style="display: flex;justify-content: center;align-items: center;height: 60px;width: 60px;
						background-color: rgb(230,230,230);border-radius: 30px;position: absolute;left: 20px;top: -5px;">
              <el-icon v-if="!message.isFromMe"  size=30><UserFilled/></el-icon>
              <el-icon v-if="message.isFromMe" size=30><User/></el-icon>
            </div>
            <div style="
						margin-left: 100px;margin-right: 30px;word-wrap:break-word;word-break:normal;
						">
              <div style="padding: 10px;background-color:#efc21a ;border-radius: 20px 20px 20px 8px;font-size: 25px;text-align: left;">
                {{message.text}}
              </div>

            </div>
          </div>

<!--					<div v-if="message.isFromMe" style="position: relative;">-->
<!--						<div style="display: flex;justify-content: center;align-items: center;height: 60px;width: 60px;-->
<!--						background-color: rgb(230,230,230);border-radius: 30px;position: absolute;right: 20px;top: -5px;">-->
<!--							<el-icon size=30><User/></el-icon>-->
<!--						</div>-->
<!--						<div style="-->
<!--						margin-left: 30px;margin-right: 100px;word-wrap:break-word;word-break:normal;-->
<!--						display: flex;justify-content: flex-end;">-->
<!--							<div style="padding: 10px;background-color:#efc21a ;border-radius: 20px 20px 8px 20px;font-size: 25px;">{{message.text}}</div>-->
<!--						</div>-->

<!--					</div>-->
<!--					<div v-if="!message.isFromMe" style="position: relative;">-->
<!--						<div style="display: flex;justify-content: center;align-items: center;height: 60px;width: 60px;-->
<!--						background-color: rgb(230,230,230);border-radius: 30px;position: absolute;left: 20px;top: -5px;">-->
<!--							<el-icon size=30><UserFilled/></el-icon>-->
<!--						</div>-->
<!--						<div style="-->
<!--						margin-left: 100px;margin-right: 30px;word-wrap:break-word;word-break:normal;-->
<!--						">-->
<!--							<div style="padding: 10px;background-color:#efc21a ;border-radius: 20px 20px 20px 8px;font-size: 25px;text-align: left;">-->
<!--							{{message.text}}-->
<!--							</div>-->

<!--						</div>-->
<!--					</div>-->
				</div>
				
			</div>
			<div  style="height:120px;position: absolute;bottom: 0;width: 100%;
			background-color: rgb(220,220,220);display: flex;justify-content: space-around;align-items:center;">
				<div style="width: 70%;height: 70px;border-radius: 20px;background-color: #FFFFFF;
				display: flex;justify-content: center;align-items:center;">
					<input style="width: 90%;height: 50px;
					font-size: 30px;border: none;outline: none;" v-model="msg" @keydown="ischange" @keyup.enter="send"/>
				</div>
				<div style="width: 100px;height: 50px;border-radius: 20px;background-color: #efc21a;
				display: flex;justify-content: center;align-items:center;font-size: 22px;font-weight: 700;" @click="send">Send</div>
			</div>
		</div>
	</div>
	
	
  </div>
</template>

<script setup>
import {inject, onMounted, ref} from 'vue'
import {useRouter} from "vue-router";

const socket = inject('socket')
const router = useRouter()

const msg = ref('')
let change = false


let messages=ref([
  {
    isFromMe: false,
    text: "Hello, I'm a robot. You can tell something with me. And if you want to assess your risk tolerance in finance, please input \"assessment\"."}
  ])

function gotohome(){
  router.push({
    name:"home"
  })
}
function ischange(){
  if(msg.value!==''){
    change = true;
  }
  else change=false;
}

function send(){
  if(change){
    socket.emit("get_msg", msg.value)
    messages.value.push({isFromMe: true, text: msg.value})
    msg.value=''
  }
}

function reset(){
  socket.emit("get_msg", "hello")
}

socket.on("post_msg", (response)=>{
  console.log(response)
  messages.value.push({isFromMe: false, text: response})
})

function forward() {
  //???????????? vuex ?????? backward ????????????
  router.push({
    path: "/"
  })
}

onMounted(()=>{
  reset()
})

</script>

<style>

</style>