<template>
    <BaseContainer title="Auth">
        <button v-if="!$store.getters.isLoggedIn" @click="$store.dispatch('userLogin')">Login</button>
        <button v-else @click="$store.dispatch('userLogout')">Logout</button>
    </BaseContainer>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
export default{
    components:{
        BaseContainer
    }
}
</script>