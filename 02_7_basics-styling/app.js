const app = Vue.createApp({
    data(){
        return{
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false,
            boxDSelected:false,
            boxESelected:false
        }
    },
    methods: {
        selectBox(box){
            if(box === "a"){
                this.boxASelected = !this.boxASelected
            }
            else if(box === "b"){
                this.boxBSelected = !this.boxBSelected
            }
            else if(box === "c"){
                this.boxCSelected = !this.boxCSelected
            }
            else if(box === "d"){
                this.boxDSelected = !this.boxDSelected
            }
            else if(box === "e"){
                this.boxESelected = !this.boxESelected
            }
        }
    },
    computed:{
        boxDClasses(){
            return {selected:this.boxDSelected}
        }
    }
})
app.mount("#styling")