<template>
  <div id="vditor" style="margin-top: 1%;" name="description"></div>
  <el-button type="primary" @click="submitForm">保存</el-button>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import API from "@/axios/axiosInstance";

export default {
  name: 'WriteBlogView',
  components: {
  },
  data() {
    return {
      contentEditor: {}
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 500,
      placeholder: '请编写文章...',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: true,
        id: "temp_blog_storage",
        after(html) {
          console.log("本地缓存...")
        }
      },
      mode: 'ir',
      toolbar: [
        'emoji',
        'headings',
        'bold',
        'italic',
        'strike',
        'link',
        '|',
        'list',
        'ordered-list',
        'check',
        'outdent',
        'indent',
        '|',
        'quote',
        'line',
        'code',
        'inline-code',
        'insert-before',
        'insert-after',
        '|',
        // 'record',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'edit-mode',
        // 'content-theme',
        'code-theme',
        'export',
        {
          name: 'more',
          toolbar: [
            'fullscreen'
          ],
        }],
      blur(value) {
        console.log("保存文档")
      }
    })
  },
  methods: {
    submitForm(formName) {
// 可以参考https://blog.csdn.net/lmy_loveF/article/details/125317648
// https://ld246.com/article/1549638745630#static-methods
      var article = this.contentEditor.getValue();

      if (
        article.length === 1 ||
        article == null ||
        article === ''
      ) {
        alert('话题内容不可为空')
        return false
      }
      console.log(article)

      let article = Json.

      API.post('/le-blog/blogs/save', {
        article: article
      }).then((res) => {
        if (res.status == 200) {
          alert("文章保存成功")
          this.contentEditor.clearCache()
        } else {
          alert('文章保存失败')
        }
      })
    },
    renderMarkdown(md) {
      Vditor.preview(document.getElementById("preview"), md, {
        hljs: { style: "github" },
      });
    },

  }
}
</script>