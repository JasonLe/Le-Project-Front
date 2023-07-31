<template>
    <div class="home">
      <BlogDetail/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import BlogDetail from '@/components/BlogDetail.vue';
  
  export default {
    name: 'BlogView',
    components: {
    BlogDetail
}
  }
  </script>
  