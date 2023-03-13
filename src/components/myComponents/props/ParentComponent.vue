<script>
import ChildComponent from './ChildComponent.vue'
export default {
    components: { ChildComponent },
    
        data() {
            return {
                movieTitle: 'WonderWoman',
                brand :"",
                count : 0,
                }
        },
        methods: {
            receivedBrand(data){
            this.brand = data;
            this.count++;
            }
        },
}

//El receivedBrand coge el data del emit que al principio no vale nada y le sumas +1
//Aunque no cambie sigue sumando
</script>

<template>
    <h2>I'm your Father</h2>
    <span>Movie Title: <em>{{ movieTitle }}</em></span>
    <ChildComponent :movieTitle="movieTitle" @brand="receivedBrand" />
    <!-- Aunque el valor sea el mismo, para él ha habido un cambio -->
    <span>BRAND: <em> {{ brand }}</em> / {{ count }}</span>
</template>

<style lang="css" scoped>
h2{
    color:darkgreen;
}
button{
    color:white;
    background-color: green;
    border-color: none;
    border-radius: 10px;
    width: 150px;
}
span{
    margin-left: 10px;
    color:blue;
}
</style>