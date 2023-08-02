<template>
  <div class="main-container">
    <ul class="infinite-list" style="overflow: auto">
      <CardItem :blogs="blogs"></CardItem>
    </ul>
    <el-pagination class="page-bar" :page-size="pageSize" layout="prev, pager, next" :total="total"
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
      pageSize: 2,
      total: Number,
      blogs:Array
    }
  },
  mounted(){
    this.handleCurrentChange(1)
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
      API.post("/le-blog/blogs/get",{
        pageNum:val,
        pageSize:2
      }).then((res) => {
        if (res.status == 200) {
          console.log(res)
          this.blogs = res.data.data.data;
          this.total = res.data.data.pageTotal;
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
