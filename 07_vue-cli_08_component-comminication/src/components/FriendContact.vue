<template>
  <li>
      <h2>{{name}} {{isFavorite ? "(Favorite)" : ""}}</h2>
      <button @click="toggleDetails">{{!detailsVisible ? 'Show' : 'Hide'}} Details</button>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <button @click="this.$emit('remove-contact',this.id)">Remove Contact</button>
      <ul v-if="detailsVisible">
          <li><strong>Phone:</strong> {{phone}}</li>
          <li><strong>Email:</strong> {{email}}</li>
      </ul>
  </li>
</template>

<script>
export default {
  name: 'FriendContact',
  data(){
        return{
            detailsVisible:false,
        }
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible
        },
        toggleFavorite(){
            this.$emit("toggle-favorite",this.id)
        },
        /* removeContact(){
            this.$emit("remove-contact",this.id)
        } */
    },
    //props:["name","phone","email","isFavorite"]
    /* props:{
        name:String,
        phone:Number,
        email:String,
        isFavorite:Boolean
    } */
    props:{
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        isFavorite:{
            type:Boolean,
            required:false,
            default:false,
            validator:(value)=>{return value === true || value === false}
        }
    },
    //emits:["toggle-favorite"],
    emits:{
        "toggle-favorite":(id)=>{
            if(!id) {
                console.warn("Id is missing!")
                return false
            }
            else return true
        },
        "remove-contact":(id)=>{
            if(!id) {
                console.warn("Id is missing!")
                return false
            }
            else return true
        }
    }
}
</script>

