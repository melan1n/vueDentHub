import AppHome from './components/Home.vue';
import AppRegister from './components/shared/Register.vue';
import AppLogin from './components/shared/Login.vue';
import AppDentist from './components/core/Dentist.vue';
import AppAppointment from './components/core/Appointment.vue';
import AppDetail from './components/core/Detail.vue';

export default [
    { path: '', component: AppHome },
    { path: '/home', component: AppHome },
    { path: '/register', component: AppRegister },
    { path: '/login', component: AppLogin },
    { path: '/logout', component: AppDentist },
    { path: '/dentist', component: AppDentist },
    { path: '/appointment', component: AppAppointment },
    { path: '/detail/:id', component: AppDetail }
]

