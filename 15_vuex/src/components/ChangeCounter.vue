<template>
    <button @click="add">Add 10</button>
    <button @click="delayedInc">Delayed Increment</button>
    <!-- delayedInc(arg) -->
</template>
<script>
import { mapActions } from 'vuex';
export default{
    methods:{
        add(){
            this.$store.commit("counter/increase",10)
            /* this.$store.commit({
                type:"increase",
                value:10
            })  */
        },
        ...mapActions("counter",{delayedInc:"increment"})
        // ...mapActions("counter",["increment"])
    }
}
</script>