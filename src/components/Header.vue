<template>
  <header class="header text-center">
    <h2 class="title">{{title}}</h2>
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
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: lightgreen;
  overflow: hidden;
  padding: 20px 0;
  .title{
    margin: 0;
  }
}
</style>