<template>
  <div class="user-list">
    <my-header :title="title" @updateTitle="updateTitle"></my-header>
    <!-- <users :userList="this.getUserList()"></users> -->
    <!-- 不能写成这样，会导致无法进行侦听 -->
    <users :userList="userList1"></users>
    <users :userList="userList2"></users>
    <my-footer></my-footer>
  </div>
</template>

<script>
import shortid from "shortid";
import Header from "@/components/Header.vue";
import Users from "@/components/Users.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UserList",
  data() {
    return {
      title: "User List",
      userList1: this.getUserList(),
      userList2: this.getUserList()
    };
  },
  components: {
    "my-header": Header,
    users: Users,
    "my-footer": Footer
  },
  methods: {
    getUserList: function(length = 9) {
      return Array.from({ length: length }, (value, index) => ({
        id: shortid.generate(),
        name: "Henry",
        position: "Web developer",
        show: false
      }));
    },
    updateTitle: function(targetTitle) {
      targetTitle.trim() && (this.title = targetTitle);
    }
  },
  created() {
    // console.log("created", this.userList1);
  }
};
</script>

<style lang="scss" scoped>
</style>