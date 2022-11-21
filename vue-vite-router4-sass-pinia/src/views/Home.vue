<template>
  <div class="home">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" v-if="!collapsed">{{ title }}</div>
        <div class="logo" v-else>
          <p>{{ title.slice(0, 1) }}</p>
        </div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
          :openKeys="openKeys"
          @openChange="onOpenChange"
        >
          <div class="menuList" v-for="(item, index) in menuArr" :key="index">
            <a-menu-item
              :key="item.id"
              v-if="!item.children"
              @click="jumpPage(item.path)"
            >
              <DashboardOutlined v-if="item.id === '1'" />
              <AuditOutlined v-if="item.id === '2'" />
              <ContactsOutlined v-if="item.id === '3'" />
              <span>{{ item.name }}</span>
            </a-menu-item>
            <a-sub-menu v-else :key="item.id">
              <template #title>
                <span>
                  <DashboardOutlined v-if="item.id === '1'" />
                  <AuditOutlined v-if="item.id === '2'" />
                  <ContactsOutlined v-if="item.id === '3'" />
                  <span>{{ item.name }}</span>
                </span>
              </template>
              <div v-if="item.children">
                <a-menu-item
                  v-for="(sub, i) in item.children"
                  :key="sub.id"
                  @click="jumpPage(sub.path)"
                >
                  {{ sub.name }}
                </a-menu-item>
              </div>
            </a-sub-menu>
          </div>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <div class="header">
            <div class="tagger" @click="() => (collapsed = !collapsed)">
              <MenuUnfoldOutlined v-if="collapsed" class="trigger" />
              <MenuUnfoldOutlined v-else class="trigger" />
            </div>
            <div class="breadcrumb">
              <a-breadcrumb>
                <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
                  {{ item }}
                </a-breadcrumb-item>
              </a-breadcrumb>
            </div>
            <ul class="right">
              <li>
                <div class="full" @click="fullscreenOutlined">
                  <FullscreenOutlined />
                </div>
              </li>
              <li>
                <a-dropdown>
                  <a class="ant-dropdown-link" @click.prevent>
                    <a-avatar class="headImg" :size="24">
                      <template #icon><UserOutlined /></template>
                    </a-avatar>
                    管理员
                    <DownOutlined />
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="1">个人中心</a-menu-item>
                      <a-menu-item key="2">修改密码</a-menu-item>
                      <a-menu-item key="3" @click="logout"> 退出登录 </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </li>
            </ul>
          </div>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '10px',
            padding: '10px',
            background: '#fff',
            overflow: 'auto',
          }"
        >
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { ref, inject } from "vue";
import screenfull from "screenfull";
import { message } from "ant-design-vue";
import { menuAuthorityInterface } from "./../interface/home-interface";
import useStore from "./../pinia/index";
import { menuAuth } from "./../assets/mock/index";
import { useRouter } from "vue-router";
const title = import.meta.env.VITE_TITLE;
console.log(title);
const helper: any = inject("$tool");
const store = useStore();
const router = useRouter();
// mock菜单权限
const menuArr = ref<menuAuthorityInterface[]>(menuAuth);
// 菜单选中
const chooseMenu = ref<{
  id: string;
  name: string;
  parentName: string;
  path: string;
}>(helper.getRoute(menuArr.value, router.options.history.location));
const breadcrumb = ref<string[]>(
  [chooseMenu.value.parentName, chooseMenu.value.name].filter((val: string) => val !== "")
);
const selectedKeys = ref<string[]>([chooseMenu.value.id]);

// 选中菜单展开
const openKeys = ref<string[]>([chooseMenu.value.id.split("-")[0]]);
const onOpenChange = (openKey: string[]) => {
  console.log(openKey);
  const latestOpenKey = openKey.find((key) => openKeys.value.indexOf(key) === -1);
  openKeys.value = latestOpenKey ? [latestOpenKey] : [];
};

// 菜单展开/隐藏
const collapsed = ref<boolean>(false);

// 页面跳转
const jumpPage = (item: any) => {
  let jumpMenu = helper.getRoute(menuArr.value, item);
  breadcrumb.value = [jumpMenu.parentName, jumpMenu.name].filter(
    (val: string) => val !== ""
  );
  router.push(item);
};

// 全屏显示
const fullscreenOutlined = () => {
  if (!screenfull.isEnabled) {
    message.info("This is a normal message");
    return false;
  }
  screenfull.toggle();
};

// 退出登录
const logout = () => {
  store.user.logins(false);
  router.push("/login");
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .logo {
    height: 50px;
    line-height: 50px;
    margin: 16px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    p {
      background: #fff;
      border-radius: 8px;
      color: #001529;
    }
  }
  .header {
    overflow: hidden;
    padding: 0 12px;
    .tagger {
      float: left;
      font-size: 14px;
      padding: 0 12px;
      cursor: pointer;
    }
    .breadcrumb {
      margin-left: 10px;
      float: left;
      margin-top: 21px;
    }
    .right {
      float: right;
      li {
        margin-right: 20px;
        float: left;
        .full {
          font-size: 20px;
          cursor: pointer;
        }
        .ant-dropdown-link {
          display: inline-block;
          .headImg {
            float: left;
            margin-top: 20px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .ant-layout.ant-layout-has-sider {
    width: 100%;
    height: 100%;
  }
}
</style>
