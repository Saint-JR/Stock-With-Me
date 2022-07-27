<!--duwenjie 2022/7/21-->
<template>
  <div id="app">
    <router-view v-if="RouterState"/>
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return{
      RouterState:true
    }
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
    reload(){
      this.RouterState = false
      this.$nextTick(()=>{
        this.RouterState = true
      })
    }
  },
  components: {
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,html{
  height: 100%;
  width: 100%;
  margin:0 0 0 0;
  overflow:hidden hidden;
}

</style>
