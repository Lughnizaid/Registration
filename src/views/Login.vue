<template>
  <div>
    <div class="login-parent">
      <h4>Login</h4>
      <div class="google">
        <div class="google-button" @click="socialLogin">
          <img class="google-icon" href="#" src="@/assets/googleicon.png" alt="Image alt"/>
          <a class="google-word">Continue with Google</a>
        </div>
      </div>
      <p>OR</p>
      <form @submit.prevent="login" class="login-child">
        <input
          type="email"
          placeholder="Email address..."
          v-model="email"
        />
        <input
          type="password"
          placeholder="password..."
          v-model="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
        socialLogin() {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then((result) => {
            this.$router.push('/');
          }).catch((err) => {
            alert('Oops. ' + err.message)
          });
        }
    },
};
</script>

<style scoped>
.login-parent {
  max-width: 100%;
  margin-top: 80px;
}
.login-child {
  max-width: 300px;
  display: block;
  margin: 0 auto 0 auto;
}
input {
  width: 200px;
  height: 25px;
  margin-bottom: 10px;
  padding-left: 10px;
}
input:focus {
    outline: none !important;
    border:2px solid #F8874F;
}
button {
  margin-top: 10px;
  width: 216px;
  height: 25px;
  cursor: pointer;
}
.google {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.google-button {
	height: 30px;
	flex-wrap: wrap;
	border-radius: 5px;
	background-color: #eee;
	display: flex;
  justify-content: flex-start;
	padding-left: 10px;
	width: 207px;
}
.google-icon {
	width: 20px;
	height: 20px;
	border-radius: 30px;
	margin-top: 5px;
}
.google-word {
	margin-left: 12px;
	font-size: 14px;
	font-weight: 700;
	color: #000;
  margin-top: 6px;
}
</style>
