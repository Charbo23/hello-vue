<template>
  <div class="home text-center">
    <img alt="Vue logo" src="@assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
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
  components: {
    HelloWorld
  },
  mounted() {
    // console.log(this.$refs.div.innerText);
  }
};
</script>

