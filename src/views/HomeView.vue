<template>
  <div class="home">
    <MainContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue'

export default {
  name: 'HomeView',
  components: {
    MainContent
  }
}
</script>
