<template>
  <RouterView v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </RouterView>
</template>  

<script>

export default {
    data() {
        return {
            dialogIsVisible: false,
            blockAnimated: false,
            paragraphVisible: false,
            paragraphVisible2: false,
            buttonVisible: true,
            jsAnimVisible: false,
            jsAnimEnterInterval: null,
            jsAnimLeaveInterval: null
        };
    }
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
  }

.route-enter-active{
  animation:slide-scale 0.3s ease;
}
.route-leave-active{
  animation: slide-scale 0.3s ease reverse;
}  

@keyframes slide-scale {
  from{
    transform: translateY(10px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}

</style>