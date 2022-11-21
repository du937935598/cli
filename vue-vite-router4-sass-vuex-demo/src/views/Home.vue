<!--
 * @Author: branton
 * @Date: 2021-11-24 18:01:59
 * @LastEditors: branton
 * @LastEditTime: 2021-11-26 16:00:58
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\views\Home.vue
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
-->
<template>
  <div>
    <div class="homeItem">homeItem</div>
    <van-button type="primary">homeItem</van-button>
    <div>aaa</div>
    <p>shallowRef</p>
    <span>{{ name }}</span>
    <p>num：{{num}}</p>
    <van-button type="primary" v-has="'user:add'">has主要按钮</van-button>
    <input type="text" name="" id="" v-focus>
    <p v-format-time="'YYYY-MM-DD hh:mm:ss'">1637894028012</p>
    <HelloWorld @getSomething="getSomething"/>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from "vue"
import HelloWorld from "@components/HelloWorld.vue"
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { useStore } from 'vuex'
const store = useStore()
// 全局工具类
const tools: any = getCurrentInstance()

const { props } = getCurrentInstance() as ComponentInternalInstance

console.log(props)

const tool = tools.appContext.config.globalProperties.$tool
const num = ref<number>(tool.cal(12, 6))

const name = ref<string>("branton")

const getSomething = (val: number) => {
  console.log(val)
}

</script>
