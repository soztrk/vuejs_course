<template>
  <UserAuth />
  <base-container title="Vuex" v-if="$store.getters.isLoggedIn">
    <the-counter />
    <FavoriteValue />
    <button @click="addOne">Add 2</button>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from "./components/TheCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue"

export default {
  methods:{
    addOne(){
      this.$store.dispatch("counter/increment","payload")
    }
  },
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
},
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>