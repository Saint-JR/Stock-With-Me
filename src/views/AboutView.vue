<!--duwenjie 2022/7/22-->
<template>
  <div class="common-layout" style="height: 100%;width: 100%;position: absolute;">
    <el-container class="container-nav">
      <el-header class="header-nav" height="80px">
        <img src="../assets/logo.svg" alt="logo" class="logo" @click="gotohome">
        <div class="search">
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
        </div>
        <el-popover
            placement="bottom"
            title="Finance chat robot"
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
      </el-header>
      <el-main class="main-nav" >
        <!-- 情感分析 -->
        <!-- title -->
        <el-row justify="center">
          <div style="width: 60%;">
            <h1>Stock With Me, Stock Together</h1>
            <h3>An Intelligent Stock Selecting Assistant</h3>
          </div>
        </el-row>
        <h1>Related News Sentiment Analysis</h1>
        <el-row justify="center">
          <!-- process -->
          <div class="analyze">
            <el-progress type="circle" indeterminate=true :percentage=positive  color=" #95d475">
              <template #default="{ percentage }">
                <span class="percentage-value">{{ percentage }}%</span>
                <span class="percentage-label">Positive</span>
              </template>
            </el-progress>
            <el-progress type="circle" :percentage=neutral  color=" #b1b3b8">
              <template #default="{ percentage }">
                <span class="percentage-value">{{ percentage }}%</span>
                <span class="percentage-label">Netural</span>
              </template>
            </el-progress>
            <el-progress type="circle" :percentage=negative  color=" #f89898">
              <template #default="{ percentage }">
                <span class="percentage-value">{{ percentage }}%</span>
                <span class="percentage-label">Negative</span>
              </template>
            </el-progress>
          </div>
        </el-row>
        <!-- world crowd-->
        <el-row justify="center">
          <div style="width: 60%"><h1>Word Cloud</h1></div>
          <div style="height: 600px; width: auto;">
            <img :src="'data:;base64,'+ data.wordcloud" style="height: 600px; width: auto">
          </div>
        <!-- describe -->
          <div style="width: 60%;">
            <p>We use Web Crawler to obtain current valuable data, and use NLP to analyze sentiment in the data</p>
          </div>
        </el-row>
        <el-divider />
        <!-- 股票走势 -->
        <el-row justify="center">
          <h1>Stock Forecast Charts</h1>
          <div class = "stocktrend" style="height:700px ;border: 2px solid red;width: 100%;display: flex;align-items: center;">
            <div style="width: 120px;height: 400px;position: absolute;border-radius: 60px;left: 120px;
			box-shadow:0 0 20px 10px rgba(0,0,0,0.3);display: flex;flex-direction: column;justify-content: center;
			">
              <div style="background-color:#efc21a ;width: 80px;height: 80px;border-radius: 40px;position: absolute;left: 20px;
				transition: all .5s;"
                   :style="{'top':select+'px'}"></div>
              <div style="width: 120px;height: 310px;display: flex;flex-direction: column;justify-content:space-between;position: absolute;">
                <div style="font-size: 22px;font-weight: 700;cursor: pointer;" @click="choose(1)">LM</div>
                <div style="font-size: 22px;font-weight: 700;cursor: pointer;" @click="choose(2)">SVM</div>
                <div style="font-size: 22px;font-weight: 700;cursor: pointer;" @click="choose(3)">RFM</div>
              </div>
            </div>

            <div v-if="linear" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column; ">
              <img :src="'data:image/png;base64,'+data.linear_model" style="height: 400px;width: auto; ">
              <div style="width: 60%;">
                <h3>Linear Model</h3>
                <p>linear regression,a very simple method to predict stocks</p>
                <p>simple is power</p>
              </div>
            </div>

            <div v-if="svm" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column; ">
              <img :src="'data:image/png;base64,'+data.svm_model" style="height: 400px;width: auto; ">
              <div style="width: 60%;">
                <h3>SVM</h3>
                <p>SVR is also a kind of supervised learning which if useful in regression. This method construct a hyperplane or set of hyperplanes in a high- or infinite-dimensional space, which can be used for regression</p>
              </div>
            </div>

            <div v-if="dtm" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;">
              <img :src="'data:image/png;base64,'+data.decisiontree_model" style="height: 400px;width: auto; ">
              <div style="width: 60%;">
                <h3>Random Forest Model</h3>
                <p>Random Forest algorithm combines ensemble learning methods with the Decision Tree framework to create multiple randomly drawn Decision Trees from the data, averaging the results to output a new result that often leads to strong predictions</p>
              </div>
            </div>

          </div>
        </el-row>
        <el-divider />
        <!-- 内容摘要 -->
        <el-row justify="center">
          <div style="width: 60%;">
            <h1>News Share</h1>
            <p>We have selected a few relevant news articles for you</p>
          </div>
        </el-row>
        <el-row justify="center">
          <div class="content">
            <component :list=data.news :is="NewsList"></component>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
  <router-view/>
</template>


<script setup>
import {useRoute, useRouter} from "vue-router";
import NewsList from '@/components/NewsList.vue'
import {ref, inject} from "vue"

const route = useRoute()
const router = useRouter()

const parameters = JSON.parse(route.query.data)

let data = parameters

//console.log(data)
//let seqnum = 0
let select = ref(20);
// let describe = ref("")
// let myimage = ref('')

let linear = ref(true)
let svm = ref(false)
let dtm = ref(false)

//progress
const positive =  Number(String(data.positive/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))
const negative = Number(String(data.negative/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))
const neutral = Number(String(data.neutral/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))


//console.log(data)

function gotohome(){
  router.push({
    name:"home"
  })
}

function forward(){
  router.push({
    name:"demo"
  })
}

function choose(e){
  if(e==1){
    select.value=20;
    linear.value=true
    svm.value=false
    dtm.value=false
    //myimage = data.linear_model
    // describe = 'linear model'
  }else if(e==2){
    select.value=160;
    linear.value=false
    svm.value=true
    dtm.value=false
    //myimage = data.svm_model
    // describe = 'svm model'
  }else {
    select.value = 300;
    linear.value=false
    svm.value=false
    dtm.value=true
    //myimage = data.decisiontree_model
    // describe = 'decision tree model'
  }
}


// search
let width=ref(60);
let isExisted=ref(false);
let change = false
let msg = ref('')
const socket = inject('socket')

socket.on('response_stock', (response) => {
  console.log(response)
  //页面跳转
  data = JSON.parse(response)
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

<style>
/*font */
h1 { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 45px; font-style: italic; font-variant: normal; font-weight: 700; line-height: 45px; } h3 { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 37px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 29.6px; } p { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 30px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 27px; } blockquote { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 36px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 32.4px; } pre { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 28px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 25.2px; }

body{
  margin: 0;
}

/*process */
.analyze .el-progress--circle {
  margin: 20px;
}

.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 18px;
}

.analyze{
  padding: 20px;
}

.content{
  width: 80%;
  height: 600px;
  padding: 20px;
}

.stocktrend{
  padding: 20px;
}

.search{
  width: 30%;
  height: auto;
  position: absolute;
  left: 25%;
  top:8px;
}

.forward{
  position:absolute;
  right: 60px;
  top: 8px;
}

.logo{
  width: 30%;
  height: auto;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
}

.container-nav{
  /*background-color: #E6E8EB;*/
  /*border-color: #E6E8EB;*/
  display: flex;
  margin: 0;
}

.header-nav{
  position: relative;
  border-width: 0 0 0.1em 0;
  border-style: solid;
  border-color: #E6E8EB;
}

.main-nav{
  position: relative;
}

</style>
