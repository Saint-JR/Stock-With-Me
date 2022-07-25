<template>
  <div class="common-layout" style="height: 100%;width: 100%;position: absolute;">
    <el-container class="container-nav">
      <el-header class="header-nav" height="80px">
        <img src="../assets/logo.svg" alt="logo" class="logo">
        <div class="search">
          <component :is="SearchInPut"/>
        </div>
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
      </el-header>
      <el-main class="main-nav" >
        <!-- 情感分析 -->
        <!-- title -->
        <el-row justify="center">
          <div style="width: 60%;">
            We provide you with the chart of this stock in the most recent period.
            Here we provide the following strategies as your reference.
          </div>
        </el-row>
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
          <div>word cloud</div>
        </el-row>
        <el-row justify="center">
          <div style="height: 300px; width: auto;">
            <img :src="'data:;base64,'+ data.wordcloud" style="height: 300px; width: auto">
          </div>
        </el-row>
        <!-- describe -->
        <el-row justify="center">
          <div style="width: 60%;">
            <p>技术：爬虫+NLP+Doc2Vec+LSTM</p>
            <p>输出：情感比例图+关键词图</p>
          </div>
        </el-row>
        <el-row justify="center">
          <div>describe</div>
        </el-row>
        <el-divider />
        <!-- 股票走势 -->
        <el-row justify="center">
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
                <div style="font-size: 22px;font-weight: 700;cursor: pointer;" @click="choose(3)">DTM</div>
              </div>
            </div>

            <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;">
              <img :src="'data:image/png;base64,'+myimage" style="height: 600px;width: auto;">
            </div>
            <div style="width: 60%;"><p>{{describe}}</p></div>
          </div>
        </el-row>
        <el-divider />
        <!-- 内容摘要 -->
        <el-row justify="center">
          <div style="width: 60%;"><p>News Share</p>
            <p>We have selected a few relevant news articles for you</p>
          </div>
        </el-row>
        <el-row justify="center">
          <div class="content">
            <component :list=data.news :is="NewsList"></component>
          </div>
        </el-row>
      </el-main>
      <el-footer>power by Du Wenjie</el-footer>
    </el-container>
  </div>
  <router-view/>
</template>


<script setup>
import {useRoute, useRouter} from "vue-router";
import SearchInPut from '@/components/aboutSearch.vue'
import NewsList from '@/components/NewsList.vue'
import {ref} from "vue"

const route = useRoute()
const router = useRouter()

const data = JSON.parse(route.params.data)
//console.log(data)
//let seqnum = 0
let select = ref(20);
let describe = ""
let myimage = ''

//progress
const positive =  Number(String(data.positive/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))
const negative = Number(String(data.negative/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))
const neutral = Number(String(data.neutral/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))


//console.log(data)

function forward(){
  router.push({
    name:"demo"
  })
}

function choose(e){
  if(e==1){
    select.value=20;
    myimage = data.linear_model
    describe = 'linear model'
  }else if(e==2){
    select.value=160;
    myimage = data.svm_model
    describe = 'svm model'
  }else {
    select.value = 300;
    myimage = data.decisiontree_model
    describe = 'decision tree model'
  }
}
</script>

<style>

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
