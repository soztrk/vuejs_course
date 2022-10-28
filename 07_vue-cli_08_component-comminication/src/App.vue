<template>
  <header>
    <h1>Friend List</h1>
  </header>
  <section id="app">
    <NewFriend 
    @add-friend="addFriend"
    />
    <ul>
      <FriendContact 
        v-for="friend in friends" 
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :is-favorite="friend.favorite"
        @toggle-favorite="toggleFavorite"
        @remove-contact="removeContact"
      />
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'

export default {
  name: 'App',
  data(){
        return{
            friends:[
                {
                    id:"manu",
                    name:"Manuel Lorenzo",
                    phone:5555546,
                    email:"manu@el.com",
                    favorite:false
                },
                {
                    id:"jul",
                    name:"Juli Jones",
                    phone:154588,
                    email:"juli@li.com",
                    favorite:true
                }
            ]
        }
    },
  methods:{
    toggleFavorite(id){
      let found = this.friends.find(friend=>id===friend.id)
      found.favorite = !found.favorite
    },
    addFriend(data){
      const formData = data()
      if(formData){
        this.friends.push(formData)
      }
    },
    removeContact(id){
      this.friends = [...this.friends.filter(friend=>friend.id!==id)]
    }
  },
  components: {
    FriendContact,
    NewFriend
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    #app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
    }

    #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }
</style>