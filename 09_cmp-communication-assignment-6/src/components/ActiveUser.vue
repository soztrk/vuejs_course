<template>
    <h2>{{name}} &nbsp;</h2>
    <h3>{{age}} &nbsp;</h3>
</template>
<script>
export default{
    name:"ActiveUser",
    props:["name","age"]
}
</script>