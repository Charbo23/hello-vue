<template>
  <div class="bag text-center">
    <div class="bag-img" :class="{burst:isBurst}"></div>
    <div class="bag-health">
      <el-progress :text-inside="true" :stroke-width="30" :percentage="percentage" :color="colors"></el-progress>
    </div>
    <div class="bag-control">
      <div class="btn-group">
        <el-button-group>
          <el-button
            icon="el-icon-minus"
            @keyup.left="decrease"
            @click="decrease"
            :disabled="isBurst"
          >放气</el-button>
          <el-button icon="el-icon-plus" @click="increase" :disabled="isBurst">打气</el-button>
        </el-button-group>
      </div>
      <div class="btn-group">
        <el-button-group v-show="isBurst">
          <el-button icon="el-icon-refresh-right" @click="restart">重新开始</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Bag",
  mounted() {
    document.onkeydown = e => {
      let key = window.event.keyCode;
      switch (key) {
        case 37:
          window.event.preventDefault();
          this.decrease();
          break;
        case 39:
          window.event.preventDefault();
          this.increase();
          break;
        case 32:
          window.event.preventDefault();
          this.restart();
          break;
        default:
          break;
      }
    };
  },
  data() {
    return {
      percentage: 0,
      colors: [
        { color: "#5cb87a", percentage: 51 },
        { color: "#e6a23c", percentage: 81 },
        { color: "#f56c6c", percentage: 100 }
      ]
    };
  },
  computed: {
    isBurst: function() {
      return this.percentage === 100;
    },
    diff: function() {
      const temp = Math.ceil((100 - this.percentage) / 10);
      const min = 3;
      return temp <= min ? min : temp;
    }
  },
  watch: {
    isBurst: function(cur) {
      if (cur === true) {
        // this.$confirm("是否重新开始游戏?", "提示", {
        //   confirmButtonText: "确定",
        //   cancelButtonText: "取消",
        //   type: "warning",
        //   closeOnClickModal: false
        // })
        //   .then(() => {
        //     this.restart();
        //   })
        //   .catch(() => {

        //     this.$notify({
        //       title: "提示",
        //       message: "游戏结束",
        //       type: "warning"
        //     });
        //   });
        this.$message({
          message: "游戏结束",
          type: "warning"
        });
      }
    }
  },
  methods: {
    increase: _.throttle(
      function() {
        if (this.isBurst) return;
        this.percentage + this.diff >= 100
          ? (this.percentage = 100)
          : (this.percentage += this.diff);
      },
      100,
      {
        leading: true,
        trailing: false
      }
    ),
    decrease: _.throttle(
      function() {
        if (this.isBurst) return;
        this.percentage - this.diff < 0
          ? (this.percentage = 0)
          : (this.percentage -= this.diff);
      },
      100,
      {
        leading: true,
        trailing: false
      }
    ),
    restart: function() {
      if (this.isBurst) this.percentage = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes bugScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
.bag {
  padding-top: 50px;
}
.bag-img {
  // css中使用alias需要加~
  background: url("~@assets/bag.png") center no-repeat;
  background-size: 100%;
  width: 100px;
  height: 250px;
  margin: 0 auto;
  transition: all 0.3s;
  &.burst {
    background: url("~@assets/bag-burst.png") center no-repeat;
    background-size: 100%;
    animation: bugScale 0.5s;
  }
}
.btn-group {
  & + & {
    margin-top: 10px;
  }
}
.bag-health {
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
}
.bag-control {
  margin-top: 20px;
}
</style>