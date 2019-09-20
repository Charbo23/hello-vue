<template>
  <div class="user-list">
    <my-header title="User List"></my-header>
    <users></users>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Users from "@/components/Users.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UserList",
  data() {
    return {};
  },
  components: {
    "my-header": Header,
    users: Users,
    "my-footer": Footer
  }
};
</script>

<style lang="scss" scoped>
</style>