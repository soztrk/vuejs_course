import {createRouter,createWebHistory} from "vue-router"

//dependencies
import store from "./store"

//pages
import CoachesList from "./pages/CoachesList"
import NotFound from "./pages/NotFound"

/* import CoachDetail from "./pages/CoachDetail"
import CoachContactForm from "./pages/CoachContactForm"
import CoachRegister from "./pages/CoachRegister"
import RequestsList from "./pages/RequestsList"
import UserAuth from "./pages/UserAuth" */

/* Async Components no need to defineAsyncComponent in routing */
const CoachDetail = ()=>import("./pages/CoachDetail")
const CoachContactForm = ()=>import("./pages/CoachContactForm")
const CoachRegister = ()=>import("./pages/CoachRegister")
const RequestsList = ()=>import("./pages/RequestsList")
const UserAuth = ()=>import("./pages/UserAuth")

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:"homePage",
            path:"/",
            redirect:{name:"coachesList"}
        },
        {
            name:"coachesList",
            path:"/coaches",
            component:CoachesList
        },
        {
            name:"coachDetail",
            path:"/coach/:id",
            props:true,
            component:CoachDetail, 
            children:[
                {
                    name:"coachContact",
                    path:"contact",
                    component:CoachContactForm
                }
            ]
        },
        {
            name:"coachRegister",
            path:"/register",
            meta:{requiresAuth:true},
            component:CoachRegister
        },
        {
            name:"requestsList",
            path:"/requests",
            meta:{requiresAuth:true},
            component:RequestsList
        },
        {
            name:"userAuth",
            path:"/auth",
            meta:{requiresUnauth:true},
            component:UserAuth
        },
        {
            name:"notFound",
            path:"/:notFound(.*)",
            component:NotFound
        }
    ]
})

// Nav Guard
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth && !store.getters["auth/isAuth"]){
        next("/auth")
    }   
    else if(to.meta.requiresUnauth && store.getters["auth/isAuth"]){
        next("/")
    }
    else{
        next()
    }
})

export default router