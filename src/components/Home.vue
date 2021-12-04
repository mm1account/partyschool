<template>
  <div class="hello">
    <!-- <button @click="getList">点击</button>
    <button @click="getHomeMultidataa">点击123</button> -->
    <!-- <button @click="getList">点击123</button> -->
    <button @click="getList">点击123</button>
    <button @click="loginHello">点击</button>
  </div>
</template>


<script>
// import { getHomeMultidata } from "../api/goods.js";
import { getListAPI } from "../api/homeAPI";
import { login } from "../api/homeAPI";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    async getList() {
      console.log("123");
      // axios.get("/api/hello").then((res) => {
      //   console.log(res);
      // });
      let res = await getListAPI();
      console.log(res);
    },
    async loginHello() {
      let a = { username: "123", password: "asd" };
      let res = await login(a);
      console.log(res);
    },
  },
};
</script>


<style scoped>
</style>
