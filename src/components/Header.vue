<template>
  <div class="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.nav {
  background-color: #3ab981;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
}

.nav a {
  color: #ffffff;
  padding-right: 10px;
  text-decoration: none;
}
</style>
