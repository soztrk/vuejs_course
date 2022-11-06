<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid:firstName.isValid===false}">
            <label>Firstname</label>
            <input type="text" v-model.trim="firstName.val" @blur="clearValidity('firstName')" />
            <p v-if="firstName.isValid===false">Must be not empty!</p>
        </div>
        <div class="form-control" :class="{invalid:lastName.isValid===false}">
            <label>Lastname</label>
            <input type="text" v-model.trim="lastName.val" @blur="clearValidity('lastName')" />
            <p v-if="lastName.isValid===false">Must be not empty!</p>
        </div>
        <div class="form-control" :class="{invalid:description.isValid===false}">
            <label>Description</label>
            <textarea rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="description.isValid===false">Must be not empty!</p>
        </div>
        <div class="form-control" :class="{invalid:hourlyRate.isValid===false}">
            <label>Hourly Rate</label>
            <input type="number" v-model.number="hourlyRate.val" @blur="clearValidity('hourlyRate')" />
            <p v-if="hourlyRate.isValid===false">Must be not empty and bigger than 0!</p>
        </div>
        <div class="form-control" :class="{invalid:areas.isValid===false}">
            <h3>Areas of Expertise</h3>
            <label>
                <input type="checkbox" value="frontend" v-model="areas.val" @blur="clearValidity('areas')" />
                Frontend
            </label>
            <label>
                <input type="checkbox" value="backend" v-model="areas.val" @blur="clearValidity('areas')" />
                Backend
            </label>
            <label>
                <input type="checkbox" value="career" v-model="areas.val" @blur="clearValidity('areas')" />
                Career
            </label>
            <p v-if="areas.isValid===false">At least must be select one!</p>
        </div>
        <p v-if="isFormValid===false">Please fix the above errors and submit again!</p>
        <Button>Register</Button>
    </form>
</template>
<script>
export default{
    data(){
        return {
            firstName:{
              val:"",
              isValid:null
            },
            lastName:{
              val:"",
              isValid:null
            },
            description:{
              val:"",
              isValid:null
            },
            hourlyRate:{
              val:null,
              isValid:null
            },
            areas:{
              val:[],
              isValid:null
            }
        }
    },
    methods:{
        submitForm(){

          this.validateForm()
          if(!this.isFormValid) return

          const formData = {
              firstName:this.firstName.val,
              lastName:this.lastName.val,
              description:this.description.val,
              hourlyRate:this.hourlyRate.val,
              areas:this.areas.val
          }
          this.$emit("save-data",formData)
        },
        validateForm(){
          this.firstName.isValid = this.firstName.val === "" ? false : true
          this.lastName.isValid = this.lastName.val === "" ? false : true
          this.description.isValid = this.description.val === "" ? false : true
          this.hourlyRate.isValid = this.hourlyRate.val > 0 ? true : false
          this.areas.isValid = this.areas.val.length > 0 ? true : false
        },
        clearValidity(input){
          this[input].isValid = null
        }
    },
    computed:{
      isFormValid(){
        let valid = true
        for(const field in this.$data){
          if(this.$data[field].isValid === false) valid = false
          else if(this.$data[field].isValid === null) valid = null
        }
        return valid
      }
    },
    emits:["save-data"]
}
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

.form-control p {
  color:red;
  font-size: 11px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
button{
    margin-top:10px;
}
</style>