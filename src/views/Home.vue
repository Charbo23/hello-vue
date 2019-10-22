<template>
  <div class="home text-center">
    <img alt="Vue logo" src="@assets/logo.png" />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <router-link to="/home/news" class="home-link">
        <el-button>新闻</el-button>
      </router-link>
      <router-link to="/home/message" class="home-link">
        <el-button>消息</el-button>
      </router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App">
      <div>testing1</div>
      <template #test>
        <div ref="div">123</div>
      </template>
      <div>testing2</div>
      <div>testing3</div>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      curRoute: "/home/news"
    };
  },
  components: {
    HelloWorld
  },
  mounted() {
    // console.log(this.$refs.div.innerText);
  },
  activated() {
    // this.$notify({
    //   title: "Activated",
    //   type: "success"
    // });
    this.$router.push(this.curRoute);
  },
  deactivated() {
    // this.$notify({
    //   title: "Deactivated",
    //   iconClass: "el-icon-remove-outline warning"
    // });
  },
  beforeRouteLeave(to, from, next) {
    this.curRoute = from;
    next();
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home-link {
  display: inline-block;
  & + & {
    margin-left: 10px;
  }
}
.router-link-exact-active {
  .el-button {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>

