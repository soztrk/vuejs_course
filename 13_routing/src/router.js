import {createRouter,createWebHistory} from "vue-router"

import TeamsList from "./pages/TeamsList"
import UsersList from "./pages/UsersList"
import TeamMembers from "./components/teams/TeamMembers"
import NotFound from "./pages/NotFound"
import TeamsFooter from "./pages/TeamsFooter"
import UsersFooter from "./pages/UsersFooter"

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            redirect:"/teams"
        },
        {   
            name:"teams",
            path:"/teams",
            components:{
                default:TeamsList,
                footer:TeamsFooter
            },
            children:[
                {
                    name:"team-members",
                    path:":id",
                    component:TeamMembers,props:true
                }
            ]
        }, // alias:"/" will load compnent but not redirect
        {
            path:"/users",
            meta:{needsAuth:true},
            components:{
                default:UsersList,
                footer:UsersFooter
            },beforeEnter(to,from,next){
                console.log("in main.js, router")
                console.log(to,from)
                next()
            }
        },
        //{path:"/teams/:id",component:TeamMembers},
        {
            path:"/:notFound(.*)",
            component:NotFound
        }
    ],
    linkActiveClass:"nav-active",
    linkExactActiveClass:"nav-exact-active",
    scrollBehavior(to,form,savedPosition){
        if(savedPosition) return savedPosition
        else return {left:0,top:0}
    }
})

// Navigation Guards
router.beforeEach((to,from,next)=>{
    /*
    if(to.name === "team-members") next()
    else if(to.path === "/users") next({name:"team-members",params:{id:"t3"}})
    else next(false)
    */
   if(to.meta.needsAuth){
    alert("Authentication needed!")
    next(false)
   }
   else next()
})

router.afterEach((to,from)=>{
    console.log("Global After Each")
    console.log(to,from)
})

export default router