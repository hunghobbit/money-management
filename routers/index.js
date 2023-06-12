import { createRouter, createWebHistory } from 'vue-router'
// import { use } from '../composables/useSignOut.js';
const routes = [
    {
        path: '/',
        name: 'home',

        component: () => import('../src/pages/Dashboard.vue'),
        meta: {
            requiredAuth: true,
            title: 'Dashboard',
            headingDescription: 'Dashboard',
        }
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../src/pages/Welcome.vue'),
        meta: {
            requiredAuth: false,
            title: 'Welcome',
            headingDescription: 'Welcome',
        }
    },
    {
        path: '/wallets',
        component: () => import('../src/pages/Wallets.vue'),
        name: 'wallets',
        meta: {
            requiredAuth: true,
            title: 'Wallets',
            headingDescription: 'Wallets',
        }
    },
    {
        path: '/transactions',
        component: () => import('../src/pages/Transactions.vue'),
        name: 'transactions',
        meta: {
            requiredAuth: true,
            title: 'Transactions',
            headingDescription: 'All Transactions',
        }
    },
    {
        path: '/categories',
        component: () => import('../src/pages/Categories.vue'),
        name: 'categories',
        meta: {
            requiredAuth: true,
            title: 'Categories',
            headingDescription: 'Categories',
        }
    },
    {
        path: '/contacts',
        component: () => import('../src/pages/Contacts.vue'),
        name: 'contacts',
        meta: {
            requiredAuth: true,
            title: 'Contacts',
            headingDescription: 'Contacts',
        }
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
                path: 'logout',
                component: () => import('../src/pages/profiles/ProfilesLogout.vue'),
                name: 'profile-logout'
            }
        ],
        meta: {
            requiredAuth: true,
            title: 'Profile',
            headingDescription: 'Profile',
        }
    },
    {
        path: '/login',
        component: () => import('../src/pages/auth/Login.vue'),
        name: 'login',
        meta: {
            layout: 'authentication'
        },
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

router.beforeEach((to, from, next) => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const requiredAuth = to.matched.some(record => record.meta.requiredAuth);
    
    if (requiredAuth && !currentUser) {
        next('/login');
    } else {
        next();
    }
});

export default router;
