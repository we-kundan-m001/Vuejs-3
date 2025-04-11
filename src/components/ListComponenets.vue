<template>

    <div v-for="n in 10" v-bind:key="n"> this is list no {{ n }}</div>

    <ul>

    <li v-for="(user,index) in userdetail" v-bind:key='index'>{{ user.name }}</li>

</ul>
</template>
<script setup>
import {reactive} from 'vue';

const userdetail = reactive([
    {
        name:'kundan',
},{
    name:'lucky',

}]
);

</script>