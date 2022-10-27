const app = Vue.createApp({
  data() {
    return {
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userInput.value
    },
  },
  beforeCreate(){
    console.log("before create")
  },
  created(){
    console.log("created")
  },
  beforeMount(){
    console.log("before mount")
  },
  mounted(){
    console.log("mounted")
  },
  beforeUpdate(){
    console.log("before update")
  },
  updated(){
    console.log("updated")
  },
  beforeUnmount() {
    console.log("before unmount")
  },
  unmounted(){
    console.log("unmounted")
  }
});

app.mount('#app');

setTimeout(()=>{
  app.unmount()
},5000)

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: 'Döner',
    };
  },
});

app2.mount('#app2');

const app3 = Vue.createApp({
  template:`
    <h2>How Vue Works 3</h2>
    <p>{{ favoriteDrink }}</p>
  `,
  data() {
    return {
      favoriteDrink: 'Ayran',
    };
  },
});

app3.mount('#app3');

// Vue reactivity under the hood

const data = {
  message:"Hello",
  longMessage:"Hello World"
}

const handler = {
  set(target,key,value){
    if(key==="message"){
      target.longMessage = value + " World"
    }
    target.message = value
  }
}

const proxy = new Proxy(data,handler)

proxy.message = "Hello !!!"

console.warn(proxy.longMessage)