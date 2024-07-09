import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import TagsInput from './components/TagsInput.vue'
// const app = createApp(App).mount('#app')
const app = createApp(App)
app.component('tags-input', TagsInput) // register component globally
app.mount('#app')