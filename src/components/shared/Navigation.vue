<template>
<div class="container">
  <nav class="navbar navbar-inverse navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="home">Denthub</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="nav navbar-nav">
        <li v-if="user.loggedIn">
        <router-link class="nav-item nav-link" to="dentist">Book Appointment</router-link>
        </li>
        <li v-if="user.loggedIn">
        <router-link class="nav-item nav-link" to="appointment">My Appointments</router-link>
        </li>
        <li v-if="user.loggedIn">
        <router-link class="nav-item nav-link" to="">Welcome, {{user.data.email}}!</router-link>
        </li>
        <li v-if="user.loggedIn">
        <a class="nav-item nav-link" @click.prevent="logout">Logout</a>
        </li>
        <li v-if="!user.loggedIn">
        <router-link class="nav-item nav-link" to="login">Login</router-link>
        </li>
        <li v-if="!user.loggedIn">
        <router-link class="nav-item nav-link" to="register">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view></router-view>
</div>
</template>

<script>
//import store from '../../store';
//import {app} from '@/main.js';
import { mapGetters } from "vuex";
import firebase from 'firebase';

  export default {
      name: 'app-navigation',
      computed: {
      // map `this.user` to `this.$store.getters.user`
      ...mapGetters({
      user: "user"
      })
      },
      methods:{
        logout() {
        firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            path: "/"
          });
        })
      }
  }
  }
</script>

<style scoped>
</style>