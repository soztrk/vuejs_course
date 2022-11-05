import {createRouter,createWebHistory} from "vue-router"

//pages
import CoachesList from "./pages/CoachesList"
import CoachDetail from "./pages/CoachDetail"
import CoachContactForm from "./pages/CoachContactForm"
import CoachRegister from "./pages/CoachRegister"
import RequestsList from "./pages/RequestsList"
import NotFound from "./pages/NotFound"

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
            component:CoachRegister
        },
        {
            name:"requestsList",
            path:"/requests",
            component:RequestsList
        },
        {
            name:"notFound",
            path:"/:notFound(.*)",
            component:NotFound
        }
    ]
})

export default router