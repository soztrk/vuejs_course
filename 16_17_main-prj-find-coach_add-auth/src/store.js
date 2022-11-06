import {createStore} from "vuex"

//modules
import coachesModule from "./stores/coaches"
import requestsModule from "./stores/requests"
import authModule from "./stores/auth"

const store = createStore({
    modules:{
        coaches:coachesModule,
        requests:requestsModule,
        auth:authModule
    }
})

export default store