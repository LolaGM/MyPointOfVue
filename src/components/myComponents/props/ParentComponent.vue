<script>
//insertamos datos para que se nos devuelva al llamarlos en el SPAN de TEMPLATE
//importamos y exportamos al hijo al que llamamos más abajo
import ChildComponent from './ChildComponent.vue';
export default {
    //llamamos al componente
    components:{ ChildComponent},
    data(){
        return {
            movieTitle:"WonderWoman",
            brand:"",
        }
    }
}
</script>
<!-- Llamo a la variable con dos bigotes dentro de SPAN -->
<template>
    <div>
        <h2>I'm your father</h2>
        <span>{{ movieTitle }}</span>
<!-- Llamamos al componente hijo -->
        <ChildComponent :movieTitle="movieTitle"/>
<!-- Queremos imprimir en el padre la variable que contiene el hijo -->
        <span>Brand: {{ brand }}</span>
    </div>
</template>

<style>
h2{
    color:darkgreen;
    margin-top:5px;
}
h5{
    color:blue;
    margin-top:5px;
}
p{
    color:green;
    margin-top:5px;
}
</style>