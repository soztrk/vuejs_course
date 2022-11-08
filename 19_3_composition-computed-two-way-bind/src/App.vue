<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <div>
      <input type="text" @input="setFirstName" :value="name"/>
      <input type="text" v-model="lastname" />
    </div>
  </section>
</template>

<script setup>
import {ref,computed,watch} from "vue"

const name = ref("Max")
const lastname = ref("Millian")

const fullName = computed(()=>{
  return name.value +" "+lastname.value
})

watch(name,(newValue,oldValue)=>{
  console.log("single=",oldValue,newValue)
})

watch([name,lastname],(newValues,oldValues)=>{
  console.log("array_1=",oldValues[0],newValues[0])
  console.log("array_2=",oldValues[1],newValues[1])
})

const setFirstName = (event) => {
  name.value = event.target.value
}

/* const setLastName = (event) => {
  lastname.value = event.target.value
} */

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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>