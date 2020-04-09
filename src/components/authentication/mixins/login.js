import firebase from 'firebase';

export const loginHandlerMixin = {
methods: {
    loginHandler() {
      let self = this; 
      firebase.auth()
        .signInWithEmailAndPassword(self.emailfield, self.password)
        .then(res => {
          res.user.updateProfile({
          displayName: this.emailfield
        });
          this.$router.replace({ name: "Dentist"})
        })
        .catch(err => {
          this.error = err.message;
        })
    }
  }
}