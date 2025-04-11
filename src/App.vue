<template>
  
  <Home />
  <ChildComponenet />
  <ApiComponenets />
  <CompositeApiComponets />
  <StyleComponenet />
  <ConditionalComponents />
  <ListComponenets />
</template>

<script>
import Home from './components/Home.vue'

import ChildComponenet from './components/ChildComponenet.vue';
import ApiComponenets from './components/ApiComponenets.vue'; 
import CompositeApiComponets from './components/CompositeApiComponets.vue';
import StyleComponenet from './components/StyleComponenet.vue';
import ConditionalComponents from './components/ConditionalComponents.vue';
import ListComponenets from './components/ListComponenets.vue';




export default {
  name: 'App',
  components: {
    Home,
    ChildComponenet,
    ApiComponenets,
    CompositeApiComponets,
    StyleComponenet,
    ConditionalComponents,
    ListComponenets,
  }
}
</script>