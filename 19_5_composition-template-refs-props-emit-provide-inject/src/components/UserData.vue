<template>
    <h2>{{userName}}</h2>
    <h3>{{age}}</h3>
    <h4>{{birthYear}}</h4>
</template>

<!-- <script>
export default{
    props:["name","lastname","age"],
    computed:{
        userName(){
            return this.name+" "+this.lastname
        }
    }
}
</script> -->

<script setup>
import {
    computed,
    defineProps,
    defineEmits,
    watch,
    inject,
    // life cycle functions
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from "vue"

const props = defineProps(["name","lastname","age"])
const emit = defineEmits(["ageChanged","nameChangedTo"])

const userName = computed(()=>{
    return props.name+" "+props.lastname
})

const compAge = computed(()=>{
    return props.age
})

watch(userName,(value)=>{
    emit("nameChangedTo",value)
})

// can't watch props directly
watch(compAge,()=>{
    emit("ageChanged")
})

onBeforeMount(()=>{
    console.log("before mount")
})

onMounted(()=>{
    console.log("mounted")
})

onBeforeUpdate(() => {
    console.log("before update")
})

onUpdated(()=>{
    console.log("updated")
})

onBeforeUnmount(()=>{
    console.log("before unmout")
})

onUnmounted(()=>{
    console.log("unmounted")
})

const birthYear = inject("birthYear")

</script>