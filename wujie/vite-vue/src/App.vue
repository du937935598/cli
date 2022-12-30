<!--
 * @Date: 2022-12-29 09:48:27
 * @LastEditTime: 2022-12-29 10:59:53
 * @FilePath: \zeissc:\branton\study\wujie\vite-vue\src\App.vue
-->
<template>
  <div class="app">
    <div class="left">
      <router-link to="/home">介绍</router-link>
      <router-link to="/vite-vue">vite-vue</router-link>
      <router-link to="/vite-vue-sub/detail">vite-vue detail</router-link>

      <router-link to="/vite-vue1">vite-vue1</router-link>
      <router-link to="/vite-vue1-sub/detail">vite-vue1 detail</router-link>

      <router-link to="/vite-react">vite-react</router-link>
      <router-link to="/vite-react-sub/login">vite-react login</router-link>

      <router-link to="/vite-react1">vite-react1</router-link>
      <router-link to="/vite-react1-sub/login">vite-react1 login</router-link>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<style lang="css">
.app{
  width: 100%;
  height: 100%;
}
.left{
  width: 200px;
  float: left;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 10px 0;
  box-shadow: 3px 0 9px 2px #e6e6e6;
  font-size: 20px;
}
.left a{
  display: block;
  padding: 10px 20px;
  color: #000;
  font-weight: bold;
}
.left a:hover, .left a.router-link-active{
  background: #eee;
  color: #f16b5f;
}
.right{
  margin-left: 200px;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
</style>
