<template>
  <el-container class="app">
    <el-header class="header">
      <MyHeader></MyHeader>
    </el-header>
    <!-- <el-aside width="200px"><MyAside></MyAside></el-aside> -->
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyAside from "./components/MyAside";

export default {
  name: 'App',
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang="less">
.app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0e2439;
  color: white;
  font-family: "Source Sans Pro","Helvetica Neue",Helvetica,sans-serif;
}
.header{
  height: 56px;
}
</style>
