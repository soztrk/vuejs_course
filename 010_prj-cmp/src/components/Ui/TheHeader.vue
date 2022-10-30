<template>
    <header>
      <h1>{{title}}</h1>  
    </header>
</template>
<script>
export default{
    props:["title"]
}
</script>
<style scoped>
    header{
        padding: 10px;
        background-color: cadetblue;
    }
    header h1{
        color:white;
        font-size: 46px;
        text-align: center;
        margin-top:10px;
        margin-bottom:10px;
    }
</style>