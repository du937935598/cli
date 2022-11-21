import { defineStore } from "pinia";

const listUserStore = defineStore("list", {
  state: () => {
    return {
      name: "zs",
      age: 100,
    };
  },
  getters: {},
  actions: {},
});

export default listUserStore;
