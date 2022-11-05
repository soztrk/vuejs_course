<template>
    <div>
        <section>
            <Card>
                <h2>{{fullName}}</h2>
                <h3>${{rate}}/hour</h3>
            </Card>
        </section>
        <section>
            <Card>
                <header>
                <h2>Interested? Reach out now!</h2>
                    <Button link :to="contactLink">Contact</Button> 
                </header>
                <RouterView></RouterView>
            </Card>
        </section>
        <section>
            <Card>
                <Badge 
                v-for="area in areas" 
                :key="area" 
                :type="area" 
                :title="area"
                />
                <p>{{description}}</p>
            </Card>
        </section>
    </div>
</template>
<script>
export default{
    props:["id"],
    data(){
        return{
            selectedCoach:null
        }
    },
    computed:{
        fullName(){
            return this.selectedCoach.firstName+" "+this.selectedCoach.lastName
        },
        contactLink(){
            return "/coach/"+this.id+"/contact"
        },
        areas(){
            return this.selectedCoach.areas
        },
        rate(){
            return this.selectedCoach.hourlyRate
        },
        description(){
            return this.selectedCoach.description
        }
    },
    created(){
        this.selectedCoach = this.$store.getters["coaches/coachesList"].find(coach=>coach.id === this.id)
    }
}
</script>