<template>
  <div id="app">
    <div class="bar">
      <router-link to="/" class="project">Project X</router-link>
      <div class="nav">
        <p class="email" v-if="auth === true">{{email}}</p>
        <router-link  v-if="auth === false" to="/register" class="register">Register</router-link>
        <router-link v-if="auth === false" to="/login" class="login">Login</router-link>
        <p v-if="auth === true" @click="logout" class="register">Log out</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            auth: false,
            email: '',
        };
    },
    created() {
      firebase.auth().onAuthStateChanged((user) =>{
          if(user){
              this.auth = true;
              var user = firebase.auth().currentUser;
              var name, email, photoUrl, uid, emailVerified;
              if (user != null) {
                this.email = user.email;
              }
          }else{
              this.auth = false;
          }
      });
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1300px;
  margin: 0 auto 0 auto;
}
.bar {
  display: flex;
  justify-content: space-between;
}
.register, .login, .project {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 10px;
  cursor: pointer;
}
.nav {
  display: flex;
}
.email {
  font-size: 0;
  margin-top: 1px;
  background-color: #EC5D2D;
  width: 19px;
  height: 19px;
  border-radius: 20px;
  color: white;
}
.email:first-letter {
  font-size: 15px;
}
</style>
