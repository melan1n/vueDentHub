<template>
<div class="container">
  <nav class="navbar navbar-inverse navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="home">Denthub</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="nav navbar-nav">
        <li>
        <router-link class="nav-item nav-link" to="dentist">Book Appointment</router-link>
        </li>
        <li>
        <router-link class="nav-item nav-link" to="appointment">My Appointments</router-link>
        </li>
        <li>
        <router-link class="nav-item nav-link" to="">Welcome, userService.currentUserEmail!</router-link>
        </li>
        <li>
        <router-link class="nav-item nav-link" to="" @click="logout()">Logout</router-link>
        </li>
        <li>
        <router-link class="nav-item nav-link" to="login">Login</router-link>
        </li>
        <li>
        <router-link class="nav-item nav-link" to="register">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view></router-view>
</div>
</template>

<script>
  export default {
      name: 'app-navigation',
      methods: {
        logout() {
          console.log('LOGOUT');
        }
      }
  }
</script>

<style scoped>
</style>