<template>
    <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Google',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    google: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>
