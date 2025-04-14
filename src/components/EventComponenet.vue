<template>
    <h1> This is EventComponenet</h1>
    <!-- <button @Click="counter++">Increase Counte r</button> -->
     <button type="button"  @click="counterincrease('test',$event)" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Increase</button>
    <p>Counter {{ counter }}</p>

    <a href="https://www.facebook.com/" @click.prevent="show_facebook">facebook</a>

</template>

<script setup>
import {ref} from 'vue';

const counter=ref(0);

const counterincrease = (name,event) => {
 counter.value++;
 console.log(event);
};

const show_facebook= ()=>{

    console.log('facebbok button triggered');
}
</script>