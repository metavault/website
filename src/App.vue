<template>
  <div id="app">
    <home id="page-wrap" />
  </div>
</template>

<script>

import Home from '@/view/pages/Home'

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
@import "./assets/styles/normalize.css";
@import "./assets/styles/common.css";

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #fff;
  background-color: #1D1E26;
}

.container {
  margin: auto;
  max-width: 1620px;
  width: 90%;
}
</style>
