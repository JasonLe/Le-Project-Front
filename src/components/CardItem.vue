<template>
    <el-row style="text-align: center;justify-content: center;">
    <el-col
      v-for="(o, index) in 1"
      :key="o"
      :span="15"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card style="margin: 30px;text-align: center;" :body-style="{ padding: '0px' }" shadow="hover">
        <div style="padding: 14px">
          <span style="font-size: 30px;font-family: Arial, Helvetica, sans-serif;"><a href="www.baidu.com">一个标题</a></span>
          <div class="pub-date">
              <p>2023/7/28</p>
          </div>
          <div class="bottom">
            <div class="card-detail">
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
                这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情这里是一些详情
            </div>
            <!-- <time class="time">{{ currentDate }}</time>
            <el-button text class="button">打开</el-button> -->
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
  
<script>
export default {
    name: 'CardItem',
    data() {
        return {

        }
    },
    methods() {

    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
  