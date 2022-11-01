<template>
    <dialog :open="isOpen" :class="type">
        <h2>{{title}}</h2>
        <p>{{message}}</p>
        <BaseButton @click="closeDialog">Close</BaseButton>
    </dialog>
    <div></div>
</template>
<script>
export default{
    data(){
        return{
            title:"",
            message:"",
            type:"",
            isOpen:false
        }
    },
    methods:{
        closeDialog(){
            this.isOpen = false
        },
        openDialog({title,message,type}){
            this.title=title
            this.message=message
            this.type=type
            this.isOpen = true
        }
    }
}
</script>
<style scoped>
div{
    display: none;
    position: fixed;
    top:0;
    right:0;
    height: 100%;
    width:100%;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
}
dialog[open] + div{
    display: block;
    min-width:300px;
}
dialog{
    top:30vh;
    color:gray;
    z-index: 101;
    border-width: 1px;
    box-shadow: 0 0 8px 4px rgba(0,0,0,0.25);
}
dialog.error{
    color:red;
}
button{
    margin-left: 0;
}
h2{
    margin-top:5px;
}
</style>