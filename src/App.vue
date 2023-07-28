<template>
  <el-container>
      <el-header><MyHeader></MyHeader></el-header>
      <el-container>
        <!-- <el-aside width="200px"><MyAside></MyAside></el-aside> -->
        <el-main><router-view></router-view></el-main>
      </el-container>
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

</style>
