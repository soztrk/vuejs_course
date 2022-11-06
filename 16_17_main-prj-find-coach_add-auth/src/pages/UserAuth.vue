<template>
    <Card>
        <form @submit.prevent="submitForm" novalidate>
            <div class="form-control">
                <label>Email</label>
                <input type="email" ref="emailInput" />
            </div>
            <div class="form-control">
                <label>Password</label>
                <input type="password" ref="passwordInput" />
            </div>
            <div class="actions">
                <Button :disabled="isLoading">{{submitButtonCaption}}</Button>
                <Button :disabled="isLoading" type="button" mode="flat" @click="switchMode">Switch to {{switchButtonCaption}}</Button>
            </div>
            <p class="errors" v-if="error"> - {{error}}</p>
        </form>
    </Card>
</template>

<script>
export default{
    data(){
        return{
            mode:"login",
            error:null,
            isLoading:false
        }
    },
    methods:{
        async submitForm(){
            this.error = null
            const email = this.$refs.emailInput.value.trim()
            const password = this.$refs.passwordInput.value.trim()

            if(!email.includes("@") || password === ""){
                this.error = "Please insert vaild email and password!"
                return
            }

            this.isLoading = true
            try{
                if(this.mode === "login"){
                    await this.$store.dispatch("auth/login",{email,password})
                }
                else{
                    await this.$store.dispatch("auth/signup",{email,password})
                    this.$refs.emailInput.value = this.$refs.passwordInput.value = ""
                    this.mode = "login"
                }
                const redirectUrl = this.$route.query.redirect || ""
                this.$router.replace(`/${redirectUrl}`) 
            }
            catch(error){
                this.error = error.message
            }
            this.isLoading = false

        },
        switchMode(){
            this.mode = this.mode === "login" ? "signup" : "login"
        }
    },
    computed:{
        submitButtonCaption(){
            return this.mode === "login" ?  "Login" : "Signup"
        },
        switchButtonCaption(){
            return this.mode === "login" ? "Signup" : "Login"
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
    margin-top:10px;
}
</style>