<template>
  <div class="common-layout">
    <el-container class="container-nav">
      <el-header class="header-nav">
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
      <el-main class="main-nav" @click="update">
        <!-- 情感分析 -->
        <!-- title -->
        <el-row justify="center">
          <div>there is title</div>
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
          <div>there is world crowd</div>
        </el-row>
        <!-- describe -->
        <el-row justify="center">
          <div>describe</div>
        </el-row>
        <el-divider />
        <!-- 股票走势 -->
        <el-row justify="center">
          <div class = "stocktrend">
            三个按钮  + 图片
          </div>
        </el-row>
        <el-divider />
        <!-- 内容摘要 -->
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
import SearchInPut from '@/components/SearchIuPut.vue'
import NewsList from '@/components/NewsList.vue'

const route = useRoute()
const router = useRouter()

const data = JSON.parse(route.params.data)
//console.log(data)
let seqnum = 0

const positive =  Number(String(data.positive/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))
const negative = Number(String(data.negative/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))
const neutral = Number(String(data.neutral/data.total*100).replace(/^(.*\..{2}).*$/,"$1"))

//console.log(data)

function update(){
  if(data.seqnum !== seqnum){
    console.log(data.positive)
  }
}

function forward(){
  router.push({
    name:"demo"
  })
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
  left: 35%;
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
