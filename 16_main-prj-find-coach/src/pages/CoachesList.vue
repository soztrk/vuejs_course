<template>
    <div>
      <section>
        <CoachFilter @change-filter="setFilter" />
      </section>
      <section>
          <Card>
              <div class="controls">
                  <Button @click="loadCoaches(true)" mode="outline">Refresh</Button>
                  <Button v-if="!isCoach && !isLoading" link to="/register">Register as Coacth</Button>
              </div>
              <div v-if="isLoading">
                <Spinner />
              </div>
              <ul v-else-if="hasCoaches">
                  <coach-item 
                  v-for="coach in filteredCoaches" 
                  :key="coach.id"
                  :id="coach.id"
                  :first-name="coach.firstName"
                  :last-name="coach.lastName"
                  :expertises="coach.areas"
                  :rate="coach.hourlyRate"
                  />
              </ul>
              <h3 v-else>No coaches for you</h3>
          </Card>
      </section>
      <Dialog :show="!!error" title="An error occurred!" @close="handleError"> <!-- !!error : converts string to true -->
        <p>{{error}}</p>
      </Dialog>
    </div>
</template>
<script>
import CoachItem from '../components/coaches/CoachItem'
import CoachFilter from '../components/coaches/CoachFilter'

export default{
    components:{
        CoachItem,
        CoachFilter
    },
    data(){
        return{
            isLoading:false,
            error:null,
            activeFilters:{
              frontend:true,
              backend:true,
              career:true
            }
        }
    },
    methods:{
      setFilter(updatedFilters){
        this.activeFilters = updatedFilters
      },
      async loadCoaches(immediate = false){
        this.isLoading = true
        try{
          await this.$store.dispatch("coaches/loadCoaches",immediate)
        }
        catch(error){
          this.error = error.message
        }
        this.isLoading = false
      },
      handleError(){
        this.error = null
      }
    },
    computed:{
      filteredCoaches(){
        const coaches = this.$store.getters['coaches/coachesList']
        return coaches.filter(coach=>{
          if(this.activeFilters.frontend && coach.areas.includes("frontend")) return true
          if(this.activeFilters.backend && coach.areas.includes("backend")) return true
          if(this.activeFilters.career && coach.areas.includes("career")) return true
          return false
        })
      },
      isCoach(){
        return this.$store.getters["coaches/isCoach"]
      },
      hasCoaches(){
        return !this.isLoading && this.filteredCoaches.length > 0
      }
    },
    created(){
      this.loadCoaches()
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>