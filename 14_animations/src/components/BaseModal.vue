<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props:["open"],
  emits: ['close']
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal-in ease-out 0.3s forwards; */
}

.modal-enter-active{
  animation: modal-in ease-out 0.3s;
}

.modal-leave-active{
  animation: modal-in ease-out 0.3s reverse;
}

@keyframes modal-in{
  from{
    transform: translateY(50px) scale(0.8);
    opacity: 0;
  }
  to{
    transform: translateY(0) scale(1);
    opacity: 1;
  } 
}
</style>