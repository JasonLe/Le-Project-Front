<template>
  <div class="blog-view">
    <!-- <h1 style="font-size: 40px;">这是一个标题</h1>
    <span style="font-size: large;">2023 - 1 - 3</span> -->
    <div id="blog-content" v-html="markdownText" />
  </div>
</template>
  
<script>
import API from "@/axios/axiosInstance";
import showdown from "showdown";
export default {
  name: 'BlogView',
  mounted() {
    this.currentBlogId = this.$route.params.blogId
    let detail = ""

    API.post("/le-blog/blogs/getDetail", {
      blogId: this.currentBlogId
    }).then((res) => {
      if (res.status == 200) {
        detail = res.data.data.content;
        let converter = new showdown.Converter();
        let html = converter.makeHtml(detail);
        console.log(detail)
        console.log(html)
        // document.getElementById('blog-content').innerHTML = html;
        this.markdownText = html
      } else {
        alert('返回错误')
      }
    })
  },
  data() {
    return {
      markdownText:String
    }
  },
}
</script>

<style>
pre{
  background-color: black;
  color: rgb(36, 154, 233);
}
</style>