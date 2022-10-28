<template>
    <section id="new-friend-form" @submit.prevent="addFriend">
        <h2>Add New Friend</h2>
        <form>
            <input v-model="name" type="text" placeholder="Name" />
            <input v-model="phone" type="number" placeholder="Phone" />
            <input v-model="email" type="text" placeholder="Email" />
            <label>
                <input v-model="isFavorite" type="checkbox" />
                Is Favorite
            </label>
            <button>Submit</button>
        </form>
    </section>
</template>
<script>
export default{
    name:"NewFriend",
    data(){
        return {
            id:"",
            name:"",
            phone:null,
            email:"",
            isFavorite:false
        }
    },
    methods:{
        addFriend(){
            this.$emit("add-friend",()=>{
               if(this.name === "" || this.phone === null || this.email === "") return alert("No empty fields allowed!")
               const formData = {
                id:this.id = this.name.replace(/\s/,"-").toLocaleLowerCase()+"-"+Math.round(Math.random()*100),
                name:this.name,
                phone:this.phone,
                email:this.email,
                favorite:this.isFavorite
               }
               this.id = this.name = this.email = ""
               this.phone = null
               this.isFavorite = false
               return formData
            })
        }
    },
    emits:["add-friend"]
}
</script>
<style scoped>
    #new-friend-form{
        margin: 20px auto;
        box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
        margin: 1rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 20rem;
    }
    input{
        display: block;
        padding:10px;
        margin-bottom:10px;
        width: 100%;
    }
    label{
        display: block;
        width: 100%;
        text-align: left;
    }
    label input{
        display: inline-block;
        width: auto;
    }
    button{
        margin-top: 10px;
    }
</style>