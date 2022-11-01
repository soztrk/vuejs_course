<template>
    <BaseCard>
        <header>
            <h3>{{title}}</h3>
            <BaseButton mode="flat" @click="removeResource(id)">Remove</BaseButton>
        </header>
        <p>{{description}}</p>
        <a :href="link">View Resource</a>
    </BaseCard>
</template>
<script>
export default{
    props:["id","title","description","link"],
    inject:["removeResource"]
}
</script>
<style scoped>
    a{
        color:orange;
        text-decoration: none;
        font-size: 20px;
    }
    button{
        display: flex;
        flex-direction: column;
        color:red !important;
    }
    header{
        display: flex;
        justify-content: space-between;
    }
</style>