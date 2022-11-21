<!--
 * @Author: branton
 * @Date: 2021-11-24 18:01:59
 * @LastEditors: branton
 * @LastEditTime: 2021-11-25 10:18:06
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\views\Produce.vue
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
-->
<template>
  <div>
    <div class="aboutItem">produceItem</div>
    <van-button type="primary">produceItem</van-button>
    <div class="info" v-if="info.type">
        <p>{{ info.name }}</p>
      <p>{{ info.age }}</p>
      <p>{{ info.sex }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { infoItem } from "../interface/Produce"
const name = ref<string>("branton")
const info: infoItem = reactive({
  name: "branton",
  age: 22,
  sex: "男",
  type: true
})
</script>
