// 菜单树
export const menuAuth = [
  {
    name: "首页",
    id: "1",
    path: "/index",
  },
  {
    name: "权限管理",
    id: "2",
    path: "",
    children: [
      {
        name: "权限列表",
        id: "2-1",
        path: "/authority/list",
      },
      {
        name: "权限编辑",
        id: "2-2",
        path: "/authority/edit",
      },
      {
        name: "权限修改",
        id: "2-3",
        path: "/authority/update",
      },
    ],
  },
  {
    name: "会员管理",
    path: "",
    id: "3",
    children: [
      {
        name: "会员列表",
        id: "3-1",
        path: "/member/list",
      },
      {
        name: "会员编辑",
        id: "3-2",
        path: "/member/edit",
      },
      {
        name: "会员修改",
        id: "3-3",
        path: "/member/update",
      },
    ],
  },
];

// 权限内的菜单
export const menuList = [
  {
    path: "/member/list",
    name: "member-list",
    title: "会员列表",
    component: "/member/list.vue",
  },
  {
    path: "/member/edit",
    name: "member-edit",
    title: "会员列表",
    component: "/member/edit.vue",
  },
  {
    path: "/member/update",
    name: "member-update",
    title: "会员列表",
    component: "/member/update.vue",
  },
  {
    path: "/authority/list",
    name: "authority-list",
    title: "权限列表",
    component: "/authority/list.vue",
  },
  {
    path: "/authority/edit",
    name: "authority-edit",
    title: "权限编辑",
    component: "/authority/edit.vue",
  },
  {
    path: "/authority/update",
    name: "authority-update",
    title: "权限修改",
    component: "/authority/update.vue",
  },
];
