<template>
    <h1>This is child ChildComponent</h1>
   
    <table class=" table-auto w-full">
        <tr><th>first_name</th><th>last_name</th><th>phone</th></tr>
        <tr v-for ="item in userdetail" :key="item.id" >
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.phone }}</td>
        </tr>
    </table>

    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" v-on:click="callapi()">
  Api call
</button>

</template>

<script>
export default {
    name: 'ChildComponent',
    data(){
        return{
            userdetail:null,

        }
    },
    methods:{
        async callapi(){
            try{
                const response=await fetch('http://127.0.0.1:8000/api/userdetail');
                if(response.ok){
                    const data=await response.json();
                    console.log(data.data);
                    this.userdetail=data.data;
                }else{
                    console.log(response.status);
                }
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>