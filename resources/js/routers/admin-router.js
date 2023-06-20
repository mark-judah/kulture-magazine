import { createRouter, createWebHistory } from 'vue-router'

import AdminHome from '../pages/admin-home.vue'
import AdminListPosts from '../pages/admin-posts.vue'
import AdminNewPost from '../pages/admin-new-post.vue'


const routes = [
    {
        path:'/',
        redirect: { path: "/admin-home" }
    },

    {
        path: '/admin-home',
        name: 'AdminHome',
        component: AdminHome,
    },
    {
        path: '/admin-list-posts',
        name: 'AdminListPosts',
        component: AdminListPosts,
    },
    {
        path: '/admin-new-post',
        name: 'AdminNewPost',
        component: AdminNewPost,
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
