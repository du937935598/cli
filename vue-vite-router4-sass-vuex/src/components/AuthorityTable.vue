<!--
 * @Author: Branton
 * @Date: 2022-01-21 16:03:01
 * @LastEditTime: 2022-01-24 14:57:43
 * @LastEditors: Branton
 * @Description: 
 * @FilePath: \brantone:\qingjiao\admin\admin\src\components\AuthorityTable.vue
 * 暂无
-->
<template>
    <div class="AuthorityTable">
        <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" :columns="columns" :data-source="data" />
    </div>
</template>

<script setup lang="ts" >
import { defineComponent, ref, reactive } from 'vue'
import { tableDataTypeInterface } from './../interface/compontent-interface'

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '语文分数',
    dataIndex: 'chinese',
    sorter: (a, b) => a.chinese - b.chinese,
  },
  {
    title: '数学分数',
    dataIndex: 'math',
    sorter: (a, b) => a.math - b.math,
  },
  {
    title: '英语分数',
    dataIndex: 'english',
    sorter: (a, b) => a.english - b.english,
  },
];

const data: tableDataTypeInterface[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: i,
    name: `Edward King ${i}`,
    chinese: Math.floor((Math.random() * 100) + 1),
    math: Math.floor((Math.random() * 100) + 1),
    english: Math.floor((Math.random() * 100) + 1)
  });
}

// 复选框选中
const selectedRowKeys = ref<tableDataTypeInterface['id'][]>([1,2])
const onSelectChange = (changableRowKeys: string[]) => {
  selectedRowKeys.value = changableRowKeys
};
</script>

<style lang="scss" scoped>
.AuthorityTable{
    
}
</style>
