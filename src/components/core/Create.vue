<template>
    
<form>
  <div class="container">
    <div class="row">
        <div class='col-sm-10'>
            <div class="form-group">
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
  
  export default {
      name: 'app-create',
      mixins: [validationMixin],
      data() {
          return {
              time: ''
          }
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
      props: {
    //       dentist: {
    //           type: Object
    //       }
       }
       }
    
  
</script>

<style scoped>
</style>