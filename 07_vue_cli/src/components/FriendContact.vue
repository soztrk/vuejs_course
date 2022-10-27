<template>
  <li>
      <h2>{{name}}</h2>
      <button @click="toggleDetails">{{!detailsVisible ? 'Show' : 'Hide'}} Details</button>
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
            detailsVisible:false
        }
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible
        }
    },
    props:["name","phone","email"]
}
</script>

