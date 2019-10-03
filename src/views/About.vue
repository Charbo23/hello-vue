<template>
  <div class="about text-center">
    <h1 class="title">This is an about page</h1>
    <el-button @click="fetchData(false)" v-loading.fullscreen.lock="initLoading">获取数据</el-button>
    <p :class="[style.input,'text',test.text]" :id="test.test">Input: {{input}}</p>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import test from "@style/test.module.scss";
export default {
  name: "About",
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2019-09-17",
          name: "Charbo",
          address: "湖州师范学院"
        }
      ],
      loading: false,
      initLoading: false,
      test: test
    };
  },
  methods: {
    fetchData: function(isInit = false) {
      if (this.loading) {
        return;
      }
      isInit ? (this.initLoading = true) : (this.loading = true);
      //使用devserver.proxy代理跨域请求
      // axios.get("/auth/tableData").then(response => {
      axios
        .get("https://my-json-server.typicode.com/charbo23/mock/tableData")
        .then(response => {
          setTimeout(() => {
            this.tableData = response.data;
            this.loading = false;
            this.initLoading = false;
            this.$notify({
              title: "成功",
              message: "数据获取成功",
              type: "success"
            });
          }, 1000);
        })
        .catch(error => {
          this.loading = false;
          this.initLoading = false;
          this.$notify({
            title: "数据获取失败",
            message: error.message,
            type: "error"
          });
        });
    }
  },
  created: function() {
    this.fetchData(true);
  }
};
</script>
//只写module时，直接用$style调用类名，填写module=XXX后需要用XXX.XXX引用
//标签选择器会污染全局
//id选择器需绑定在id
<style lang="scss" module='style'>
.input {
  color: #409eff;
}

.text {
  :global(&) {
    color: #000;
  }
}
</style>
