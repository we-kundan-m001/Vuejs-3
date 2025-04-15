<template>

    <h1 class="font-black">#6.7 This is post componenet</h1>

    <p v-for="post in postdetail" :key="post.id">{{ post.title }}</p>

    <SingleComponenets  v-for="posts in postdetail" :posts="posts" :key="posts.id" @edit-Post="UpdateEvent"/>

</template>

<script setup>

import {ref} from 'vue';
import SingleComponenets from './SingleComponenets.vue';
const postdetail=ref([
    {id:1, title:'post-1'},
    {id:2, title:'post-2'},
    {id:3, title:'post-3'},
])

const UpdateEvent = (postId) => {
  
    postdetail.value=postdetail.value.map((posts)=>{
       
        if(postId == posts.id ) return {...posts, title:`this is updated id ${posts.id}`};
        return posts;
    })
    
}



</script>