import { createApp } from 'vue';
import App from "./App.vue"
import TheHeader from "./components/Ui/TheHeader"
import BaseCard from "./components/Ui/BaseCard"
import BaseButton from "./components/Ui/BaseButton"
import BaseDialog from "./components/Ui/BaseDialog"

const app = createApp(App)
app.component("TheHeader",TheHeader)
app.component("BaseCard",BaseCard)
app.component("BaseButton",BaseButton)
app.component("BaseDialog",BaseDialog)
app.mount('#app')

