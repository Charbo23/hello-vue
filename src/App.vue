<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/grid">Grid</router-link>
      <router-link to="/test">Test</router-link>
      <router-link to="/bag">Bag</router-link>
      <router-link to="/user-list">UserList</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive include="About">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  // 加入动画需禁止横向滚动条
  overflow-x: hidden;
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a + a {
    &:before{
     content:'|';
     color:#000;
     margin: 0 10px;
    }
  }
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
  transform: translateX(31px);
}
.fade-leave-to {
  transform: translateX(-31px);
}
</style>
