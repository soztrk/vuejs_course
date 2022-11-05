<template>
    <form @submit.prevent="sendForm" novalidate>
        <div class="form-control">
            <label>Email</label>
            <input type="email" v-model.trim="email" />
        </div>
        <div class="form-control">
            <label>Message</label>
            <textarea rows="5" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="isFormValid===false">
            Please enter a valid email and message
        </p>
        <div class="actions">
            <Button>Send Message</Button>
        </div>
    </form>
</template>
<script>
export default{
    data(){
        return{
            email:"",
            message:"",
            isFormValid:null
        }
    },
    methods:{
        async sendForm(){
            if(!this.email.includes("@") || this.message === "") {
                this.isFormValid = false 
                return
            }
            else this.isFormValid = true
            
            try{
              await this.$store.dispatch("requests/contactCoach",{
                  email:this.email,
                  message:this.message,
                  coachId: this.$route.params.id
              })
            }
            catch(error){
              alert(error)
              return
            }

            this.$router.replace("/coaches")
        }
    }
}
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
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
  text-align: center;
}
</style>