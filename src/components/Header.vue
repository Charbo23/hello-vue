<template>
  <header class="header text-center">
    <h1 class="title">{{title}}</h1>
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
}
</style>