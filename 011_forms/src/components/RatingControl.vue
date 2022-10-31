<template>
    <h2>{{title}}</h2>
    <ul>
        <li><button :class="{active:modelValue === 'poor'}" type="button" @click="selectRating('poor')">Poor</button></li>
        <li><button :class="{active:modelValue === 'average'}" type="button" @click="selectRating('average')">Average</button></li>
        <li ><button :class="{active:modelValue === 'good'}" type="button" @click="selectRating('good')">Good</button></li>
    </ul>
</template>
<script>
export default{
    /* data(){
        return{
            activeRating:this.modelValue
        }
    }, */
    /* no nood because model value can bu used directly
    computed:{
        activeRating(){
            return this.modelValue
        }
    },
    */
    methods:{
        selectRating(value){
            //this.activeRating = value
            this.$emit("update:modelValue",value)
        }
    },
    props:["title","modelValue"],
    emits:["update:modelValue"]
}
</script>
<style>
h2{
    margin-bottom:10px;
    font-size: 1rem;
}
ul{
    padding-left: 0;
    list-style: none;
    margin-top:0;
}
ul li{
    display: inline-block;
    margin:0 2px;
}
ul li button{
    background-color:transparent;
    color:black;
    border:none;
    padding: 4px 8px;
    cursor: pointer;
    border:1px solid black;
}
ul li button.active{
    background-color:rgb(211, 118, 56);
    color:white;
    border-color: rgba(0,0,0,0); 
}
</style>