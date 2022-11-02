<template>
    <div class="container">
      <div :class="['block',{animate:blockAnimated}]"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition @enter="trackElement">
        <p v-if="paragraphVisible">Something for transition animation</p>
      </transition>
      <button @click="toggleVisibleParagraph">Toggle</button>
    </div>
    <div class="container">
      <!-- custom all class names = enter-from-class,enter-to-class,enter-active-class (leave) ... -->
      <transition 
      name="p"
      @before-enter="trackAnimationEvent('before enter')"
      @enter="trackAnimationEvent('enter')"
      @after-enter="trackAnimationEvent('after enter')"
      @before-leave="trackAnimationEvent('before leave')"
      @leave="trackAnimationEvent('leave')"
      @after-leave="trackAnimationEvent('after leave')"
      >
        <p v-if="paragraphVisible2">Something for transition animation 2</p>
      </transition>
      <button @click="toggleVisibleParagraph2">Toggle 2</button>
    </div>
    <div class="container">
      <transition name="btn" mode="out-in">
        <button @click="showButton" v-if="!buttonVisible">Show Button</button>
        <button @click="hideButton" v-else>Hide Button</button>
      </transition>
    </div>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <transition
      name="js"
      :css="false"
      @before-enter="beforJsAnimationIn"
      @enter="jsAnimationIn"
      @leave="jsAnimationOut"
      @after-leave="afterJsAnimationOut"
      @enter-cancelled="jsAnimationInCancelled"
      @leave-cancelled="jsAnimationOutCancelled"
      >
        <p v-if="jsAnimVisible">Javascript native animation</p>
      </transition>
      <button @click="toggleJsAnimation">JS Anim</button>
    </div>
    <div class="container">
      <users-list />
    </div>
  </template>  
  
  <script>
  import UsersList from "../components/UsersList"
  
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
      },
      methods: {
          showDialog() {
              this.dialogIsVisible = true;
          },
          hideDialog() {
              this.dialogIsVisible = false;
          },
          animateBlock() {
              this.blockAnimated = !this.blockAnimated;
          },
          toggleVisibleParagraph() {
              this.paragraphVisible = !this.paragraphVisible;
          },
          toggleVisibleParagraph2() {
              this.paragraphVisible2 = !this.paragraphVisible2;
          },
          showButton() {
              this.buttonVisible = true;
          },
          hideButton() {
              this.buttonVisible = false;
          },
          trackAnimationEvent(event) {
              console.log(event);
          },
          trackElement(element) {
              console.log(element);
          },
          toggleJsAnimation() {
              this.jsAnimVisible = !this.jsAnimVisible;
          },
          beforJsAnimationIn(el) {
              el.style.opacity = 0;
          },
          jsAnimationIn(el, done) {
              let round = 1;
              this.jsAnimEnterInterval = setInterval(() => {
                  el.style.opacity = round * 0.01;
                  round++;
                  if (round > 100) {
                      clearInterval(this.jsAnimEnterInterval);
                      done();
                  }
              }, 20);
          },
          jsAnimationOut(el, done) {
              let round = 1;
              this.jsAnimLeaveInterval = setInterval(() => {
                  el.style.opacity = 1 - round * 0.01;
                  round++;
                  if (round > 100) {
                      clearInterval(this.jsAnimLeaveInterval);
                      done();
                  }
              }, 20);
          },
          afterJsAnimationOut(el) {
              el.style.opacity = 0;
          },
          jsAnimationInCancelled() {
              clearInterval(this.jsAnimEnterInterval);
          },
          jsAnimationOutCancelled() {
              clearInterval(this.jsAnimLeaveInterval);
          }
      },
      components: { UsersList }
  };
  </script>
  
  <style scoped>
  .block {
    width: 8rem;
    height: 8rem;
    background-color: #290033;
    margin-bottom: 2rem;
    /* transition: transform 0.5s ease-in; */
  }
  .animate{
    /* transform:translateX(-100px); */
    animation: slide-scale 0.5s ease-in-out forwards;
  }
  
  /* 
    vue transtion states (default)
  
    -- appear
    v-enter-from
    v-enter-to
    v-enter-active
  
    --disappear
    v-leave-from
    v-leave-to
    v-leave-active
  
  */
  
  /* toggle animation */
  .v-enter-active{
    animation: slide-scale 0.5s ease-in-out;
  
  }
  .v-leave-active{
    animation: slide-scale 0.5s ease-in-out;
  }
  
  /* custom class name */
  .p-enter-from{
    opacity:0;
    transform: translateY(-30px);
  }
  .p-enter-to{
    opacity:1;
    transform: translateY(0);
  }
  .p-enter-active{
    transition: all ease-in 1s;
    transition-property: transform,opacity;
  }
  .p-leave-from{
    opacity:1;
    transform: translateY(0);
  }
  .p-leave-to{
    opacity:0;
    transform: translateY(-30px);
  }
  .p-leave-active{
    transition: all ease-out 1s;
    transition-property: transform,opacity;
  }
  
  /* button animations */
  .btn-enter-active, .btn-leave-active{
    transition: opacity ease-in-out 0.3s;
  }
  .btn-enter-from, .btn-leave-to{
    opacity: 0;
  }
  .btn-enter-to, .btn-leave-from{
    opacity: 1;
  }

  @keyframes slide-scale {
  0%{
    transform: translateX(0) scale(1);
  }
  70%{
    transform: translateX(-100px) scale(0.5);
  }
  100%{
    transform: translateX(-150px) scale(1);
  }
}
  </style>