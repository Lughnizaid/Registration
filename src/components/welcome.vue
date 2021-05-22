<template>
  <div class="hello">
      <img v-if="auth === false" alt="Vue logo" src="../assets/cave.png">
      <p v-if="auth === false"> To Continue, you need to register or log in </p>
      <img v-if="auth === true" alt="Vue logo" src="../assets/aircraft.png">
      <p v-if="auth === true"> Perfect, now its time to explore the world </p>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'welcome',
    data() {
        return {
            auth: false,
        };
    },
    created() {
      firebase.auth().onAuthStateChanged((user) =>{
          if(user){
              this.auth = true;
          }else{
              this.auth = false;
          }
      });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
