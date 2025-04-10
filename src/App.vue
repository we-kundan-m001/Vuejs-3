<template>
  
  <Home />
  <ChildComponenet />
</template>

<script>
import Home from './components/Home.vue'

import ChildComponenet from './components/ChildComponenet.vue';


export default {
  name: 'App',
  components: {
    Home,
    ChildComponenet,
  }
}
</script>


