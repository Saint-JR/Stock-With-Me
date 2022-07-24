<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
const data = JSON.parse(route.params.data)
let seqnum = 0

console.log(data)

function update(){
  if(data.seqnum !== seqnum){
    console.log(data.positive)
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container class="container-nav">
      <el-header class="header-nav">

      </el-header>
      <el-main class="main-nav">

      </el-main>
      <el-footer>power by Du Wenjie</el-footer>
    </el-container>
  </div>
</template>

<style>
body{
  margin: 0;
}
.container-nav{
  /*background-color: #E6E8EB;*/
  /*border-color: #E6E8EB;*/
  display: flex;
  margin: 0;
}

.header-nav{
  border-width: 0 0 0.1em 0;
  border-style: solid;
  border-color: #E6E8EB;
}

.main-nav{
  height: 600px;
}

.search-nav{
  width: 50%;
  margin-top: 20%;
  margin-left: 25%;
}
</style>
