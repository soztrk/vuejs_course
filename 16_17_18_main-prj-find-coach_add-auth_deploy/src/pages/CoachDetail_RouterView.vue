<template>
    <section v-if="!isChildRoute">
        <h1>Coaches Detail</h1>
    </section>
    <RouterView v-else ref="childRouterView"></RouterView>
</template>
<script>
export default{
    data(){
        return{
            isChildRoute:false
        }
    },
    methods: {
        checkdRoute(){
            this.isChildRoute = this.$route.matched.length > 1
        }
    },
    mounted(){
        this.checkdRoute()
    },
    updated(){
        this.checkdRoute()
    }
}
</script>