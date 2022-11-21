<template>
  <div class="login">
    <Particles
      id="tsparticles"
      class="login__particles"
      :options="particles"
      :particlesInit="particlesInit"
    />
    <div class="content">
      <div class="name">{{ title }}</div>
      <div class="popup">
        <p class="title">登录</p>
        <a-form :model="formState" @finish="handleFinish">
          <a-form-item>
            <div class="border">
              <a-input
                v-model:value="formState.user"
                :bordered="false"
                placeholder="账号名"
              >
                <template #prefix
                  ><UserOutlined style="font-size: 16px; color: rgba(0, 0, 0, 0.25)"
                /></template>
              </a-input>
            </div>
          </a-form-item>
          <a-form-item>
            <div class="border">
              <a-input
                v-model:value="formState.password"
                :bordered="false"
                type="password"
                placeholder="密码"
              >
                <template #prefix
                  ><LockOutlined style="font-size: 16px; color: rgba(0, 0, 0, 0.25)"
                /></template>
              </a-input>
            </div>
          </a-form-item>
          <div class="info">
            <p class="left">
              <a-checkbox v-model:checked="checked">下次自动登录</a-checkbox>
            </p>
            <p class="right">忘记密码？</p>
          </div>
          <a-form-item>
            <div class="loginBtn">
              <a-button
                type="primary"
                class="login-form-button"
                html-type="submit"
                :disabled="formState.user === '' || formState.password === ''"
                >登录</a-button
              >
            </div>
          </a-form-item>
        </a-form>
        <p class="copy-right">© 2013-2022 京ICP备11008151号-8 京公网安备11010802014853</p>
      </div>
    </div>
    <!-- <a-button type="primary" @click="login">直接登陆</a-button> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import type { UnwrapRef } from "vue";
import { particles } from "../assets/particles-config";
import { loginFormInterface } from "./../interface/login-interface";
import useStore from "./../pinia";
import { loadFull } from "tsparticles";
const title = import.meta.env.VITE_TITLE;
const store = useStore();
const router = useRouter();

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};

const checked = ref<boolean>(true);
const formState: UnwrapRef<loginFormInterface> = reactive({
  user: "admin",
  password: "123456",
});
// 登录
const handleFinish = (values: any) => {
  console.log(values, "values");
  console.log("login");
  store.user.login = true;
  console.log("1");
  router.push("/index");
  console.log("2");
};
</script>
<style lang="scss" scoped>
.login {
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .login__particles {
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("@/assets/image/loginbg.png");
  }
  .content {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    .name {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 40px;
      letter-spacing: 15px;
      background: transparent;
    }
    .popup {
      width: 600px;
      background: rgba(255, 255, 255, 0.8);
      padding: 200px 150px 0 150px;
      position: relative;
      .title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 30px;
      }
      .ant-input-affix-wrapper {
        border: none;
        background: transparent;
      }
      .ant-input-affix-wrapper-focused {
        border: none;
        outline: none;
        box-shadow: none;
      }
      .border {
        padding: 5px;
        border: 1px solid #001529;
        border-radius: 30px;
      }
      .info {
        overflow: hidden;
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
      .login-form-button {
        width: 100%;
      }
      .loginBtn {
        margin-top: 25px;
        button {
          background: #001529;
          border: 1px solid #001529;
          border-radius: 30px;
          padding: 10px 0;
          height: auto;
        }
        .ant-btn-primary[disabled] {
          background: #f5f5f5;
          border-color: #d9d9d9;
        }
      }
      .copy-right {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        text-align: center;
      }
    }
  }
}
</style>
