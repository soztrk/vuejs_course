let timer

const AuthModule = {
    namespaced:true,
    state(){
        return{
            userId:null,
            token:null,
            didAutoLogout:false
        }
    },
    getters:{
        userId(state){
            return state.userId
        },
        token(state){
            return state.token
        },
        isAuth(state){
            return !!state.token
        },
        didAutoLogout(state){
            return state.didAutoLogout
        }
    },
    mutations:{
        setUser(state,payload){
            state.userId = payload.userId
            state.token = payload.token
            state.didAutoLogout = false
        },
        setAutoLogout(state){
            state.didAutoLogout = true
        }
    },
    actions:{
        async login(context,payload){
            payload.mode = "login"
            return context.dispatch("auth",payload)
        },
        async signup(context,payload){
            payload.mode = "signup"
            return context.dispatch("auth",payload)
        },
        async auth(context,payload){

            const mode = payload.mode
            delete payload.mode
            payload.returnSecureToken = true

            let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPf0K8BbCn9GcXYNA5EswqDnSDiJ3A0r4`
            if(mode === "signup" ) url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPf0K8BbCn9GcXYNA5EswqDnSDiJ3A0r4`

            const response = await fetch(url,{
                method:"POST",
                body:JSON.stringify(payload)
            })

            const responseData = await response.json()

            if(!response.ok) {
                const error = new Error(responseData.message || responseData.error.message )
                throw error
            }

            const expiresIn = Number(responseData.expiresIn * 1000)
            const expirationDate = new Date().getTime()+expiresIn
            
            localStorage.setItem('token',responseData.idToken)
            localStorage.setItem('userId',responseData.localId)
            localStorage.setItem("tokenExp",expirationDate)

            timer = setTimeout(()=>{
                context.dispatch("autoLogout")
            },expiresIn)

            context.commit("setUser",{
                userId:responseData.localId,
                token:responseData.idToken,
            })

        },
        logout(context){
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("tokenExp")

            clearTimeout(timer)

            context.commit("setUser",{
                userId:null,
                token:null
            })
        },
        autoLogin(context){
            const token = localStorage.getItem("token")
            const userId = localStorage.getItem("userId")
            const tokenExp = Number(localStorage.getItem("tokenExp"))

            const expiresIn = tokenExp - new Date().getTime()

            if(expiresIn < 0) return
            
            timer = setTimeout(()=>{
                context.dispatch("autoLogout")
            },expiresIn)

            if(token && userId) context.commit("setUser",{token,userId})
        },
        autoLogout(context){
            context.dispatch("logout")
            context.commit("setAutoLogout")
        }
    }
}
export default AuthModule