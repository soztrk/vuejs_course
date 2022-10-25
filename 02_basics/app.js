const app = Vue.createApp({
    data(){
        return{
           courseMotto: ["<i>Learn everything you can!</i>","Don't learn anything!"], 
           courseGoal: "Finish the course and ",
           vueLink: "https://vuejs.org/"
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5) return "learn Vue!"
            else return "master Vue!"
        },
        outputCourseMotto(){
            if(Math.random() < 0.5) return this.courseMotto[0]
            else return this.courseMotto[1]
        }
    }
})
app.mount("#user-goal")