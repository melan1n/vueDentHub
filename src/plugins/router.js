import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHome from '@/components/Home.vue';
import AppRegister from '@/components/authentication/Register.vue';
import AppLogin from '@/components/authentication/Login.vue';
import AppDentist from '@/components/core/Dentist.vue';
import AppAppointment from '@/components/core/Appointment.vue';
import AppDetail from '@/components/core/Detail.vue';

const routes = [
    { path: '', name: '', component: AppHome },
    { path: '/home', name: 'Home', component: AppHome },
    { path: '/register', name: 'Register', component: AppRegister },
    { path: '/login', name: 'Login', component: AppLogin },
    { path: '/logout', name: 'Logout', component: AppDentist },
    { path: '/dentist', name: 'Dentist', component: AppDentist  },
    { path: '/appointment', name: 'Appointment', component: AppAppointment },
    { path: '/detail/:id', name: 'Detail', component: AppDetail }
]

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes
})

