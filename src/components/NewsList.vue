<!--duwenjie 2022/7/25-->
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
h1 { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 45px; font-style: italic; font-variant: normal; font-weight: 700; line-height: 45px; } h3 { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 37px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 29.6px; } p { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 30px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 27px; } blockquote { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 36px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 32.4px; } pre { font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif; font-size: 28px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 25.2px; }
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