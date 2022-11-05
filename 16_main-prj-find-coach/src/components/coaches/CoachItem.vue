<template>
    <li>
        <h3>{{fullName}}</h3>
        <h4>${{rate}}</h4>
        <div>
            <Badge v-for="expertise in expertises" :key="expertise" :title="expertise" :type="expertise" />
        </div>
        <div class="actions">
            <Button link :to="contactLink">Contact</Button>
            <Button link :to="detailsLink">View Details</Button>
        </div>
    </li>
</template>
<script>
export default{
    props:["id","firstName","lastName","expertises","rate"],
    computed:{
        fullName(){
            return this.firstName+" "+this.lastName
        },
        contactLink(){
            return "/coach/"+this.id+"/contact"
        },
        detailsLink(){
            return "/coach/"+this.id
        }
    }
}
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>