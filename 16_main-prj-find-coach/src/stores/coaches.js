const coachesModule = {
    namespaced:true,
    state(){
        return{
          lastFetch:null,
          coaches:[
              {
                id: 'c1',
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description:
                  "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
              },
              {
                id: 'c2',
                firstName: 'Julie',
                lastName: 'Jones',
                areas: ['frontend', 'career'],
                description:
                  'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
              }
            ]
        }
    },
    getters:{
        coachesList(state){
            return state.coaches
        },
        isCoach(state,getters,rootState,rootGetters){
          const coaches = getters.coachesList
          const userId = rootGetters.userId
          return coaches.some(coach=>coach.id === userId)
        },
        shouldFetchList(state){
          const lastFetch = state.lastFetch
          if(!lastFetch) return true
          const currentTimeStamp = new Date().getTime()
          return (currentTimeStamp - lastFetch) / 1000 > 10
        }
    },
    mutations:{
      registerCoach(state,payload){
        state.coaches.push(payload)
      },
      setCoaches(state,payload){
        state.coaches = payload
      },
      setFetchTimestamp(state){
        state.lastFetch = new Date().getTime()
      }
    },
    actions:{
      async registerCoach(context,data){
        const userId = context.rootGetters.userId
        data.id = userId

        const response = await fetch(`https://vue-coursee-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,{
          method:"PUT",
          body:JSON.stringify(data)
        })

        //const responseData = await response.json()

        if(!response.ok) return

        context.commit("registerCoach",data)
      },
      async loadCoaches(context,immediate = false){

        if(!context.getters.shouldFetchList && !immediate) return

        const response = await fetch(`https://vue-coursee-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`)

        const responseData = await response.json()

        if(!response.ok) {
          const error = new Error(responseData.message)
          throw error
        }

        const coaches = []
        for(const key in responseData){
          coaches.push({
            id:key,
            firstName:responseData[key].firstName,
            lastName:responseData[key].lastName,
            description:responseData[key].description,
            hourlyRate:responseData[key].hourlyRate,
            areas:responseData[key].areas
          })
        }

        context.commit("setCoaches",coaches)
        context.commit("setFetchTimestamp")
      }
    }
}
export default coachesModule