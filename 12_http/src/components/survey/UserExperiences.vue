<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{error}}</p>
      <p v-else-if="results.length === 0">There are no experiences!</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //props: ['results'],
  data(){
    return{
      results:[],
      isLoading:false,
      error:null
    }
  },
  methods:{
    loadExperiences(){
      this.isLoading = true
      this.error = null
      fetch("https://vue-coursee-default-rtdb.europe-west1.firebasedatabase.app/survey.json")
      .then((response)=>{
        if(response.ok){
          return response.json()
        }
      }).then((data)=>{
        const results = []
        for(const id in data){
          results.push({id:id,name:data[id].name,rating:data[id].rating})
        }
        this.results = results
        this.isLoading = false
      }).catch((error)=>{
        this.error = error
        this.isLoading = false
      })
    }
  },
  components: {
    SurveyResult,
  },
  mounted(){
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>