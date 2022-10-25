const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:""
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = this.lastname = ""
    }
  },
  computed:{
    fullname(){
      if(this.name === "" || this.lastname === "") return ""
      return this.name+" "+this.lastname
    }
  },
  watch:{
    counter(value){
      if(value > 50){
        setTimeout(() => {
          this.counter = 0
        }, 1000)
      }
    }
  }
});

app.mount('#events');
