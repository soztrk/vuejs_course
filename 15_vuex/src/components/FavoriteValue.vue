<template>
    <h3>favorite counter = {{counter}}</h3>
</template>
<script>
export default{
    computed:{
        counter(){
            return this.$store.getters["counter/normalizedCounter"]
        }
    }
}
</script>