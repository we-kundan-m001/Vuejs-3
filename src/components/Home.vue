<template>

<div v-if="show">
    <h1>1.This is my Home Componenet</h1><br>

    <p>
    2. In interpolation we can use Mustache syntax &lbrace;&lbrace;  &rbrace;&rbrace; where the data will come dynamically from export default:
    {{ 2 + 5 }}
    </p>
    <p>my name is {{ name + age}}</p><br>


    <!--for vedio no 8th Methods with Params Start-->
    <p>Name from function {{ getName() }}</p>

    <p>The Object function {{ setObj() }}</p>

    <p>The Object function {{ setObj().name }}</p>

     <!--for vedio no 9th Events with Params Start-->
     <p><b> few events are like
        1.on:click
        2:on:dblclick
        3:on:mousemove
    </b></p>

     <button v-on:click="click('lucky')">click me single</button>
     <button v-on:dblclick="click('lucky')">click me double</button>
     <button v-on:mousemove="click('lucky')">Hover me</button>

     <p >hey my current count is <b>{{ count }}</b></p>

     <button v-on:click="ChangeCount()">ChangeCount</button>

      <!--for vedio no 10th Two way binding  Start-->
      <p><b>two way binding means connecting model and view so that both will be directly propotional to each other for this</b> We use
        <b>v-model</b>
      </p>
      <br>
      <p> here view means  the code written inside template and model means the code written inside script </p>

      <input type="text" v-model="count" />
      <p>{{ count }}</p>

   

      <!-- #11 Get input value Start-->
       <p><b> #11 GETTING VALUE FROM INPUT FIELD</b></p>
       <label for="email">Email:<input type="email" v-model="email"/></label><br>
       <label for="username">Username:<input type="text" v-model="username"/></label><br>

       <button v-on:click="GetInputValue()">Get Value</button>

        <!-- #12 Get Checkbox & Radio Button Value-->
        <p><b> #12 Get Checkbox & Radio Button Value</b></p>

        <label for="java">Java:<input type="checkbox" value="java" id="java" v-model="technology"/></label><br>
       <label for="php">PHP:<input type="checkbox" value="php" id="php" v-model="technology"/></label><br>

       <p>You have checked {{ technology }}</p>

       <label for="developer">developer:<input type="radio" value="developer" id="developer" v-model="role"/></label><br>
       <label for="tester">tester:<input type="radio" value="tester" id="tester" v-model="role"/></label><br>

       <p>You have checked {{ role }}</p>
    

       <!-- #13 if else conditions Value -->

       <p><b>#13 if else conditions Value</b></p>
       
       <button v-on:click="Toggle()" >Toggle</button>

        <!-- #14  For Loop and List -->
        <p><b>#14  For Loop and List</b></p>

        <ul>
            <li v-for="item in userlanguage" :key="item">{{ item }}</li>
        </ul>
         <ul>
            <li v-for="item in userdetail " :key="item.name">
                my name is {{ item.name }}
            </li>
         </ul>
        </div>
         <!--#15 Pass Data Parent to Child Component-->

         <p><b>#15 Pass Data Parent to Child Component</b></p>


       
        

</template>

<script>
 export default {
    name: 'HomePage',
    data(){
        return {
            name:'lucky',
            age: 19,
            count:0,
            email:null,
            username:null,
            technology:[],
            role:null,
            show:false,//for if else
            userlanguage:['hindi','english'],
            userdetail: [
            {
                name: "kundan",
                age: 23,
            },
            {
                name: "lucky",
                age: 23,
            },
            {
                name: "priya",
                age: 24,
            }
            ],



        }
    },
    //for method
    methods:{
        getName()
        {
            return 'newmethod'
        },
        setObj(){
            return{
                name: 'lucky',
                age: 22
            }
        },
        click(name){
            console.log(name);
        },
        ChangeCount(){
          
                this.count = parseInt(this.count) + 1;
           
     },
     GetInputValue(){
        console.log(this.email );
        console.log(this.name );
     },
     Toggle(){
        this.show= !this.show;
     }
    },
    
 }
</script>

<style scoped>
  .hidden{
    display:none;
}
</style>