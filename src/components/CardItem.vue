<template>
  <!-- <el-row>
    <el-col v-for="(blog, index) in blogs" :key="blog" :span="15"> -->
  <el-card class="card" shadow="hover" @click="toDetail(blog.id)">
    <el-image v-if="blog.image" style="width: 100%; height: 100%; border-radius: 4px;" :src="blog.image" fit="cover"
      loading="lazy">
    </el-image>

    <div style="font-size: 30px;font-family: Arial, Helvetica, sans-serif;">{{ blog.title }}</div>
    <!-- <div class="pub-date">
      <p>{{ blog.updateTime }}</p>
    </div> -->
    <div class="card-detail">
      {{ blog.digest }}
    </div>
    <div class="bottom">
      <el-button text :icon="Star">{{ blog.praise }}</el-button>
      <el-button text :icon="ChatSquare">{{ blog.comment_num }}</el-button>
    </div>

  </el-card>
  <!-- </el-col>
  </el-row> -->
</template>
  
<script>
import { ChatSquare, Star, Search } from '@element-plus/icons-vue'
export default {
  name: 'CardItem',
  props: {
    blog: Object
  },
  data() {
    return {
      Star,
      ChatSquare,
      Search
    }
  },
  methods: {
    toDetail(id) {
      console.log(id)
      this.$router.push({
        path: 'blogDetail/' + id,
      })
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  display: flex;
  flex-direction: column;
  // align-items: center;
  // text-align: center;
  padding: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px dashed #1f364d;
  background-color: #0e2439;
  color: #ffffff;
}

.bottom {
  margin-bottom: 0;
}
</style>
  