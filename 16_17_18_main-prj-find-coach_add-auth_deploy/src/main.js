import { createApp,defineAsyncComponent } from 'vue';

import App from "./app"
import router from "./router"
import store from "./store"

// Global Components
import Card from "./components/base/Card"
import Button from "./components/base/Button"
import Badge from "./components/base/Badge"
import Spinner from "./components/base/Spinner"
//import Dialog from "./components/base/Dialog"
const Dialog = defineAsyncComponent(()=>import("./components/base/Dialog"))

const app = createApp(App)

app.use(router)
app.use(store)

app.component("Card",Card)
app.component("Button",Button)
app.component("Badge",Badge)
app.component("Spinner",Spinner)
app.component("Dialog",Dialog)

app.mount('#app');
