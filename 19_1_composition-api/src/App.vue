<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3> -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <p>{{refName+" "+refAge}}</p>
    <button @click="setAge">Set Age</button>
  </section>
</template>

<script>
//import {ref,isRef} from "vue"
import {reactive,isReactive,toRefs} from "vue"

export default {
  /* data() {
    return {
      userName: 'Maximilian',
    };
  }, */
  setup(){
    // replaces = data,methods,computed,watch

    // 1
    /* const name = ref("Maxi Mill")
    const age = ref(55)

    setTimeout(()=>{
      name.value = "Max"
    },2000)

    return{
      userName:name,
      userAge:age
    } */

    //2
    /* const user = ref({
      name:"Max",
      age:30
    })

    console.log(isRef(user.value.name))

    setTimeout(()=>{
      user.value.name = "Maxi"
      user.value.age = 31
    },2000) */

    //3
    const user = reactive({
      name:"Max",
      age:30
    })

    setTimeout(()=>{
      user.name = "Maxi"
      user.age = 31
    },2000)

    console.log(isReactive(user))

    const userRefs = toRefs(user)

    const setAge = () => {
      user.age = 50
    }

    return{
      /* userName:user.value.name,
      userAge:user.value.age, */
      user,
      refName:userRefs.name,
      refAge:userRefs.age,
      setAge
    }

  }
};
</script>
<!-- Alternative way
<script setup>
  import { ref } from 'vue';
  
  const uName = ref('Maximilian');
  
  setTimeout(function() {
    uName.value = 'Max';
  }, 2000);
</script>
-->
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