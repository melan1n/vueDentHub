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
                    {{appointment.time | dateToString}}
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
import Vue from 'vue';
import {firestorePlugin} from 'vuefire';
import { firestore } from '../../plugins/dbfirebase.js'

Vue.use(firestorePlugin);

  export default {
      name: 'app-appointment',
    //   props: {
    //         appointments: {
    //           type: Array
    //       }
    //   },
      created() {
        this.$bind('appointments', firestore.collection('appointments'))
        .then(appointments => { this.appointments === appointments});
    },
    data() {
        return {
            appointments: [],
            currentDentist: { 
                id: Number,
                name: String,
                clinic: String,
                image: String
            }
        }
    },
    firestore: {
        appointments: firestore.collection("appointments"),
        // currentDentist: firestore.collection('appointments')
        //  .doc(currentDentist.id.toString())
    },
    filters: {
        dateToString(value) {
            var t = new Date(1970, 0, 1); // Epoch
            t.setSeconds(value.seconds);
            return t.toString().substring(0, 25);
        // return new Date(value.seconds).toISOString();
  }
}

  }
</script>

<style scoped>
</style>