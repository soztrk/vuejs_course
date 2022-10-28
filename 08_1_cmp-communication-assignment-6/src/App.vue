<template>
    <header>
        <h1>Assignment 6</h1>
    </header>
    <section>
        <div>
            <UserData
            @export-data="typeUserData"
            />
        </div>
        <div>
            <ActiveUser 
            :name="name"
            :age="age"
            />
        </div>
    </section>
</template>
<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default{
    name:"App",
    data(){
        return {
            name:"",
            age:null
        }
    },
    methods:{
        typeUserData(data){
            const userData = data()
            this.name = userData.name
            this.age = userData.age
        }
    },
    components:{
        ActiveUser,
        UserData
    }
}
</script>
<style scoped>
    section div{
        display: inline-block;
        width:50%
    }
</style>