<template>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-6">
  <form >

      <label>Email</label>
      <input  name="email" type="text" class="form-control" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      <p class="error" >Please enter valid email!</p>
    <label>Password</label>
    <input name="password" type="password" class="form-control" placeholder="Password" minlength="6">
    <div class="error" >Password should have at least 6 characters</div>
    <label class="error"></label>
   <label class="success"></label>
  <div>
  <button type="submit"  class="btn btn-primary bg-dark">Register</button>
</div>
</form>
</div>
</div>
</div>
</template>

<script>
  export default {
      name: 'app-register'
  }
</script>

<style scoped>
</style>