<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from '@/components/welcome.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .home {
    margin-top: 200px;
  }
</style>
