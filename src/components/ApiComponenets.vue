<template>
    <h1>This Is about Option api and Composite api</h1>

    <p>option api</p>

    <p>The data is comming from option api <b>{{ filterlanguage }}</b></p>

</template>

<script>

export default{
    data(){
        return{
            techonolgy:['php','js' ,'react'],
        }
    },
    computed:{
        filterlanguage(){
            return this.techonolgy.filter(language =>
                language.startsWith('j')
            );
        }
    }
}
</script>