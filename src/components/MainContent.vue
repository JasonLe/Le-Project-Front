<template>
  <div class="main-container">
    <el-row>
      <el-col :span="6">
        <ul style="overflow: auto" v-for="(blog, index) in blogs1" :key="blog">
          <CardItem :blog="blog"></CardItem>
        </ul>
      </el-col>

      <el-col :span="12">
        <ul style="overflow: auto;border-left: 2px dashed #1f364d;border-right: 2px dashed #1f364d;" v-for="(blog, index) in blogs2" :key="blog">
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
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
      API.post("/le-blog/blogs/get", {
        pageNum: val,
        pageSize: 2
      }).then((res) => {
        if (res.status == 200) {
          console.log(res)
          this.blogs = res.data.data.data;
          this.total = res.data.data.pageTotal;
        } else {
          alert('返回错误1')
        }
      }).catch(error => {
        // alert('返回错误2')
        this.blogs1 = [
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            praise_num:2,
            comment_num:3
          },
          {
            id: 1,
            title: "一问额驱蚊器"
          },
          {
            id: 1,
            title: "一问额驱蚊器"
          }
        ];

        this.blogs2 = [
          {
            id: 1,
            title: "一问额驱蚊器",
            digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器",
            img_url:"https://i.imgur.com/87YsVbO.png"
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器",
            img_url:"https://i.imgur.com/87YsVbO.png"
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器",
            img_url:"https://i.imgur.com/87YsVbO.png"
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器",
            img_url:"https://i.imgur.com/87YsVbO.png"
          },
          {
            id: 1,
            title: "一问额驱蚊器",
            digest: "一问额驱蚊器一问额驱蚊器一问额驱蚊器一问额驱蚊器",
            img_url:"https://i.imgur.com/87YsVbO.png"
          }
        ];

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

ul{
  margin: 0;
  padding: 0;
}

.main-container{
  margin-left: 5%;
  margin-right: 5%;
}

</style> 