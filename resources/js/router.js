import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/PostFeed/Index'),
            name: 'post.index'
        },
        // Auth
        {
            path: '/sign-up',
            component: () => import('./components/Auth/SignUp'),
            name: 'auth.sign_up'
        },
        {
            path: '/sign-in',
            component: () => import('./components/Auth/SignIn'),
            name: 'auth.sign_in'
        },
    ]
})

