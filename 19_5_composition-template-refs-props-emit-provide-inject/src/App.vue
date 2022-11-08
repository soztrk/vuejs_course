<template>
  <section class="container">
    <!-- <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3> -->
    <UserData 
    :name="firstName"
    :lastname="lastName"
    :age="age"
    @name-changed-to="logChanges"
    @age-changed="logAge"
    />
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" ref="lastNameInput" />
      <button @click="setName">Set Name</button>
    </div>
  </section>
</template>

<script setup>
import {ref,computed,provide} from "vue"
import UserData from "./components/UserData"

const firstName = ref("")
const lastName = ref("")
const age = ref(0)
const lastNameInput = ref()

const fullName = computed(()=>{
  return firstName.value+" "+lastName.value
})

console.log(fullName)

const setAge = ()=>{
  age.value = 40
}

const setName = () => {
  lastName.value = lastNameInput.value.value
}

const logChanges = (value)=>{
  console.log("name changed to = "+value)
}

const logAge = ()=>{
  console.log("age changed")
}

provide("birthYear",1900)

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