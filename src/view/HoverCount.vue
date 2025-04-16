<template>
    <h1 class="font-bold">This is HoverCount {{ hovercount }}</h1><br><br>

    <button class="border rounded p-2 bg-blue-400 text-white" @click="hovercountclick">Increase</button>
</template>

<script setup>

import { count } from '@/mixins/Count';

const { hovercount, hovercountclick } = count();

</script>