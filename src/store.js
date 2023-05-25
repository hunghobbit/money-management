import { defineStore } from 'pinia'
import { useLogIn } from '../composables/useLogIn.js'
import { useSignOut } from '../composables/useSignOut.js'
import { useSignUp } from '../composables/useSignUp.js'
const useAuthStore = defineStore("auth", {
    // name of the store
    state: () => ({
        // initial state
        user:{
            loggedIn: false,
            data: null
        }
    }),
    getters: {
        // get the user
        user(state){
            return state.user;
        }
    },
    actions: {
        // log the user in
        login(context, { email, password }){
            const { error, signUp, isPending } = useLogIn();
            const response = signUp(email, password);
            if (!response) {
                error.value = 'Incorrect login credentials';
                return;
            }
            context.user.loggedIn = true;
            context.user.data = response.user;
        },
        // log the user out
        logout(context){
            const { logOut, error } = useSignOut();
            const response = logOut();
            if (!response) {
                error.value = 'Incorrect login credentials';
                return;
            }
            context.user.loggedIn = false;
            context.user.data = null;
        },
        // register the user
        register(context, { email, password, fullName }){
            const { error, signUp , isPending } = useSignUp();
            const response = signUp(email, password, fullName);
            if (!response) {
                error.value = 'Incorrect login credentials';
                return;
            }
            context.user.loggedIn = true;
            context.user.data = response.user;
        }
    }
})

// export the store
export default { useAuthStore }