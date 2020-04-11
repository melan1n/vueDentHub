<template>
    
<form>
  <div class="container">
    <div class="row">
        <div class='col-sm-10'>
            <div class="form-group" @submit.prevent="createAppointment">
              <label>Please select time:</label>
              <input v-model="time" name="time" type="text" class="form-control" placeholder="mm-dd-yyyy hh:mm:ss" @blur="$v.time.$touch">
              <small id="emailHelp" class="form-text text-muted">Please enter date and time in format "mm-dd-yyyy hh:mm:ss"</small>
              <template v-if="$v.time.$error">
                  <div class="error" v-if="!$v.time.required">Appointment time is required</div>
                  <div class="error" v-else-if="!$v.time.validateTimeFormat">Please enter valid date and time!</div>
                  </template>
              <!-- <p class="error">Please enter valid date and time!</p> -->
              </div>
            </div>
          </div>
        
      <div>
        <button  type="submit" :disabled="$v.$invalid" class="btn btn-primary bg-dark">Book an appointment</button>
      </div>
      <br>
    </div>
  </form>
</template>

<script>

  import { validationMixin } from 'vuelidate';
  import { required } from 'vuelidate/lib/validators';
  import { firestore } from '../../plugins/dbfirebase.js';
  import { mapGetters } from "vuex";
//import { app } from 'firebase';

  export default {
      name: 'app-create',
      mixins: [validationMixin],
      data() {
          return {
              time: '',
              dentistName: this.dentist.name 
          }
      },
      props: [ 'dentist'],
      // props: {
      //     dentist: {
      //         name: this.dentist.name,
      //         id: this.dentist.id,
      //         clinic: this.dentist.clinic,
      //         image: this.dentist.image
      //     }
      //  },
      computed: {
      // map `this.user` to `this.$store.getters.user`
      ...mapGetters({
      user: "user"
      })
      },
      validations: {
          time: {
              required,
              validateTimeFormat(time){
                  return (
                      /^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d (?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/g.
                      test(time)
                  )
              }
          }
      },
      methods: {
        createAppointment() {
        //   let appointment = null;
        //   appointment.dentist = this.dentistName;
        // appointment.email = this.user.email;
        // appointment.time = new Date(this.time)
        // return await firestore.collection('appointments').doc(appointment.id).set(appointment);

          firestore.collection('appointments')
          .add({ dentist: this.dentistName, email: this.user.email, time: Date.parse(this.time)})
           .then(res => {
              res.user.updateProfile({
              displayName: this.emailfield
            });
              this.$router.replace({ name: "Appointment"})
            })
            .catch(err => {
              this.error = err.message;
            });
            this.$router.push({ name: "Appointment"})
        }
      }
      }     
    
  
</script>

<style scoped>
</style>