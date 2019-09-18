<template>
  <div class="test">
    <h1 class="text-center">Grid Zone</h1>
    <div class="grid-box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.grid-box {
  display: grid;
  width: 300px;
  height: 300px;
  border: solid 3px #42b983;
  grid-template-rows: repeat(3,1fr);
  grid-template-columns: repeat(3,1fr);
  div{
    width: 100px;
    height: 100px;
    background-color: #409eff;
    background-clip: content-box;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    line-height: 80px;
  }
}

</style>