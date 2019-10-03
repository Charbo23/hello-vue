<template>
  <div :class="$style.users">
    <ul>
      <template v-if="userList.type==='plainList'">
        <li v-for="user in userList.items" :key="user.id" @click="user.show=!user.show">
          <h2 :class="$style['user-name']">{{user.name}}</h2>
          <p v-show="user.email">{{user.email}}</p>
          <p v-show="user.show" :class="$style['user-position']">{{user.position}}</p>
        </li>
      </template>
      <template v-else>
        <li v-for="user in userList.items" :key="user.id" @click="getDetail(user.id)">
          <h2 :class="$style['user-name']">{{user.name}}</h2>
          <p v-show="user.email">{{user.email}}</p>
        </li>
      </template>
    </ul>
    <el-button @click="popUser">删除</el-button>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {};
  },
  props: {
    userList: {
      type: Object,
      required: true
    }
  },
  methods: {
    popUser: function() {
      this.userList.items.pop();
    },
    getDetail: function(userId) {
      this.$router.push({ name: 'userInfo', params: { userId: userId } });
    }
  }
};
</script>

<style lang="scss" module>
.users {
  max-width: 1200px;
  margin: 40px auto;
  box-sizing: border-box;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    li {
      flex-grow: 1;
      flex-basis: 20%;
      padding: 20px 0;
      border: 1px solid #222;
      margin: 10px;
      height: 80px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      p {
        flex-basis: 100%;
        margin: 0;
      }
    }
  }
}
.user-name {
  flex-basis: 100%;
  flex-grow: 1;
  margin: 0;
}
</style>