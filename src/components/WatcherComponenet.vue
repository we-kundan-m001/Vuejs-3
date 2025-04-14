<template>
    <h1 class="font-bold">#5.3 This is watcher Componenets</h1>

    <input type="text" class="border border-blue-700" v-model="question"><br>

    X_value:<input type="number" class="border border-blue-700" v-model="x_value"><br>

    Y_value:<input type="number" class="border border-blue-700" v-model="y_value"><br><br>

    Reactive value:<input type="number" class="border border-blue-700" v-model="newreactivevalue.age">



</template>

<script setup>
import {ref,watch,reactive} from 'vue';

const question=ref('');
//const answer=ref('this is answer?');
const x_value=ref(0);
const y_value=ref(0);
const newreactivevalue= reactive({name:'lucky',age:24}); //reactivevalue

watch(question,async (newQuestion,oldQuestion)=>{
    
    if(newQuestion.includes('?')){
        question.value='loading';
       
        try{

            const res=await fetch('http://127.0.0.1:8000/api/userdetail');
            const response= await res.json();
            console.log(response);
            console.log(oldQuestion);
        }catch(error){
            console.log(error);
        }
    }
},{immediate:true})

/* eslint-disable no-unused-vars */
watch([x_value, y_value], ([newX, newY], [oldX, oldY]) => {
    console.log(x_value.value + y_value.value);
},{immediate:true})

//using getter  method 

watch(()=> x_value.value + y_value.value,(sum) =>{
    console.log(` the sum is ${sum}`);
},{immediate:true})

//for relative value
watch(()=> newreactivevalue.age,(newage)=>{
    console.log(newage);
})

//immediate true is use to call that watcher at first

</script>