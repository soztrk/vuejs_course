const app = Vue.createApp({
  data() {
    return {
      goalInput:"", 
      goals: [] 
    };
  },
  methods: {
    addGoal(){
      if(this.goalInput === "") return
      this.goals.push(this.goalInput)
      this.goalInput = ""
    },
    removeGoal(index){
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');