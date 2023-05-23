import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../src/pages/Dashboard.vue'),
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../src/pages/Welcome.vue'),
        meta: {
            requiredAuth: false,
        }
    },
    {
        path: '/wallets',
        component: () => import('../src/pages/Wallets.vue'),
        name: 'wallets',
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/transactions',
        component: () => import('../src/pages/Transactions.vue'),
        name: 'transactions',
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/categories',
        component: () => import('../src/pages/Categories.vue'),
        name: 'categories',
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/contacts',
        component: () => import('../src/pages/Contacts.vue'),
        name: 'contacts',
        meta: {
            requiredAuth: true
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
    const currentUser = sessionStorage.getItem('currentUser');
    const requiredAuth = to.matched.some(record => record.meta.requiredAuth);
    if (requiredAuth && !currentUser) {
        next({ name: 'login' });
    }else{
        to.meta.authenticated = true;
        next();
    }
    
});

export default router;
