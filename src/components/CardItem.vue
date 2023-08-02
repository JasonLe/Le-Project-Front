<template>
  <el-row style="text-align: center;justify-content: center;">
    <el-col v-for="(blog, index) in blogs" :key="blog" :span="15">
      <el-card style="margin: 30px;text-align: center;" :body-style="{ padding: '0px' }" shadow="hover"
        @click="toDetail(blog.id)">
        <div style="padding: 14px">
          <span style="font-size: 30px;font-family: Arial, Helvetica, sans-serif;">{{ blog.title }}</span>
          <div class="pub-date">
            <p>{{ blog.updateTime }}</p>
          </div>
          <div class="bottom">
            <div class="card-detail">
              {{ blog.digest }}
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
  props: {
    blogs: Array
  },
  data() {
    return {

    }
  },
  methods: {
    toDetail(id) {
      console.log(id)
      this.$router.push({
        path: 'blogDetail/'+id,
      })
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
  