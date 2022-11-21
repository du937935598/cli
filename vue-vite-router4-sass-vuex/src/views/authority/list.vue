<!--
 * @Author: branton
 * @Date: 2021-11-24 18:01:59
 * @LastEditors: Branton
 * @LastEditTime: 2022-01-24 14:30:25
 * @Description: 修改文件
 * @FilePath: \brantone:\qingjiao\admin\admin\src\views\authority\list.vue
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
-->
<template>
  <div class="authority-list">
    <screen-form />
    <authority-table />
  </div>
</template>

<script setup lang="ts">
import ScreenForm from '@/components/ScreenForm.vue'
import AuthorityTable from '@/components/AuthorityTable.vue'
</script>
