import { createApp } from "vue";
import Base from './base.vue'
import AdminBase from './admin-base.vue'

import home_router from "./routers/home-router";
import admin_router from "./routers/admin-router";

let auth=true;

if (auth){
    createApp(AdminBase).use(admin_router).mount("#app")
}else{
    createApp(Base).use(home_router).mount("#app")
}
