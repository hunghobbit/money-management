import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../configs/firebase.js';
const user = auth.currentUser;
const requiredAuth = (to, from, next) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //     next();
    // } else {
    //     next({ name: 'login' });
    
    if(user) console.log('Before Enter: ', user);
    next();
}

const routes = [
    {
        path: '/',
        name: 'home',

        component: () => import('../src/pages/Dashboard.vue'),
        meta: {
            // requiredAuth: true,
            title: 'Dashboard',
            headingDescription: 'Dashboard',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../src/pages/Welcome.vue'),
        meta: {
            // requiredAuth: false,
            title: 'Welcome',
            headingDescription: 'Welcome',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/wallets',
        component: () => import('../src/pages/Wallets.vue'),
        name: 'wallets',
        meta: {
            // requiredAuth: true,
            title: 'Wallets',
            headingDescription: 'Wallets',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/transactions',
        component: () => import('../src/pages/Transactions.vue'),
        name: 'transactions',
        meta: {
            // requiredAuth: true,
            title: 'Transactions',
            headingDescription: 'All Transactions',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/categories',
        component: () => import('../src/pages/Categories.vue'),
        name: 'categories',
        meta: {
            // requiredAuth: true,
            title: 'Categories',
            headingDescription: 'Categories',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/contacts',
        component: () => import('../src/pages/Contacts.vue'),
        name: 'contacts',
        meta: {
            // requiredAuth: true,
            title: 'Contacts',
            headingDescription: 'Contacts',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/profile',
        component: () => import('../src/pages/Profile.vue'),
        name: 'profile',
        children: [
            {
                path: 'edit',
                component: () => import('../src/pages/profiles/ProfilesEdit.vue'),
                name: 'profile-edit'
            },
            {
                path: 'change-password',
                component: () => import('../src/pages/profiles/ProfilesResetPassword.vue'),
                name: 'profile-change-password',
            },
            {
                path: 'verify-email',
                component: () => import('../src/pages/profiles/ProfilesEmailVerify.vue'),
                name: 'profile-verify-email'
            },
            {
                path: 'delete',
                component: () => import('../src/pages/profiles/ProfileDelete.vue'),
                name: 'profile-delete'
            }
        ],
        meta: {
            requiredAuth: true,
            title: 'Profile',
            headingDescription: 'Profile',
        },
        beforeEnter: requiredAuth
    },
    {
        path: '/login',
        component: () => import('../src/pages/auth/Login.vue'),
        name: 'login',
        meta: {
            layout: 'authentication'
        }
    },
    {
        path: '/logout',
        component: () => import('../src/pages/auth/Logout.vue'),
        name: 'logout',
        meta: {
            layout: 'authentication'
        },
    },
    {
        path: '/register',
        component: () => import('../src/pages/auth/Register.vue'),
        name: 'register',
        meta: {
            layout: 'authentication'
        }
    },
    {
        path: '/forgot-password',
        component: () => import('../src/pages/auth/ForgotPassword.vue'),
        name: 'forgot-password',
        meta: {
            layout: 'authentication'
        }
    },
    {
        path: '/reset-password',
        component: () => import('../src/pages/auth/ResetPassword.vue'),
        name: 'reset-password',
        meta: {
            layout: 'authentication'
        }
    },
    {
        path: '/verify-email',
        component: () => import('../src/pages/auth/VerifyEmail.vue'),
        name: 'verify-email',
        meta: {
            layout: 'authentication'
        }
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
