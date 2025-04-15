<template>
    <h1 class="font-black">#6.9 This is Custom Input Componenet</h1><br>

    <label for="first-name">First Name:
        <input class="border border-gray-700" type="text" :value="modelValue" @input=" $emit('update:modelValue', $event.target.value)">
    </label>

</template>

<script setup>


defineProps({
    modelValue:{
        type:String,
        required:true,

    }
});

 defineEmits(['update:modelValue']);


</script>