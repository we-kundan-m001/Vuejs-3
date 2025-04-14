<template>

    <h1 class="font-black"> #6.1 This is lifecycle </h1>

    <button @click="count++" class="border border-red-700" >click me</button>
    <div>currently the count id <b>{{ count }}</b></div>

    <ChildComponenet title="child components" :age="22" />
</template>

<script setup>

import ChildComponenet from './ChildComponenet.vue';

import {ref ,onUpdated ,onBeforeUpdate ,onMounted, onBeforeMount} from 'vue';

const count=ref(0);

onUpdated (()=>{
    console.log(`🔄 Component was updated! ${count.value}`,);
})

onBeforeUpdate(()=>{
    console.log(`before update${count.value}`);
})

onMounted(()=>{
    console.log('before onmounted')
})

onBeforeMount(()=>{
    console.log('before onBeforemounted');
})



</script>