const app = Vue.createApp({
  data() {
    return {
      counter: 3,
      name:"",
      name2:"",
      lastName:"",
      nameAndLastname:"",
      signName:""
    };
  },
  methods: {
    increase(num){
      this.counter += num
    },
    decrease(num){
      this.counter -= num
    },
    setName(event){
      this.name = event.target.value
    },
    setNameAndLastname(event,lastName){
      this.name2 = event.target.value
      this.lastName = lastName
    },
    confirmName(){
      this.nameAndLastname = this.name2+" "+this.lastName
    },
    submitForm(){
      //event.preventDefault()
      alert("submitted = "+this.signName)
    },
    setSignName(event){
      this.signName = event.target.value
    }
  },
});

app.mount('#events');
