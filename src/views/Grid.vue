<template>
  <div class="grid">
    <h1 class="text-center title">Grid Zone</h1>
    <div :class="[{[$style['grid-box']]:hasClass}]">
      <div v-for="item in divList" :key="item.id">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import shortid from "shortid";

export default {
  name: "Grid",
  data() {
    return {
      hasClass: true,
      divList: this.getDivList(10)
    };
  },
  methods: {
    getDivList: function(length = 9) {
      return Array.from({ length: length }, (value, index) => ({
        id: shortid.generate(),
        content: index + 1
      }));
    }
  }
};
</script>

<style lang="scss" module>
.grid-box {
  display: grid;
  width: 300px;
  height: 100px;
  border: solid 3px #42b983;
  margin: 0 auto;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  div {
    background-color: #409eff;
    background-clip: content-box;
    padding: 10px;
    box-sizing: border-box;
    display: grid;
    justify-content: center;
    align-items: center;
  }
}
</style>