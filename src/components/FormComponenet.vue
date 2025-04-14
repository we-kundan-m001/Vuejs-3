<template>
    <h1 class="font-bold">#5.2 This Componenet is about Form input binding</h1>

    <input type="text" v-model="first_name" class="border border-gray-700" />
    <div> {{ first_name }}</div><br>
    <textarea v-model="message" class="border border-red-700"></textarea><br>
    <div>TextArea Message: {{ message }}</div><br><br>

    CSS:<input type="checkbox" v-model="technology"  value="css"/>
    Bootstrap:<input type="checkbox" v-model="technology" value="bootstrap">
    HTML:<input type="checkbox" v-model="technology" value="html">

    <div>Selected technology:{{ technology }}</div><br>



    Male:<input type="radio" v-model="gender" value="male">
    Female:<input type="radio" v-model="gender" value="female">

    <div>Selected gender :{{ gender }}</div><br>

    Choose Section :<select class="border border-yellow-700" v-model="selectedsection">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>

    <div>Choosen Section:{{ selectedsection }}</div>


    
</template>

<script setup>


import {ref} from 'vue';

const first_name=ref('kundan');
const message=ref('how are you');
const technology=ref([]);
const gender=ref('');
const selectedsection=ref('B');
</script>