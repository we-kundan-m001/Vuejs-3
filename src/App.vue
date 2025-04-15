<template>
  
  <Home />

  <!--<Teleport to="#teleport">
    
  </Teleport>
   <ChildComponenet />
  <ApiComponenets />
  <CompositeApiComponets />
  <StyleComponenet />
  <ConditionalComponents />
  <ListComponenets />
  <EventComponenet />
  <FormComponenet />
  <WatcherComponenet />
  <LifeCycleComponenet />
  <PostComponents />

 

  <CustomInputComponenets  v-model="searchmessage"/>

  <Teleport to="#teleport">
    <div>Parents value: {{ searchmessage }}</div>
</Teleport>

 <SlotComponenets> 
  
  <span class="text-black">Click</span> me form app 

  <template #footer>
    <p>This is the footer slot content</p>
  </template>

  <template #userdetails="{ user }">
      <li class="text-green-600">🔥 {{ user.name }}</li>
    </template>

</SlotComponenets>

<HttpRequestComponenets /> -->

<router-link to="/" >Header</router-link><br><br>

<router-link to="/contact" >contact</router-link>

<router-view />



</template>

<script>
/*
import Home from './components/Home.vue'
import ChildComponenet from './components/ChildComponenet.vue';
import ApiComponenets from './components/ApiComponenets.vue'; 
import CompositeApiComponets from './components/CompositeApiComponets.vue';
import StyleComponenet from './components/StyleComponenet.vue';
import ConditionalComponents from './components/ConditionalComponents.vue';
import ListComponenets from './components/ListComponenets.vue';
import EventComponenet from './components/EventComponenet.vue';
import FormComponenet from './components/FormComponenet.vue';
import WatcherComponenet from './components/WatcherComponenet.vue';
import LifeCycleComponenet from './components/LifeCycleComponenet.vue';
import PostComponents from './components/PostComponents.vue';



import CustomInputComponenets from './components/CustomInputComponenets.vue';
import SlotComponenets from './SlotComponenets.vue';

import HttpRequestComponenets from './components/HttpRequestComponenets.vue';

*/


export default {
  name: 'App',
  components: {
    /*Home,
    ChildComponenet,
    ApiComponenets,
    CompositeApiComponets,
    StyleComponenet,
    ConditionalComponents,
    ListComponenets,
    EventComponenet,
    FormComponenet,
    WatcherComponenet,
    LifeCycleComponenet,
    PostComponents,

    CustomInputComponenets,
    SlotComponenets,
    
    HttpRequestComponenets,

    */
  }
}
</script>

<script setup>
// import {ref} from 'vue';

// const searchmessage=ref('Mac');
</script>


<style>
.router-link-exact-active {
  color:red;
}
</style>