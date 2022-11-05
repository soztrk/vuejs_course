import {createStore} from "vuex"

//modules
import coachesModule from "./stores/coaches"
import requestsModule from "./stores/requests"

const store = createStore({
    modules:{
        coaches:coachesModule,
        requests:requestsModule
    },
    state(){
        return{
            userId:"c3"
        }
    },
    getters:{
        userId(state){
            return state.userId
        }
    }
})

export default store