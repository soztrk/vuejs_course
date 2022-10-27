const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:"manu",
                    name:"Manuel Lorenzo",
                    phone:556565,
                    email:"manu@el.com"
                },
                {
                    id:"jul",
                    name:"Juli Jones",
                    phone:154588,
                    email:"juli@li.com"
                }
            ]
        }
    }
})

app.component("friend-contact",{
    data(){
        return{
            detailsVisible:false
        }
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible
        }
    },
    props:["name","phone","email"],
    template:`
    <li>
        <h2>{{name}}</h2>
        <button @click="toggleDetails">{{!detailsVisible ? 'Show' : 'Hide'}} Details</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{phone}}</li>
            <li><strong>Email:</strong> {{email}}</li>
        </ul>
    </li>
    `
})

app.mount("#app")