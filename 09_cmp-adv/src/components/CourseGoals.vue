<template>
    <ul>
        <li v-for="(goal,index) in goals" :key="index">
            <slot :item="goal" another-prop="No binding. So no variable, just text."></slot>
        </li>
    </ul>
</template>
<script>
export default{
    data(){
        return {
            goals:["Finis the course","Master vue"]
        }
    }
}
</script>