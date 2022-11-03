import {createStore} from "vuex"

import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import counterModule from "./modules/counter"

const store = createStore({
    modules:{
        counter:counterModule
    },
    state(){
        return{
            isLoggedIn:false
        }
    },
    mutations:mutations,
    getters:getters,
    actions:actions
})

export default store