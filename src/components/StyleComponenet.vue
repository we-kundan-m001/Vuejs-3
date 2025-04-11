<template>
    <div>
    <h1 :style="{color: activeColor,fontSize: textfontSize}">This Componet is about the Styling</h1><br>
    <h1 :style="styleobject">This Componet is about the Styling</h1>
</div>
</template>

<script setup>

import {reactive, ref} from 'vue';

const activeColor=ref('red');
const textfontSize=ref('14px');


const styleobject=reactive({
    color:'red',
    fontSize:'20px'
});

setTimeout(()=>{

    activeColor.value='blue';

},5000);

</script>