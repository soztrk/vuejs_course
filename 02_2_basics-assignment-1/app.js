const app = Vue.createApp({
    data(){
        return{
           name:"Selami",
           age:42,
           imageUrl:"https://images.unsplash.com/photo-1666240073343-9801b7b5b949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
    },
    methods:{
        ageInYears(years){
            return this.age+years
        },
        favoriteNumber(){
           return Math.random()
        }
    }
})
app.mount("#assignment")