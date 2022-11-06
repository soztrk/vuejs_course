<template>
    <TheHeader />
    <RouterView v-slot="slotProps">
      <Transition name="route" mode="out-in">
        <Component :is="slotProps.Component"></Component>
      </Transition>
    </RouterView>
</template>
<script>
import TheHeader from "./components/TheHeader"
export default{
    components:{
        TheHeader
    },
    computed:{
      didAutoLogout(){
        return this.$store.getters["auth/didAutoLogout"]
      }
    },
    watch:{
      didAutoLogout(currentVal,oldVal){
        if(currentVal && currentVal !== oldVal) this.$router.replace("/")
      }
    },
    created(){
      this.$store.dispatch("auth/autoLogin")
    }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-active{
  transition:all 0.3s ease-out;
}
.route-enter-leave{
  transition:all 0.3s ease-in;
}
.route-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-to, .route-leave-from{
  opacity: 1;
  transform: translateY(0);
}

</style>