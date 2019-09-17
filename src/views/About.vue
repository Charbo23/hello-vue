<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="fetchData(false)" v-loading.fullscreen.lock="initLoading">获取数据</el-button>
    <p>Input: {{input}}</p>
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
export default {
  name: "about",
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
      initLoading: false
    };
  },
  methods: {
    fetchData: function(isInit = false) {
      if (this.loading) {
        return;
      }
      isInit ? (this.initLoading = true) : (this.loading = true);

      axios.get("/mock.json").then(response => {
        setTimeout(() => {
          this.tableData = response.data.tableData;
          this.loading = false;
          this.initLoading = false;
          this.$notify({
            title: "成功",
            message: "数据获取成功",
            type: "success"
          });
        }, 2000);
      });
    }
  },
  created: function() {
    this.fetchData(true);
  }
};
</script>
