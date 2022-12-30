<!--
 * @Date: 2022-12-29 10:13:33
 * @LastEditTime: 2022-12-29 10:27:10
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue\src\pages\home.vue
-->
<template>
    <div>
        <WujieVue width="100%" height="100%" name="vite-react1-sub" :url="viteReact1" :sync="true"></WujieVue>
    </div>
</template>

<script>
import hostMap from "../hostMap";

export default {
  data() {
    return {
      viteReact1: hostMap("//localhost:7300/") + this.$route.params.path,
    };
  },
};
</script>