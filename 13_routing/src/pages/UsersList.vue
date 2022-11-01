<template>
  <div>
    <button @click="backToTeams()">Go Back To Teams</button>
    <button @click="()=>isFormSaved=true">Save Form</button>
  </div>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data(){
    return{
      isFormSaved:false
    }
  },
  methods:{
    backToTeams(){
      this.$router.push("/teams")
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  beforeRouteEnter (to, from, next) {
    console.log("in users list component")
    console.log(to,from)
    next()
  },
  beforeRouteLeave(to,from,next){
    if(this.isFormSaved) next(true)
    else{
      const userWantToLeave = confirm("You have unsaved data. Are you sure want to leave?")
      next(userWantToLeave)
    }
  },
  unmounted(){
    console.log("unmounted")
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
div{
  padding:10px;
  text-align: center;
}
</style>