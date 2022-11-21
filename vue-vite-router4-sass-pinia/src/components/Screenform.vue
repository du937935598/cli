<template>
  <div class="ScreenForm">
    <a-form
      ref="formRef"
      :model="formState"
      name="basic"
      autocomplete="off"
      v-bind="formItemLayout"
      @finish="onFinish"
    >
      <a-row>
        <a-col :span="10">
          <a-form-item label="ID" name="id" v-bind="inputRules">
            <a-input v-model:value="formState.id" placeholder="ID" >
              <template #addonBefore>
                <EditOutlined />
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="10" :offset="2">
          <a-form-item label="交易类型" name="transactionType" v-bind="chooseRules">
            <a-select v-model:value="formState.transactionType" placeholder="选择">
              <a-select-option value="china">交易1</a-select-option>
              <a-select-option value="usa">交易2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item label="UID" name="uid" v-bind="inputRules">
            <a-input v-model:value="formState.uid" placeholder="UID" >
              <template #addonBefore>
                <EditOutlined />
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="10" :offset="2">
          <a-form-item label="广告状态" name="advertisingStatus" v-bind="chooseRules">
            <a-select v-model:value="formState.advertisingStatus" placeholder="选择">
              <a-select-option value="china">广告1</a-select-option>
              <a-select-option value="usa">广告2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item label="订单编号" name="orderId" v-bind="inputRules">
            <a-input v-model:value="formState.orderId" placeholder="订单编号" >
              <template #addonBefore>
                <EditOutlined />
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="10" :offset="2">
          <a-form-item label="添加时间" name="addTime" v-bind="timeRules">
            <a-range-picker v-model:value="formState.addTime" value-format="YYYY-MM-DD" :locale="locale">
              <template #suffixIcon>
                <CalendarOutlined />
              </template>
            </a-range-picker>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item label="数量" name="number" v-bind="inputGroupRules">
            <a-input-group compact>
              <a-input
                v-model:value="formState.number[0]"
                style="width: 40%; text-align: left"
                placeholder="数量"
              />
              <a-form-item-rest>
                <a-input
                  style="width: 20%; border-left: 0; pointer-events: none; background-color: #fff"
                  placeholder="~"
                  disabled
                />
                <a-input
                  v-model:value="formState.number[1]"
                  style="width: 40%; text-align: left; border-left: 0"
                  placeholder="数量"
                />
              </a-form-item-rest>
            </a-input-group>
          </a-form-item>
        </a-col>
        <a-col :span="10" :offset="2">
          <a-form-item label="单价" name="price" v-bind="inputGroupRules">
            <a-input-group compact>
              <a-input
                v-model:value="formState.price[0]"
                style="width: 40%; text-align: left"
                placeholder="单价"
              />
              <a-form-item-rest>
                <a-input
                  style="width: 20%; border-left: 0; pointer-events: none; background-color: #fff"
                  placeholder="~"
                  disabled
                />
                <a-input
                  v-model:value="formState.price[1]"
                  style="width: 40%; text-align: left; border-left: 0"
                  placeholder="单价"
                />
              </a-form-item-rest>
            </a-input-group>
          </a-form-item>
        </a-col>
        <a-col :span="20" :offset="3">
          <a-button type="primary" html-type="submit">提交</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { searchListInterface } from './../interface/compontent-interface'

// 表单校验规则
const inputRules = {
  rules: [{ required: true, message: '请输入' }],
};
const inputGroupRules = {
  rules: [{ type: 'array' as const, required: true, message: '请输入' }],
};
const chooseRules = {
  rules: [{ required: true, message: '请选择' }],
};
const timeRules = {
  rules: [{ type: 'array' as const, required: true, message: '请选择时间' }],
};
// 表单内容占比
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}
const formRef = ref<any>();
const formState = reactive<searchListInterface>({
  id: '',
  transactionType: undefined,
  uid: '',
  advertisingStatus: undefined,
  orderId: '',
  addTime: [],
  number: [],
  price: []
})
// 表单提交
const onFinish = (values: any) => {
  console.log('Received values of form:', values);
  console.log('dynamicValidateForm.users:', dynamicValidateForm.users);
};
// 重置表单
const resetForm = () => {
  formRef.value.resetFields();
};
// const props = defineProps({
//   name: String, //举个例子
// })
// const emit = defineEmits(['getSomething'])
// const handelClick = (something: number) => {
//   emit('getSomething', something)
// }
</script>
<style lang="scss">
.ScreenForm{
  .ant-form-item{
    margin-bottom: 12px;
  }
  // .ant-calendar-range-picker-input{
  //   text-align: left;
  // }
}
</style>
