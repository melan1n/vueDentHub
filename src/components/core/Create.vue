<template>
    
<form>
  <div class="container">
    <div class="row">
        <div class='col-sm-10'>
            <div class="form-group">
              <label>Please select time:</label>
              <input name="time" type="text" class="form-control" placeholder="mm-dd-yyyy hh:mm:ss" required>
              <small id="emailHelp" class="form-text text-muted">Please enter date and time in format "mm-dd-yyyy hh:mm:ss"</small>
              <p class="error">Please enter valid date and time!</p>
              </div>
            </div>
          </div>
        
      <div>
        <button  type="submit" class="btn btn-primary bg-dark">Book an appointment</button>
      </div>
      <br>
    </div>
  </form>
</template>

<script>
  export default {
      name: 'app-create',
    //   props: {
    //       dentist: {
    //           type: Object
    //       }
    //   }
  }
</script>

<style scoped>
</style>