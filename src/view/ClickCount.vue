<template>
    <h1 class="font-bold">This is ClickCount{{ clickcount }}</h1><br>
    <button class="border rounded p-2 bg-blue-400 text-white" @click="incrementClick">Increase</button><br>
    <HoverCount /><br><br>
</template>

<script setup>
import HoverCount from './HoverCount.vue';

import { count } from '@/mixins/Count';


const { clickcount, incrementClick } = count();
</script>