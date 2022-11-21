<template>
  <div class="AuthorityTable">
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { tableDataTypeInterface } from "./../interface/compontent-interface";

const columns = [
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "语文分数",
    dataIndex: "chinese",
    sorter: (a: any, b: any) => a.chinese - b.chinese,
  },
  {
    title: "数学分数",
    dataIndex: "math",
    sorter: (a: any, b: any) => a.math - b.math,
  },
  {
    title: "英语分数",
    dataIndex: "english",
    sorter: (a: any, b: any) => a.english - b.english,
  },
];

const data: tableDataTypeInterface[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: i,
    name: `Edward King ${i}`,
    chinese: Math.floor(Math.random() * 100 + 1),
    math: Math.floor(Math.random() * 100 + 1),
    english: Math.floor(Math.random() * 100 + 1),
  });
}

// 复选框选中
const selectedRowKeys = ref<number[]>([1, 2]);
const onSelectChange = (changableRowKeys: number[]) => {
  selectedRowKeys.value = changableRowKeys;
};
</script>

<style lang="scss" scoped>
</style>
