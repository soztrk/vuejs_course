const app = Vue.createApp({
    data(){
        return{
            text:"",
            text2:"",
            text3:""
        }
    },
    methods: {
        showAlert(){
            alert("Alert is alerted")
        },
        setText(event){
            this.text = event.target.value
        },
        setText2(event){
            this.text2 = event.target.value
        },
        setTextAll(event,variable){
            this[variable] = event.target.value
        }
    }
})

app.mount("#assignment")