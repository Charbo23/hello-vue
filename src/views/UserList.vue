<template>
  <div class="user-list">
    <my-header :title="title" @updateTitle="updateTitle"></my-header>
    <!-- <users :userList="this.getUserList()"></users> -->
    <!-- 不能写成这样，会导致无法进行侦听 -->
    <users :userList="userList1" v-loading="loading"></users>
    <users :userList="userList2"></users>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
import shortid from "shortid";
import axios from "axios";
import Header from "@/components/Header.vue";
import Users from "@/components/Users.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UserList",
  data() {
    return {
      title: "User List",
      userList1: this.getUserList("Loading", "plainList", 10),
      userList2: this.getUserList(),
      loading: false
    };
  },
  components: {
    "my-header": Header,
    users: Users
    // "my-footer": Footer
  },
  methods: {
    getUserList: function(name = "Henry", type = "plainList", length = 9) {
      return {
        type: type,
        items: Array.from({ length: length }, (value, index) => ({
          id: shortid.generate(),
          name: name,
          position: "Web developer",
          show: false
        }))
      };
    },
    updateTitle: function(targetTitle) {
      targetTitle.trim() && (this.title = targetTitle);
    }
  },
  created() {
    // console.log("created", this.userList1);
    this.loading = true;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setTimeout(() => {
          this.userList1 = { type: "detailedList", items: res.data };
          this.loading = false;
        }, 1000);
      })
      .catch(error => {
        this.loading = false;
        this.$notify({
          title: "数据获取失败",
          message: error.message,
          type: "error"
        });
      });
  }
};
</script>

<style lang="scss" scoped>
</style>