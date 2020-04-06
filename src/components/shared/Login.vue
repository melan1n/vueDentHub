<template>
 <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6">
       
  <form @submit.prevent="submitHandler">
      <label for="emailfield">Email</label>
      <input v-model="emailfield" name="emailfield" type="text" class="form-control" placeholder="Enter email" @blur="$v.emailfield.$touch">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      <template>
              <p class="error" v-if="!$v.emailfield.required">Please enter valid email!</p>
              <p class="error" v-else-if="!$v.emailfield.email">Please enter valid email!</p>
          </template>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" class="form-control" placeholder="Password" v-model="password" @blur="$v.password.$touch">
      <template>
        <div class="error" v-if="!$v.password.required">Please enter a password</div>
   <label class="error"></label>
   <label class="success"></label>
   </template>
   
    <div>
      <button type="submit" :disabled="$v.$invalid" class="btn btn-primary bg-dark">Login</button>
    </div>
    </form>
</div>
</div>
</div>
</template>

<script>

  import { validationMixin } from 'vuelidate';
  import { required, email } from 'vuelidate/lib/validators';

  export default {
      name: 'app-login',
      mixins: [validationMixin],
      data() {
          return {
              emailfield: '',
              password: ''
          }
      },
      validations: {
          emailfield: {
        required,
        email
        },
      password: {
        required
        }
      }
  }
</script>

<style scoped>
</style>