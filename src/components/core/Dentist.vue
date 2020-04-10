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
      <router-link :to="{ name: 'Detail', params: { id: dentist.id, name: dentist.name, clinic: dentist.clinic, image: dentist.image }}"  >Book an appointment</router-link>
    
    </div>
 
 </div>
</div>
</template>

<script>
import Vue from 'vue';
import {firestorePlugin} from 'vuefire';
import { firestore } from '../../plugins/dbfirebase.js'

Vue.use(firestorePlugin);

  export default {
    name: 'app-dentist',
    created() {
        this.$bind('dentists', firestore.collection('dentists'))
        .then(dentists => { this.dentists === dentists})
    },
    data() {
        return {
            dentists: [],
            currentDentist: { 
                id: Number,
                name: String,
                clinic: String,
                image: String
            }
        }
    },
    firestore: {
        dentists: firestore.collection("dentists"),
        // currentDentist: firestore.collection('dentists')
        //  .doc(currentDentist.id.toString())
    },
   }
     

</script>

<style scoped>
</style>