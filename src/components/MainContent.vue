<template>
  <div class="main-container">
    <ul 
    v-infinite-scroll="loadMore" 
    class="infinite-list" style="overflow: auto"
    >
      <li v-for="i in count" :key="i" class="list-item"><CardItem></CardItem></li>
    </ul>
  </div>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: 'MainContent',
  components:{
    CardItem
  },
  data() {
    return {
      count: 7,
      value:new Date()
    }
  },
  methods: {
    loadMore(){
        console.log("load more...")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list-item{
  list-style: none;
}
</style>
