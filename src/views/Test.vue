<template>
  <div class="test text-center">
    <h1>{{title()}}</h1>
    <a href="https://www.baidu.com"  @click.prevent="alert(123)">baidu</a>
    <h2>{{count}}</h2>
    <el-button class="btn" @click="addCount(1)">单击</el-button>
    <button class="btn" @dblclick="addCount(10)">双击</button>
    <div class="canvas" @mousemove="trackMouse">
      <h2 class="track-text">
        （{{this.mouseX}},{{this.mouseY}}）
        <span @mousemove.stop><br>Stop</span>
      </h2>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Test",
  data() {
    return {
      count: 0,
      mouseX: 0,
      mouseY: 0
    };
  },
  methods: {
    title:function() {
      return "Test Zone";
    },
    addCount:function(diff) {
      this.count += diff;
    },
    trackMouse: _.throttle(function(e) {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
    }, 60),
    stopMoving:function(){
      event.stopPropagation();
    },
    alert:function(msg){
      alert(msg);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  & + & {
    margin-left: 10px;
  }
}
.canvas {
  margin: 10px auto 0;
  width: 500px;
  height: 400px;
  border: 1px solid #42b983;
  box-sizing: border-box;
  // 子绝父相
  position: relative;
}
.track-text {
  margin: 0;
  // 若将宽高定死则内部文字无法自动水平居中
  min-width: 100px;
  min-height: 100px;
  // 子绝父相，使自身垂直居中,似乎会限制高度
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // 设置内部文字垂直居中
  line-height: 50px;
  // display: flex;
  // justify-content: center;
  // align-items: center
}
</style>