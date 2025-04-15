<template>
    <br>
    <div class="mb-3">
    <h1 class="font-black">This is slot Component</h1><br>

    <button class="bg-blue-500 text-white rounded p-2"><slot>Click</slot></button><br>

    <slot></slot>

    <div class="mt-2">
      <slot name="footer" />
    </div>

    <p v-for="user in userdetails" :key="user.name">
        <!-- {{ user.name }} and {{ user.age }} -->
        <slot name="userdetails" :user="user" />
    </p>


</div>

</template>

<script setup>
import {ref } from 'vue';
//prob slot is used to send data to  the parents so that parents can make decision on that data 

const userdetails=ref([
    {name:'lucky',age:'22'},
    {name:'kundan',age:'23'}
])
</script>