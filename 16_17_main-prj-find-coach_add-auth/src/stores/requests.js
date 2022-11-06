const requestsModule = {
    namespaced:true,
    state(){
        return{
            requests:[]
        }
    },
    getters:{
        requestsList(state,getters,rootState,rootGetters){
            const coachId = rootGetters["auth/userId"]
            return state.requests.filter(req=>req.coachId===coachId)
        },
        hasRequests(state){
            return state.requests.length > 0
        }
    },
    mutations:{
        addRequest(state,payload){
            state.requests.push(payload)
        },
        setRequests(state,payload){
            state.requests = payload
        }
    },
    actions:{
        async contactCoach(context,payload){

            // Not working 
            /* fetch(`https://vue-coursee-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,{
                method:"POST",
                body:JSON.stringify(payload)
            }).then(response=>{
                if(!response.ok){
                    const error = new Error(response.message)
                    throw error
                }
                return response.json()
            }).then(response=>{
                payload.id = response.name
            }) */

            let NewContact = {...payload}
            delete NewContact.coachId

            const response  = await fetch(`https://vue-coursee-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,{
                method:"POST",
                body:JSON.stringify(NewContact)
            })

            const responseData = await response.json()

            if(!response.ok) {
                const error = new Error(responseData.message)
                throw error
            }

            payload.id = responseData.name

            context.commit("addRequest",payload)
        },
        async fetchRequests(context){
            const coachId = context.rootGetters["auth/userId"]
            const token = context.rootGetters["auth/token"]

            const response  = await fetch(`https://vue-coursee-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`)
            const responseData = await response.json()

            if(!response.ok) {
                const error = new Error(responseData.error)
                throw error
            }

            let requests = []
            for(const key in responseData){
                requests.push({
                    id:key,
                    coachId:coachId,
                    email:responseData[key].email,
                    message:responseData[key].message
                })
            }

            context.commit("setRequests",requests)

        }
    }
}
export default requestsModule