<template>
  <div class="main-container">
    <ul class="infinite-list" style="overflow: auto">
      <!-- <li v-for="i in count" :key="i" class="list-item"> -->
      <CardItem :blogs="blogs"></CardItem>
      <!-- </li> -->
    </ul>
    <el-pagination class="page-bar" :page-size="10" layout="prev, pager, next" :total="total"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import API from "@/axios/axiosInstance";
import CardItem from "./CardItem";
export default {
  name: 'MainContent',
  components: {
    CardItem
  },
  data() {
    return {
      count: 10,
      value: new Date(),
      total: 1500,
      blogs:Array
    }
  },
  mounted(){
    this.handleCurrentChange(1)
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
      API({
        url: "/le-blog/blogs/get?pageNum=" + val,
        method: 'get'
      }).then((res) => {
        if (res.status == 200) {
          console.log(res)
          this.blogs = res.data.data.records;
        } else {
          alert('返回错误')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list-item {
  list-style: none;
}

.page-bar {
  text-align: center;
  justify-content: center;
}
</style>
