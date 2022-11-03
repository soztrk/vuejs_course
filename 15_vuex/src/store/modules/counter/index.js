const counterModule = {
    namespaced:true,
    state(){
        return{
            counter:0
        }
    },
    mutations:{
        increment(state){
            state.counter += 2
        },
        increase(state,payload){
            state.counter += payload
        }
    },
    getters:{
        finalCounter(state){
            return state.counter * 3
        },
        normalizedCounter(state,getters){
            const finalCounter = getters.finalCounter
            return finalCounter > 100 ? 100 : finalCounter
        }
    },
    actions:{
        increment(context){ // can take second argument payload like commit. 
            setTimeout(()=>{
              context.commit("increment")  
            },2000)
        }
    }
}

export default counterModule