<!--
 * @Date: 2022-12-29 10:13:33
 * @LastEditTime: 2022-12-29 10:27:10
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue\src\pages\home.vue
-->
<template>
    <div>
        <WujieVue width="100%" height="100%" name="vite-react" :url="viteReact" :sync="true"></WujieVue>
    </div>
</template>

<script>
import hostMap from "../hostMap";

export default {
  data() {
    return {
      viteReact: hostMap("//localhost:7200/"),
    };
  },
};
</script>