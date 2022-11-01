<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  created(){
    this.loadTeamMembers(this.id) //this.$route
  },
  methods:{
    loadTeamMembers(teamId){ //route 
      //Teams
      //const teamData = this.teams.filter(team=>team.id===route.params.id)[0]
      const teamData = this.teams.filter(team=>team.id===teamId)[0]
      if(!teamData) return
      this.teamName = teamData.name
      // Members
      const selectedMembers = []
      for (const member of teamData.members){
        selectedMembers.push(this.users.find(user=>user.id===member))
      }
      this.members = selectedMembers
      if(this.$route && this.$route.query && this.$route.query.sort && this.$route.query.sort === "asc") {
        this.members.sort((a,b)=>{
          if(a["fullName"] > b["fullName"]) return 1
          else if(a["fullName"] < b["fullName"]) return -1
          else return 0
        })
      }
    }
  },
  /* alternate watch , but only supports params not props
  beforeRouteUpdate(to,from,next){
    this.loadTeamMembers(to.params.id)
    next()
  },
  */
  watch:{
    /* $route(newRoute){
      this.loadTeamMembers(newRoute)
    } */
    id(newTeamId){
      this.loadTeamMembers(newTeamId)
    }
  },
  components: {
    UserItem
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  inject:["users","teams"],
  props:["id"]
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>