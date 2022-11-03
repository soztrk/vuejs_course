<template>
    <h3>the counter = {{counter}}</h3>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        /* counter(){
            return this.$store.getters.finalCounter
        } */
        //...mapGetters("counter",["finalCounter"])
        ...mapGetters("counter",{counter:"finalCounter"})
    }
}
</script>