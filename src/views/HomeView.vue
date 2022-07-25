<template>
  <div class="common-layout">
    <el-container class="container-nav">
      <el-header class="header-nav">
        <img src="../assets/logo.svg" alt="logo" class="logo">
      </el-header>
      <el-main class="main-nav">
        <div class="search-nav">
          <SearchIuPut/>
        </div>
      </el-main>
      <el-footer>power by Du Wenjie</el-footer>
    </el-container>
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import SearchIuPut from "@/components/SearchIuPut.vue";

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    SearchIuPut
  }

}
</script>

<style>
body{
  margin: 0;
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
  height: 600px;
}

.search-nav{
  width: 50%;
  position: absolute;
  margin-top: 20%;
  margin-left: 25%;
}
</style>
