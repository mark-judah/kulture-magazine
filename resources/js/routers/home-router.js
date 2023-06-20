import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home.vue'
import Magazines from '../pages/magazines.vue'
import Merchandise from '../pages/merchandise.vue'
import Blog from '../pages/blog.vue'
import Podcast from '../pages/podcast.vue'
import Contact from '../pages/contact.vue'
import Login from '../pages/login.vue'
import AdminHome from '../pages/admin-home.vue'


const routes = [
    {
        path:'/',
        redirect: { path: "/home" }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/magazines',
        name: 'Magazines',
        component: Magazines,
    },
    {
        path: '/merchandise',
        name: 'Merchandise',
        component: Merchandise,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        props:true
    },
    {
        path: '/podcast',
        name: 'Podcast',
        component: Podcast,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/admin-home',
        name: 'AdminHome',
        component: AdminHome,
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
