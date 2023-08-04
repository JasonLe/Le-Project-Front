<template>
    <el-menu class="head-menu" :default-active="$route.path" :router="true" mode="horizontal" :ellipsis="false"
        @select="handleSelect" background-color="#0e2439" text-color="#9cb3c9" style="border-bottom:none">
        <el-menu-item index="/">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-input class="input-box"
            style="margin-left: 30%;margin-right: 30%;margin-top: auto;margin-bottom: auto; height:40px;" v-model="input"
            :prefix-icon="searchIcon" placeholder="Please input" @change="inputChange" />
        <el-menu-item index="/writeBlog">写文章</el-menu-item>
        <el-menu-item index="2" style="margin:auto;"><el-icon>
                <User />
            </el-icon></el-menu-item>
    </el-menu>
</template>
  
<script>
import { Search } from '@element-plus/icons-vue'
export default {
    name: 'MyHeader',
    data() {
        return {
            searchIcon: Search,
            input: ""
        }
    },
    methods: {
        handleSelect(val) {
            console.log(val);
        },
        inputChange(keyWord) {
            console.log(keyWord);
        }
    }
}
</script>
  
<style>
.head-menu {
    width: 100%;
    height: 100%;
}

.flex-grow {
    flex-grow: 1;
}
</style>
  