// Vanilla Js version

/* const buttonEl = document.querySelector("button")
const inputEl = document.querySelector("input")
const listEl = document.querySelector("ul")

function addGoal(){
    const enteredValue = inputEl.value
    if(enteredValue == "") return
    const listItemEl = document.createElement("li")
    listItemEl.textContent = enteredValue
    listEl.appendChild(listItemEl)
    inputEl.value = ""
}

buttonEl.addEventListener("click",addGoal) */

// Vue Version

Vue.createApp({
    /* data:function(){}, */
    data(){
        return {
            goals:[],
            enteredValue:""
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue)
            this.enteredValue = ""
        }
    }
}).mount("#app")