<template>
    <h1>This is child ChildComponent</h1>
    <div class="bg-red-500 text-white">
    Tailwind is working!
  </div>
    <table>
        <tr v-for ="item in userdetail" :key="item.id" >
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.updated_at }}</td>
        </tr>
    </table>

    <button v-on:click="callapi()">Api call</button>
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

table{
    width:100%;

}
</style>