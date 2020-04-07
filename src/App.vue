<template>
  <div id="app">
    <app-navigation></app-navigation>
    {{denthub}}
    <app-home></app-home>
    <!-- <app-register></app-register> -->
    <!-- <app-login></app-login> -->
    <!-- <app-dentist :dentists="this.denthub.dentists"></app-dentist> -->
    <!-- <app-appointment :appointments="this.denthub.appointments"></app-appointment> -->
    <!-- <app-detail :dentist="this.denthub.dentists[0]"></app-detail> -->

  </div>
</template>

<script>
import denthub from './denthub.json';
import AppHome from './components/Home.vue';
import AppNavigation from './components/shared/Navigation.vue';
//import AppRegister from './components/authentication/Register.vue';
//import AppLogin from './components/authentication/Login.vue';
// import AppDentist from './components/core/Dentist.vue';
// import AppAppointment from './components/core/Appointment.vue';
// import AppDetail from './components/core/Detail.vue';


export default {
  name: 'App',
  components: {
     AppHome,
    AppNavigation,
    //AppRegister,
    // AppLogin,
    // AppDentist,
    // AppAppointment,
    // AppDetail
  },
  data() {
    return {
      denthub
    };
  }
}
</script>

<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
