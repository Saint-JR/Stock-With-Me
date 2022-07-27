<script setup>
import {defineProps, ref} from "vue"

const props = defineProps(["list"])

console.log(props.list)

const data = ref(props.list)

function href(link){
  window.open(link);
}

</script>

<template>
  <div class="">
    <div class="listitem" v-for="(item,index) in data" :key="index">
      <h3 class="listheader" @click="href(item.Link)">{{ item.Title }}</h3>
      <p class="listcontent">{{ item.RawMessage }}</p>
    </div>
  </div>
</template>

<style scoped>  /* scoped-局部样式 */
.listitem {
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: -1px; /* 上下边框合并一下 */
}

.listheader {
  font-size: 22px;
  margin-bottom: 20px;

  /* 文本过长自动截断 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.listcontent {
  width: 90%;
  position: relative;
  color: #999;
  font-size: 14px;
  line-height: 26px;
  height: 78px;

  /* 多行文本截断 */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
}
</style>