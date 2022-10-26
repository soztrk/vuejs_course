const app = Vue.createApp({
    data(){
        return{
            target:37,
            counter:0,
            canReset:true
        }
    },
    methods: {
        add(value){
            this.counter += value
        }
    },
    computed:{
        result(){
            if(this.counter > this.target) return "Too much!"
            else if(this.counter < this.target) return "Not there yet."
            else return "Number is = "+this.target
        }
    },
    watch:{
        result(value){
            console.log(value)
            const self = this
            if(self.canReset){
                setTimeout(()=>{
                    self.counter = 0
                    self.canReset = false
                },5000)
            }
            else{
                self.canReset = true
            }
        }
    }
})

app.mount("#assignment")