<!-- Stackoverflow  Answer -->

<!-- Parent Component -->

<template>
    <div ref="myRef"></div>
  </template>
  
<script>
  export default {
    name: 'SearchContainer',
    methods:{
        getMyRef(){
            return this.$refs.myRef
        }
    },
    provide() {
      return{
        parentRef: this.getMyRef
    }
    }
  }
</script>


<!-- Child Component -->

<template>
    <div></div>
</template>

<script>
  export default {
    name: 'SearchContainer',
    methods:{
        useRef(){
            this.parentRef().data // Can access data properties
            this.parentRef().method() // can access methods
        }
    }
    inject: ['parentRef']
  }
</script>