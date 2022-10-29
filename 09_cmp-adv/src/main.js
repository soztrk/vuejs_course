import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);
// Global Components
app.component('base-badge', BaseBadge);
app.component("BaseCard",BaseCard);
// App mount
app.mount('#app');
