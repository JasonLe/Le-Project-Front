<template>
    <div class="aside-container">
        
    </div>
</template>
  
<script>
export default {
    name: 'MyAside',
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aside-container {
  float: left;
  position: absolute;
  top: 66px;
  left: 0;
  width: 200px; // 定义侧边栏的宽度
  height: 100vh; // 定义侧边栏和主体的高度
  background-color: #ffc5c5; // 定义侧边栏的背景色
}
</style>
  