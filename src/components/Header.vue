<template>
  <header class="header text-center" @click="changeTitle">
    <h2 class="title">{{title | capitalize}}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "No Title"
    }
  },
  methods: {
    changeTitle: function() {
      this.$prompt("您是否要改变标题？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "请输入新标题",
        closeOnClickModal: true,
        inputValidator: function(data) {
          return data && data.trim() ? true : "请勿输入空字段";
        }
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "标题修改成功"
          });
          this.$emit("updateTitle", value);
        })
        .catch(() => {});
    }
  },
  filters: {
    // 标题自动大写
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: lightgreen;
  overflow: hidden;
  padding: 20px 0;
  .title {
    margin: 0;
  }
}
</style>