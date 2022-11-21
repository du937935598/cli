<!--
* @Author: branton
* @Date: 2021-11-23 11:01:57
 * @LastEditors: branton
 * @LastEditTime: 2021-11-26 11:28:56
* @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\components\HelloWorld.vue
-->
<template>
  <div class="title">
    <h2>个人信息{{ person }}</h2>
    <p>姓名：{{ name }}</p>
    <p>姓名：{{ age }}</p>
    <p>工资：{{ current }}</p>
    <button @click="age++">++</button>
    <button @click="current++">++工资</button>
    <button @click="name += '!'">打招呼</button>
    <van-button type="primary" @click="handelClick(123)">传值1</van-button>
    <button></button>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRef} from "vue"

const props = defineProps({
    name:String//举个例子
})
const emit = defineEmits(['getSomething'])
const handelClick = (something:number)=>{
    emit('getSomething', something)
}

const person = reactive({
  name: "张三",
  age: 18,
  job: {
    salary: {
      current: 20
    }
  }
})
const name = toRef(person, "name")
const age = toRef(person, "age")
const current = toRef(person.job.salary, "current")
</script>
<style lang="scss">
a {
  color: #42b983;
}
.title {
  h1 {
    font-size: 12px;
  }
}
</style>
