<template>
    <div class="container body-content">
    <div class="card" style="width: 18rem;">
      <img :src="dentist.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{dentist.name}}</h5>
        <p class="card-text">{{dentist.clinic}}</p>
      </div>
      <app-create :dentist="dentist"></app-create>
    </div>
    </div>
</template>

<script>
import AppCreate from './Create.vue';
import { firestore } from '../../plugins/dbfirebase';

  export default {
      name: 'app-detail',
      components: {
          AppCreate
      },
      props: {
        'id': Number, 
        'name': String, 
        'clinic': String, 
        'image': String
      },
      data() {
        return { 
          dentist: {
          id: this.$route.params.id,
          name: this.$route.params.name,
          clinic: this.$route.params.clinic,
          image: this.$route.params.image
        }
        }
      },
      created: function() {
        this.$bind("data", firestore
        .collection('dentists')
        .doc(this.$route.params.id)
        //.doc(this.$attrs.id)
        //.doc(this.$route.params.id)
        //.doc(this.$attrs.id)
        );
      }
      
  }
</script>

<style scoped>
</style>