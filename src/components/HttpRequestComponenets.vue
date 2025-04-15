<template>
<h1 class="font-black"> #8.1 This is Http Request Componet </h1>

<button class="border  rounded p-2 bg-blue-400 text-white"  @click="callapi">Http Request</button>


   <div v-for="(value,key) in userdata" :key="key">
    <strong>{{ key }}</strong> :{{ value }}
   </div><br>

   <button class="border rounded bg-green-700 text-white p-2 mt-4" @click="PostData">Post data</button>
</template>

<script setup>

import axios from 'axios';
import {ref} from 'vue';

const userdata=ref('');

/*const callapi= async()=>{
    try{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data= await res.json();
    console.log(data);
    userdata.value=data;
    }catch(error){
        console.log(error);
    }
}
const PostData= async() =>{
    const userdata=JSON.stringify({
        title: 'foo',
    body: 'bar',
    userId: 1,
    });
    console.log(userdata);
    try{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"post",
        header:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        data:userdata,
    });
    const data= await res.json();
    console.log(data);
        }catch(error){
            console.log(error);
        }
}*/

const callapi = async() =>{
    try{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
    userdata.value=response.data;
    }catch(error){
        console.warn(error);
    }
}
const PostData= async() =>{
    try{
        const res=await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        console.log('Response:', res.data);
    }catch(error){
        console.log(error);
    }
}
</script>