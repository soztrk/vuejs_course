<template>
    <!-- @click="$emit('click-event')" no need for this because of attribute falltrough -->
    <button :class="mode" :type="type">
        <slot></slot>
    </button>
</template>
<script>
    export default{
        props:["mode","type"],
        emits:["click-event"]
    }
</script>
<style scoped>
    button{
        background-color: cadetblue;
        color:white;
        padding:10px 20px;
        margin:10px;
        transition:background-color ease-in-out 0.3s;
        font-size: 18px;
        border:none;
        cursor: pointer;
    }
    button:hover{
        background-color: rgb(116, 203, 206);
    }
    button:focus{
        background-color: rgb(60, 107, 109);
    }
    .flat{
        background-color: transparent;
        color:cadetblue;
    }
</style>