<template>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6">
  <form>
      <label for="email">Email</label>
      <input id="email" v-model="email" name="email" type="text" class="form-control" placeholder="Enter email" @blur="$v.email.$touch">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <template v-if="$v.email.$error">
              <p class="error" v-if="!$v.email.required">Please enter valid email!</p>
              <!-- <p class="error" v-if="!$v.email.email">Please enter valid email!</p> -->
          </template>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" class="form-control" placeholder="Password" v-model="password" @blur="$v.password.$touch">
        <div class="error" v-if="!$v.password.required">Password is required</div>
        <div class="error" v-else-if="!$v.password.minlength">Password should have at least 6 characters</div>
    <!-- <label class="error"></label>
   <label class="success"></label> -->
  <div>
  <button type="submit"  class="btn btn-primary bg-dark">Register</button>
</div>
</form>
</div>
</div>
</div>
</template>

<script>

  import { validationMixin } from 'vuelidate';
  import { required, minlength } from 'vuelidate/lib/validators';
  
  export default {
      name: 'app-register',
      mixins: [validationMixin],
      data() {
          return {
              email: '',
              password: ''
          }
      },
      validations: {
          email: {
              required,
             // email
          },
          password: {
              required,
              minlength: minlength(6)
          }
      }
      }
</script>

<style scoped>
</style>