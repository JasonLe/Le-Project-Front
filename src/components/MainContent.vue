<template>
  <div class="main-container">
    <el-row>
      <el-col :span="6">
        <ul style="overflow: auto" v-for="(blog, index) in blogs1" :key="blog">
          <CardItem :blog="blog"></CardItem>
        </ul>
      </el-col>

      <el-col :span="12">
        <ul style="overflow: auto;border-left: 2px dashed #1f364d;border-right: 2px dashed #1f364d;"
          v-for="(blog, index) in blogs2" :key="blog">
          <CardItem :blog="blog"></CardItem>
        </ul>
      </el-col>

      <el-col :span="6">
        <div>最新</div>
        <ul style="overflow: auto" v-for="(blog, index) in blogs3" :key="blog">
          <CardItem :blog="blog"></CardItem>
        </ul>
      </el-col>
    </el-row>


    <!-- <ul class="infinite-list" style="overflow: auto">
      <CardItem :blogs="blogs"></CardItem>
    </ul> -->
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
      blogs1: Array,
      blogs2: Array,
      blogs3: Array
    }
  },
  mounted() {
    this.handleCurrentChange(1)
  },
  methods: {
    async handleCurrentChange(val) {

      this.blogs3 = [
        {
          id: 1,
          title: "一问额驱蚊器",
          digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器"
        },
        {
          id: 1,
          title: "一问额驱蚊器",
          digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器"
        },
        {
          id: 1,
          title: "一问额驱蚊器",
          digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器"
        }
      ];

      console.log(`current page: ${val}`)

      for (var i = 0; i < 2; i++) {
        await API.post("/le-blog/blogs/getByType", {
          type: i
        }).then((res) => {
          if (res.status == 200) {
            console.log(res)
            if (i === 0) {
              this.blogs1 = res.data.data;
            } else if (i === 1) {
              this.blogs2 = res.data.data;
            } else {
              this.blogs3 = res.data.data;
            }
          } else {
            alert('返回错误1')
          }
        }).catch(error => {
          alert('返回错误2')
        })
      }
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

ul {
  margin: 0;
  padding: 0;
}

.main-container {
  margin-left: 5%;
  margin-right: 5%;
}
</style> 