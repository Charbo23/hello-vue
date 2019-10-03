<template>
  <div class="user-info">
    <div class="info-box" v-loading="loading">
      <!-- <h2 class="user-name">userId: {{$route.params.userId}}</h2> -->
      <h3 v-for="(item,name) in userInfo" :key="name" class="info-item">
        <span class="info-label">{{ name }}:</span>
        <span class="info-content">{{ item }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {},
      loading: false
    };
  },
  methods: {
    getUserInfo(userId) {
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(res => {
          this.userInfo = res.data;
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
    const userId = this.$route.params.userId;
    this.getUserInfo(userId);
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.getUserInfo(to.params.userId);
    next();
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  padding: 0 50px;
}
.info-box {
  width: 100%;
  min-height: 300px;
}
.info-label {
  display: inline-block;
  width: 120px;
  text-transform: capitalize;
}
.info-content {
  font-weight: normal;
}
.info-item:first-of-type {
  margin-top: 0;
}
.info-item:last-of-type {
  margin-bottom: 0;
}
</style>