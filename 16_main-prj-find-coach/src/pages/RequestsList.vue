<template>
    <section>
        <Card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <Spinner v-if="isLoading" />
            <div class="error-box" v-else-if="!isLoading && error">{{error}}</div>
            <ul v-else-if="!isLoading && hasRequests">
                <RequestItem 
                v-for="request in recivedRequests"
                :key="request.id"
                :email="request.email"
                :message="request.message"
                />
            </ul>
            <h3 v-else>You haven't received any requests yet!</h3>
        </Card>
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
.error-box{
    padding:10px;
    border:1px solid salmon;
    border-radius: 8px;
    color:red;
}
</style>