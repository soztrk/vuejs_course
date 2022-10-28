<template>
    <input v-model="name" type="text" placeholder="Name" />
    <input v-model="age" type="number" placeholder="Age" />
</template>
<script>
export default{
    name:"UserData",
    data(){
        return{
            name:this.name,
            age:this.age
        }
    },
    methods:{
        exportData(){
            this.$emit("export-data",()=>{
                return{
                    name:this.name,
                    age:this.age
                }
            })
        }
    },
    watch:{
        name(){
            this.exportData()
        },
        age(){
            this.exportData()
        }
    },
    emits:["export-data"]
}
</script>
<style scoped>
    input{
        display:block;
        width:90%;
        margin-bottom:5px;
        padding: 5px;
        font-size: 1em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
</style>