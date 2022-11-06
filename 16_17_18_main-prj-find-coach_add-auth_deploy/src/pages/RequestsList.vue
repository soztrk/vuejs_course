<template>
    <section>
        <Card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <Spinner v-if="isLoading" />
            <ul v-else-if="!isLoading && hasRequests">
                <RequestItem 
                v-for="request in recivedRequests"
                :key="request.id"
                :email="request.email"
                :message="request.message"
                />
            </ul>
            <h3 v-else-if="error === null">You haven't received any requests yet!</h3>
        </Card>
        <Dialog :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{error}}</p>
        </Dialog>
    </section>
</template>

<script>
import RequestItem from '../components/requests/RequestItem';

export default{
    data(){
        return{
            isLoading:false,
            error:null
        }
    },
    components:{
        RequestItem
    },
    computed:{
        recivedRequests(){
            
            return this.$store.getters["requests/requestsList"]
        },
        hasRequests(){
            return this.$store.getters["requests/hasRequests"]
        }
    },
    methods:{
        async loadRequests(){
            this.isLoading = true
            try{
                await this.$store.dispatch("requests/fetchRequests")
            }
            catch(error){
                this.error = error.message
            }
            this.isLoading = false
        },
        handleError(){
            this.error = false
        }
    },
    created(){
        this.loadRequests()
    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>