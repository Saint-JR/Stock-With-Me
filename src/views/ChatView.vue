<template>
  <div style="width: 100%;height: 100%;position: absolute;">
	<img src="../assets/chat.jpg" style="height: 100%;width: 100%;position: absolute;top: 0;left: 0;"/>
	<div style="position: absolute;width: 100%;height: 100%;display: flex;justify-content: center;">
		<div style="width: 40%;height: 100%;position: relative;">
			<div style="overflow-y: auto;bottom: 120px;top: 0;width: 100%;position: absolute;
			background-color: rgba(255,255,255,0.9);">
				
				<div v-for="(message,index) in messages" :key="index" style="width: 100%;
				padding-top: 10px;padding-bottom: 10px;">
					<div v-if="message.isFromMe" style="position: relative;">
						<div style="display: flex;justify-content: center;align-items: center;height: 60px;width: 60px;
						background-color: rgb(230,230,230);border-radius: 30px;position: absolute;right: 20px;top: -5px;">
							<el-icon size=30><User/></el-icon>
						</div>
						<div style="
						margin-left: 30px;margin-right: 100px;word-wrap:break-word;word-break:normal;
						display: flex;justify-content: flex-end;">
							<div style="padding: 10px;background-color:#efc21a ;border-radius: 20px 20px 8px 20px;font-size: 25px;">{{message.text}}</div>
								
						</div>
						
					</div>
					<div v-if="!message.isFromMe" style="position: relative;">
						<div style="display: flex;justify-content: center;align-items: center;height: 60px;width: 60px;
						background-color: rgb(230,230,230);border-radius: 30px;position: absolute;left: 20px;top: -5px;">
							<el-icon size=30><UserFilled/></el-icon>
						</div>
						<div style="
						margin-left: 100px;margin-right: 30px;word-wrap:break-word;word-break:normal;
						">
							<div style="padding: 10px;background-color:#efc21a ;border-radius: 20px 20px 20px 8px;font-size: 25px;text-align: left;">
							{{message.text}}
							</div>
								
						</div>
					</div>
				</div>
				
			</div>
			<div  style="height:120px;position: absolute;bottom: 0;width: 100%;
			background-color: rgb(220,220,220);display: flex;justify-content: space-around;align-items:center;">
				<div style="width: 70%;height: 70px;border-radius: 20px;background-color: #FFFFFF;
				display: flex;justify-content: center;align-items:center;">
					<input style="width: 90%;height: 50px;
					font-size: 30px;border: none;outline: none;"/>
				</div>
				<div style="width: 100px;height: 50px;border-radius: 20px;background-color: #efc21a;
				display: flex;justify-content: center;align-items:center;font-size: 22px;font-weight: 700;">发送</div>
			</div>
		</div>
	</div>
	
	
  </div>
</template>

<script>
//没法和后端测
import {ref} from 'vue'
export default {
  name: "ChatView",
  setup(){
	let messages=ref([
		{
			isFromMe:true,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		},
		{
			isFromMe:false,
			text:"111111111111111111111111111111111111111111111111111111111111111111111"
		}
		
	]);
	return{
		messages,
	}
  },
}
</script>

<style>

</style>