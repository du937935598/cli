<!--
 * @Author: branton
 * @Date: 2021-11-24 18:01:59
 * @LastEditors: Branton
 * @LastEditTime: 2022-01-25 09:28:32
 * @Description: 修改文件
 * @FilePath: \brantone:\qingjiao\admin\admin\src\views\Home.vue
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
-->
<template>
  <div class="home">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" v-if="!collapsed">Branton管理系统</div>
        <div class="logo" v-else><p>B</p></div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
          :open-keys="openKeys"
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
        <a-layout-header style="background: #fff; padding: 0;">
          <div class="header">
            <div class="tagger" @click="() => (collapsed = !collapsed)">
              <MenuUnfoldOutlined
                v-if="collapsed"
                class="trigger"
              />
              <MenuUnfoldOutlined
                v-else
                class="trigger"
              />
            </div>
            <div class="breadcrumb">
              <a-breadcrumb>
                <a-breadcrumb-item
                  v-for="(item, index) in breadcrumb"
                  :key="index"
                >
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
                      <a-menu-item key="3" @click="logout">
                        退出登录
                      </a-menu-item>
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
import screenfull from 'screenfull'
import { message } from 'ant-design-vue'
import {
  UserOutlined,
  FullscreenOutlined,
  DashboardOutlined,
  ContactsOutlined,
  AuditOutlined,
  MenuUnfoldOutlined,
  DownOutlined
} from '@ant-design/icons-vue'
import { defineComponent, getCurrentInstance, ref, toRef, toRefs } from 'vue'
import { menuAuthorityInterface } from './../interface/home-interface'

const instance = getCurrentInstance()
const globInstance = instance.appContext.config.globalProperties.$tool

import { useStore } from 'vuex'
const store = useStore()

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

// mock菜单权限
const menuArr = ref<menuAuthorityInterface[]>([
  {
    name: '首页',
    id: '1',
    path: '/index',
  },
  {
    name: '权限管理',
    id: '2',
    path: '',
    children: [
      {
        name: '权限列表',
        id: '2-1',
        path: '/authority/list',
      },
      {
        name: '权限编辑',
        id: '2-2',
        path: '/authority/edit',
      },
      {
        name: '权限修改',
        id: '2-3',
        path: '/authority/update',
      },
    ],
  },
  {
    name: '会员管理',
    path: '',
    id: '3',
    children: [
      {
        name: '会员列表',
        id: '3-1',
        path: '/member/list',
      },
      {
        name: '会员编辑',
        id: '3-2',
        path: '/member/edit',
      },
      {
        name: '会员修改',
        id: '3-3',
        path: '/member/update',
      },
    ],
  },
])
// 菜单选中
const chooseMenu = ref<{
  id: string
  name: string
  parentName: string
  path: string
}>(globInstance.getRoute(menuArr.value, router.options.history.location))
const breadcrumb = ref<string[]>(
  [chooseMenu.value.parentName, chooseMenu.value.name].filter(
    (val: string) => val !== '',
  ),
)
const selectedKeys = ref<string[]>([chooseMenu.value.id])

// 选中菜单展开
const openKeys = ref<string[]>([chooseMenu.value.id.split('-')[0]])
const onOpenChange = (openKey: string[]) => {
  const latestOpenKey = openKey.find(
    (key) => openKeys.value.indexOf(key) === -1,
  )
  openKeys.value = latestOpenKey ? [latestOpenKey] : []
}

// 菜单展开/隐藏
const collapsed = ref<boolean>(false)

// 页面跳转
const jumpPage = (item: any) => {
  let jumpMenu = globInstance.getRoute(menuArr.value, item)
  breadcrumb.value = [jumpMenu.parentName, jumpMenu.name].filter(
    (val: string) => val !== '',
  )
  router.push(item)
}

// 全屏显示
const fullscreenOutlined = () => {
  if (!screenfull.isEnabled) {
    message.info('This is a normal message')
    return false
  }
  screenfull.toggle()
}

// 退出登录
const logout = () => {
  store.commit('logins', false)
  router.push('/login')
}
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
    p{
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
