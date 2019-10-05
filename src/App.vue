<template>
  <div id="app">
    <div class="main-content">
      <div id="nav" class="text-center">
        <!-- <router-link to="/" exact>Home</router-link> -->
        <!-- <router-link :to="homeLink" tag="el-link">Home</router-link> -->
        <el-link icon="el-icon-s-home" :underline="false" :data-link="homeLink" @click="navTo">首页</el-link>
        <!-- <el-button type="primary" size='small' icon="el-icon-s-home"></el-button> -->
        <!-- <router-link to="/about">About</router-link> -->
        <el-link icon="el-icon-info" :underline="false" data-link="/about" @click="navTo">关于</el-link>
        <router-link to="/grid">Grid</router-link>
        <router-link to="/test">Test</router-link>
        <router-link to="/bag">Bag</router-link>
        <router-link to="/user-list">UserList</router-link>
        <router-link :to="{name:'userInfo',params:{userId:2,test:1}}">UserInfo</router-link>
        <router-link :to="{path:'/profile',query:{userId:1}}">UserProfile</router-link>
      </div>
      <transition name="fade" mode="out-in">
        <keep-alive include="About,UserList,Home">
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      homeLink: "/home"
    };
  },
  components: {
    "my-footer": Footer
  },
  methods: {
    navTo: function(e) {
      const targetLink = e.currentTarget.dataset.link;
      this.$router.push(targetLink);
    }
  }
};
</script>
<style lang="scss">
body {
  // 加入动画需禁止横向滚动条
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.text-center {
  text-align: center;
}
.main-content {
  min-height: calc(100vh - 72px);
  box-sizing: border-box;
  padding-bottom: 30px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    transition: color 0.3s;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
  a + a {
    &:before {
      content: "|";
      color: #000;
      margin: 0 10px;
    }
  }
}
.title {
  margin-top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  transform: translateX(50px);
}
.fade-leave-to {
  transform: translateX(-50px);
}
</style>
