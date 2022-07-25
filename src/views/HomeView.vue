<template>
  <div style="height: 100%;position: absolute;width: 100%;">
    <img src="../assets/aditya-vyas-mHdATQY9fIU-unsplash.jpg" style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;
	filter: blur(2px);">
    <div style="position: absolute;width: 100%;height: 100%;">
      <div style="height: 7%;display: flex;justify-content: flex-start;">
        <img src="../assets/logo20.png" alt="logo" class="logo">
      </div>
      <div style="height: 10%;text-align: left;margin-left: 15%;margin-top: 5%;transform-style: preserve-3d;perspective: 200px;perspective-origin: 0 100px;">
        <div style="font-size: 70px;font-weight: 800;color: white;">Stock</div>
        <div :style="{'transform':'rotateX( '+textRotate+'deg)'}" style="transition: all .5s;height: 100%;width: 100%;">
          <div style="display: flex;position: absolute;height: 100%;width: 100%;transition: all .3s;" :style="{'opacity':withmeOpacity}">
            <div style="font-size: 70px;font-weight: 800;color: #efc21a;">With</div>
            <div style="font-size: 70px;font-weight: 800;color: white;">Me</div>
          </div>
          <div :style="{'opacity':togetherOpacity}" style="transform: rotateX(180deg);font-size: 70px;font-weight: 800;
				color: #efc21a;position: absolute;height: 100%;width: 100%;transition: all .3s;">Together</div>
        </div>


      </div>
      <div class="search-nav">
        <SearchIuPut @isfocused="rotate" />
      </div>
    </div>

  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import SearchIuPut from "@/components/SearchIuPut.vue";
import {ref} from 'vue';

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    SearchIuPut
  },
  setup(){
    let textRotate=ref(0);
    let withmeOpacity=ref(1);
    let togetherOpacity=ref(0);
    function rotate(val){
      if(val==true){
        textRotate.value=180;
        withmeOpacity.value=0;
        togetherOpacity.value=1;
      }else{
        textRotate.value=0;
        withmeOpacity.value=1;
        togetherOpacity.value=0;
      }
    }
    return{
      textRotate,
      rotate,
      withmeOpacity,
      togetherOpacity
    }
  }

}
</script>

<style>
body{
  margin: 0;
  height: 100%;
}
html{
  height: 100%;
}
.logo{
  width: auto;
  height: 100%;
  margin: 0;
}

.container-nav{
  /*background-color: #E6E8EB;*/
  /*border-color: #E6E8EB;*/
  display: flex;
  margin: 0;
  height: 100%;
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
  position: absolute;
  margin-top: 10%;
  margin-left: 15%;
}
</style>
