/*
 * Use this file to register any variables or functions that should be available globally
 * ideally you should make it available via the window object
 * as well as the Vue prototype for access throughout the app
 * (register globals with care, only when it makes since to be accessible app wide)
*/

const app = Vue.createApp({
    //data, funtctions
    data() {
        return {
            name: 'Ilya'
        };
    }
});

app.mount('#vue-app');