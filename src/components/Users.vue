<template>
  <div :class="$style.users">
    <ul>
      <li v-for="user in users" :key="user.id" @click="user.show=!user.show">
        <h2 :class="$style['user-name']">{{user.name}}</h2>
        <p v-show="user.show" :class="$style['user-position']">{{user.position}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import shortid from "shortid";
export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  created() {
    this.users = Array.from({ length: 9 }, (value, index) => ({
      id: shortid.generate(),
      name: "Henry",
      position: "Web developer",
      show: false
    }));
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
    }
  }
}
.user-name {
  flex-basis: 100%;
  flex-grow: 1;
  margin: 0;
}
.user-position {
  flex-basis: 100%;
  margin: 0;
}
</style>