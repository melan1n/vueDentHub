<template>
<div class="container">
  <nav class="navbar navbar-inverse navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" >Denthub</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="nav navbar-nav">
        <li>
        <a class="nav-item nav-link" @click="navItemClickHandler()">Book Appointment</a>
        </li>
        <li>
        <a class="nav-item nav-link" @click="navItemClickHandler()">My Appointments</a>
        </li>
        <li>
        <a class="nav-item nav-link" @click="navItemClickHandler()">Welcome, userService.currentUserEmail!</a>
        </li>
        <li>
        <a class="nav-item nav-link" @click="navItemClickHandler()">Logout</a>
        </li>
        <li>
        <a class="nav-item nav-link" @click="navItemClickHandler()">Login</a>
        </li>
        <li>
        <a class="nav-item nav-link" @click="navItemClickHandler()">Register</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
  export default {
      name: 'app-navigation',
      methods: {
        navItemClickHandler() {
          console.log('CLICKED');
        }
      }
  }
</script>

<style scoped>
</style>