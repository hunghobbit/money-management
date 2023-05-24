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
    const clientApp = JSON.parse(localStorage.getItem('client_app'));
    let hasAccount = false;
    console.log(clientApp);
    if (clientApp !== null) {
        hasAccount = clientApp.hasAccount;
    }
    const currentUser = sessionStorage.getItem('currentUser')
    const requiredAuth = to.meta.requiredAuth;

    // nếu người dùng chưa có tài khoản và truy cập vào Home thì chuyển hướng sang Welcome
    if (!hasAccount && to.name === 'home') {
        next({ name: 'welcome' });

    } else if (!hasAccount && requiredAuth) {
        // nếu người dùng chưa có tài khoản và truy cập vào các trang khác có yêu cầu xác thực người dùng thì chuyển hướng sang trang đăng ký

        next({ name: 'register' });

    } else if (hasAccount && !currentUser && requiredAuth) {
        // nếu người dùng đã có tài khoản, chưa đăng nhập và truy cập vào các trang khác có yêu cầu xác thực người dùng thì chuyển hướng sang trang đăng nhập
        next({ name: 'login' });
    } else {
        to.meta.authenticated = currentUser !== null;
        next();
    }

});

export default router;
