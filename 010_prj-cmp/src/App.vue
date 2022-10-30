<template>
    <TheHeader title="Remember Me" />
    <BaseCard>
        <BaseButton @click="setComponent('StoredResources')" :mode="activeComponent !== 'StoredResources' ? 'flat' : ''">Stored Resources</BaseButton>
        <BaseButton @click="setComponent('AddResources')" :mode="activeComponent !== 'AddResources' ? 'flat' : ''">Add Resources</BaseButton>
    </BaseCard>
    <div>
        <component :is="activeComponent"></component>
    </div>
    <Teleport to="#app">
        <BaseDialog ref="dialogRef" />
    </Teleport>
</template>
<script>
import AddResources from "./components/AddResources.vue"
import StoredResources from "./components/StoredResources.vue"
export default{
    data(){
        return{
            activeComponent:"StoredResources",
            resources:[]
        }
    },
    methods:{
        setComponent(name){
            this.activeComponent = name
        },
        addResource(data){
            data.id = Math.floor(Date.now() / 100)
            this.resources.unshift(data)
            this.setComponent("StoredResources")
        },
        getRef(){
            return this.$refs.dialogRef
        },
        removeResource(id){
            //this.resources.filter(resource=>resource.id!==id)
            const index = this.resources.findIndex(resource=>resource.id===id)
            this.resources.splice(index,1)
        }
    },
    provide(){
        return{
            resources:this.resources,
            addResource:this.addResource,
            dialogRef:this.getRef,
            removeResource:this.removeResource
        }
    },
    components:{
        AddResources,
        StoredResources
    }
}
</script>
<style>
body{
    margin:0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
ul{
    padding-left:0;
    list-style: none;
}
</style>