<!--
 * @Date: 2022-12-29 10:13:33
 * @LastEditTime: 2022-12-29 10:27:10
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue\src\pages\home.vue
-->
<template>
    <div>
        <WujieVue width="100%" height="100%" name="vite-vue-sub" :url="viteVue" :sync="true"></WujieVue>
    </div>
</template>

<script>
import hostMap from "../hostMap";

export default {
  data() {
    return {
      viteVue: hostMap("//localhost:7000/") + this.$route.params.path,
    };
  },
};
</script>