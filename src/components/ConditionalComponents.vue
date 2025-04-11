<template>
    <h1>This is conditional Componet</h1><br>

    <p v-if="show">This is demo text</p>
    <p v-if="!show">This is not show</p>

    <button @click="show=!show" class="border bg-red-400 text-white p-2">toggle</button>
</template>

<script setup>
import {ref} from 'vue';
const show = ref(false);

</script>