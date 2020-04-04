<template>
<div v-if="dentists" class="container body-content">

<div class="media" v-for="(dentist, id) in dentists" :key="id">
  <div class="media-left">
      <a href="#">
          <img style=" width: 220px; height: 130px" class="media-object img-size" :src="dentist.image">
      </a>
  </div>
 
  <div class="media-body">
      <h4 class="media-heading">{{dentist.name}}</h4>
      Clinic: {{ dentist.clinic }}
      <br>
      <a>Book an appointment</a>
    
    </div>
 
 </div>
</div>
</template>

<script>
  export default {
      name: 'app-dentist',
      props: {
          dentists: {
              type: Array
          }
      }
  }
</script>

<style scoped>
</style>