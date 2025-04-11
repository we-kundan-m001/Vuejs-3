<template>
    <div :class="visibilityState">
    <h1>This is About ComPosite Api</h1>
    
    <p>My name is kundan and my age is {{ count }}</p>

    <p>Currently the Counter is <b :class="evenclass">{{ oddeven }} </b></p>

    <p>This is Reactive userdetail {{ validuser }} </p>

    <p>Changing firstname last name using computed value <b>{{ userfullname }}</b></p>

    <button  @click="count++" class="bg-blue-700 mt-3 text-center text-white rounded">Count+</button>

    </div>

    
    <!-- <button @click="visibilityState.value ='show'">Show CompositeApiComponents</button> -->

    <!-- <button @click="visibilityState.value = visibilityState.value === 'hidden' ? 'show' : 'hidden'">
        Toggle CompositeApiComponents
    </button> -->

    <button @click="toggleVisibility()" class="border bg-blue-700 text-white p-2 rounded">Toggle</button>

</template>

<script setup>

import {ref , computed , reactive} from 'vue';
var count=ref(0);
const visibilityState  = ref('hidden');

const first_name=ref('kundan');
const last_name=ref('Mishra');

const userdetail =reactive(['kundan','lucky','sakshi']);
const validuser=computed( ()=>{
    return userdetail.filter(user=>
    user.startsWith('k')
    );
})

console.log(visibilityState);

// const userfullname = computed(() => {
//   return first_name.value +' '+ last_name.value;
// });

// const userfullname = computed(() => {
    const userfullname = computed({
    get(){
         return first_name.value +' '+ last_name.value;
    },
    set(newvalue){

        [first_name.value,last_name.value]=newvalue.split(' ');

    }
});

 //userfullname.value="Lucky Mishra";


 //odd ven
 const oddeven=computed(()=>{
    return count.value%2 == 0?"even":"odd";
 })

 const evenclass=computed(()=>{

    return oddeven.value == "even"?"bg-pink-500 text-white":"bg-blue-500 text-white";
 })

 function toggleVisibility() {
  visibilityState.value = visibilityState.value === 'hidden' ? 'show' : 'hidden';
  console.log('Visibility:', visibilityState.value); // For debugging
}

</script>