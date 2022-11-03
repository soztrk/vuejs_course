export default {
    userLogin(context){
        setTimeout(()=>{
          context.commit("setLogState",true)  
        },2000)
    },
    userLogout(context){
        setTimeout(()=>{
            context.commit("setLogState",false)  
          },1000)
    }
}