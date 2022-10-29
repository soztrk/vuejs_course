<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal"> Set Goal</button>
    <teleport to="body">
        <ErrorAlert v-if="isInputInvalid">
            <h2>Input is Invalid!</h2>
            <p>Please enter et least a character.</p>
            <button @click="confirmError">Okey</button>
        </ErrorAlert>
    </teleport>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue"

export default{
    data(){
        return{
            isInputInvalid:false
        }
    },
    methods:{
        setGoal(){
            if(this.$refs.goal.value === "") {
                this.isInputInvalid = true
            }
        },
        confirmError(){
            this.isInputInvalid = false
        }
    },
    components:{
        ErrorAlert
    }
}
</script>