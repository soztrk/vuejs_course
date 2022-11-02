<template>
    <TransitionGroup tag="ul" name="users">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
    </TransitionGroup>
    <input type="text" @keyup.enter="addUser" />
</template>

<script>
export default {
    data(){
        return{
            users:[]
        }
    },
    methods:{
        addUser(event){
            this.users.push(event.target.value)
            event.target.value = ""
        },
        removeUser(userName){
            this.users = this.users.filter(user=>user !== userName)
        }
    }
}
</script>

<style>
ul{
    padding-left: 0;
    list-style: none;
    margin: 10px 0;
}
li{
    padding: 10px 20px;
    border:1px solid rgb(22, 201, 52);
    margin-bottom:1px;
    min-width: 200px;
}

.users-enter-active, .users-leave-active{
    transition:all ease 0.3s;
}
.users-enter-from, .users-leave-to{
    opacity: 0;
    transform: translateX(50px);
}
.users-enter-to, .users-leave-from{
    opacity: 1;
    transform: translateX(0);
}

.users-move{
    transition: transform 0.3s ease;
}
</style>