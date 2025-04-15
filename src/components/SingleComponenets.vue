<template>
    <h1 class="font-black">This is single componenet</h1>

    <p> This is Post id <b>{{postprobs.posts.id}}</b>  and this is post title <b>{{ postprobs.posts.title }}</b></p>

    <button @click.prevent="$emit('editPost',postprobs.posts.id)">Change Post</button>
    <hr class="border border-grey-800">
</template>

<script setup>

const postprobs=defineProps({
    posts:{
        type: Object,
        required: true
    }
})




// const emit = defineEmits(['editpost'])

// const UpdateEvent = () => {
//   emit('editpost', postprobs.posts.id)
// }

</script>