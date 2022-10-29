<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoals #default="slotProps">
      <!-- <template #default="slotProps"> -->
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps.anotherProp}}</p>
      <!-- </template> -->
    </CourseGoals>
    <div>
      <h3>Dynamic Components</h3>
      <button @click="setActiveComponent('ActiveGoals')">Active Goals</button>
      <button @click="setActiveComponent('ManageGoals')">Manage Goals</button>
    </div>
    <KeepAlive>
      <component :is="activeComponent"></component>
    </KeepAlive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from "./components/ActiveGoals.vue"
import ManageGoals from "./components/ManageGoals.vue"

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      activeComponent:null
    };
  },
  methods:{
   setActiveComponent(componentName){
    this.activeComponent = componentName
   } 
  },
  components:{
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>