const app = Vue.createApp({
    data(){
        return{
            taskInput:"",
            tasks:[],
            isTasksVisible:true
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.taskInput)
            this.taskInput = ""
        },
        toggleTasks(){
            this.isTasksVisible = !this.isTasksVisible
        }
    },
    computed:{
        buttonCaption(){
            return this.isTasksVisible ? "Hide List" : "Show List"
        }
    }
})
app.mount("#assignment")