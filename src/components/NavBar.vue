<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/hmcc">HMCC</router-link>
      <router-link :to="{ name: 'HaloInfinite' }">Halo Infinite</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
