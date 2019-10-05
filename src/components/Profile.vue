<template>
  <div class="user-profile">
    <div class="profile-box" v-loading="loading">
      <!-- <h2 class="user-name">userId: {{$route.params.userId}}</h2> -->
      <h3 v-for="(item,name) in userProfile" :key="name" class="profile-item">
        <span class="profile-label">{{ name }}:</span>
        <span class="profile-content">{{ item }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      userProfile: {},
      loading: false
    };
  },
  methods: {
    getUserProfile(userId) {
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(res => {
          this.userProfile = res.data;
          this.loading = false;
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
  },
  created() {
    const userId = this.$route.query.userId;
    this.getUserProfile(userId);
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.getUserProfile(to.query.userId);
    next();
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  padding: 0 50px;
}
.profile-box {
  width: 100%;
  min-height: 300px;
}
.profile-label {
  display: inline-block;
  width: 120px;
  text-transform: capitalize;
}
.profile-content {
  font-weight: normal;
}
.profile-item:first-of-type {
  margin-top: 0;
}
.profile-item:last-of-type {
  margin-bottom: 0;
}
</style>