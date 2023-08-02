<template>
  <div class="blog-view" style="text-align: center;justify-content: center;">
    <h1 style="font-size: 40px;">这是一个标题</h1>
    <span style="font-size: large;">2023 - 1 - 3</span>
    <div style="margin-left: 15%; margin-right: 15%;" id="blog-content">
    </div>
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
    
    API.post("/le-blog/blogs/getDetail",{
        blogId:this.currentBlogId
      }).then((res) => {
        if (res.status == 200) {
          detail = res.data.data.content;
        } else {
          alert('返回错误')
        }
      })
    let converter = new showdown.Converter();
    let html = converter.makeHtml(detail);
    document.getElementById('blog-content').innerHTML = html;
    console.log(html)
  },
  data() {
    return {
    }
  },
}
</script>
  