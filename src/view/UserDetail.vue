<template>
    <h1 class="font-bold">#9.2 This is dynamic routing page</h1><br><br>

    <p v-for="user in usernames" :key="user.id"><b>{{ user.name }} </b></p>

    <br><p>The id is <b>{{ $route.params.id }}</b></p>
</template>

<script setup>
import {ref} from 'vue';

const usernames=ref([
    {id:1, name:'lucky'},
    {id:2, name:'sakshi'},
    {id:3, name:'Nikki'},
])
</script>