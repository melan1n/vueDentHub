<template>

<div v-if="appointments.length > 0" class="container body-content">
<div class="panel panel-default">
    <div class="panel-heading"></div>

    <table class="table">
        <tr>
            <th>Dentist</th>
            <th>Appointment Time</th>
        </tr>
           <tr class=" text-danger" v-for="(appointment, index) in appointments" :key="index">
                <td>
                    {{appointment.dentist}} 
                </td>
                <td>
                    {{appointment.time}}
                </td>
                
            </tr>
    </table>
</div>
</div>
<div v-else class="container body-content">
    <br>
    <br>
    <h3>You have no appointments.</h3>
</div>

</template>

<script>
  export default {
      name: 'app-appointment',
      props: {
            appointments: {
              type: Array
          }
      }
  }
</script>

<style scoped>
</style>