<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <h3 v-if="isVisible">{{mygoal}}</h3>
  <h3 v-if="refObj.isVisible">{{refObj.mygoal}}</h3>
  <h3 v-if="rObj.isVisible">{{rObj.mygoal}}</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
  <!-- <h3 v-if="isVisible">{{mygoal}}</h3> -->
</template>

<script setup>
import {ref,reactive} from "vue"

// seperate
const mygoal = "Mastering vuejs"
let isVisible = ref(true)

// ref obj
const refObj = ref({
  mygoal:"Mastering composition api",
  isVisible:true
})

// reactive obj
const rObj = reactive({
  mygoal:"Mastering reactive in composite api",
  isVisible:true
})

const toggleGoal = ()=>{
  //seperate
  isVisible.value = !isVisible.value
  // ref obj
  refObj.value.isVisible = !refObj.value.isVisible
  // reactive obj
  rObj.isVisible = !rObj.isVisible
}

</script>

<!-- <script>
export default{
  data(){
    return {
      mygoal:"Master options api",
      isVisible:true
    }
  },
  methods:{
    toggleGoal(){
      this.isVisible = !this.isVisible
    }
  }
}
</script> -->

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>