const app = Vue.createApp({
    data(){
        return{
            userClass:"",
            paragraphVisible:true,
            background:""
        }
    },
    methods: {
        toggleParagraph(){
            this.paragraphVisible = !this.paragraphVisible
        }
    },
    computed:{
        userClasses(){
            return {
                user1:this.userClass === "user1",
                user2:this.userClass === "user2",
                visible:this.paragraphVisible,
                hidden:!this.paragraphVisible
            }
        }
    }
})

app.mount("#assignment")