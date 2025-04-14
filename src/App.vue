<template>
  
  <Home />
  <!-- <ChildComponenet /> -->
  <ApiComponenets />
  <CompositeApiComponets />
  <StyleComponenet />
  <ConditionalComponents />
  <ListComponenets />
  <EventComponenet />
  <FormComponenet />
  <WatcherComponenet />
  <LifeCycleComponenet />
</template>

<script>
import Home from './components/Home.vue'

// import ChildComponenet from './components/ChildComponenet.vue';
import ApiComponenets from './components/ApiComponenets.vue'; 
import CompositeApiComponets from './components/CompositeApiComponets.vue';
import StyleComponenet from './components/StyleComponenet.vue';
import ConditionalComponents from './components/ConditionalComponents.vue';
import ListComponenets from './components/ListComponenets.vue';

import EventComponenet from './components/EventComponenet.vue';
import FormComponenet from './components/FormComponenet.vue';
import WatcherComponenet from './components/WatcherComponenet.vue';
import LifeCycleComponenet from './components/LifeCycleComponenet.vue';




export default {
  name: 'App',
  components: {
    Home,
   // ChildComponenet,
    ApiComponenets,
    CompositeApiComponets,
    StyleComponenet,
    ConditionalComponents,
    ListComponenets,
    EventComponenet,
    FormComponenet,
    WatcherComponenet,
    LifeCycleComponenet,
  }
}
</script>