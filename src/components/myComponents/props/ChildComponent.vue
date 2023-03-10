<script>
import { emit } from 'process';

export default {
    //llamamos con los PROPS dentro del hijo a la variable y al tipo de variable
    props:{
        movieTitle: String,
    },
    //para pasar la variable de HIJO a PADRE usamos METHODS
    //le decimos DATA y que devuelva con  nombre de la variable y su valor
    data(){
            return{
                brand:"DC Comics",
            }
        },
    /*Creamos en el componente un botón para que con el evento  CLIC llame a una función SENDBRAND y así envíe del hijo al padre el contenido de la variable . Para ellos creamos ese método y dentro escribimos la variable EMIT*/
    methods: {       
        sendBrand(){ //función sendBrand que con ESTE componente ENVÍA = EMIT una variable
            this.$emit('brand',this.brand) 
            //"con este componente emite envía a brand del padre este brand"
        }
    },
}
</script>
<!-- Queremos que el hijo imprima por pantalla la variable que tiene el PADRE
Aquí esta variable no existe.
La vamos a llamar en SCRIPT con los PROPS indicando NOMBRE de la vaariable y TIPO DE VARIABLE en este caso STRING -->
<template>
    <div>
        <h2>I'm your child</h2>
        <p>Inherited: "{{ movieTitle }}"</p>
        <p>Inherited with suffix or text we want to add: "{{ movieTitle }}-ita"</p>
        <h2>Father inherits data from child</h2>
        <button @click="sendBrand">Send BRAND from CHILD to FATHER</button>
    </div>
</template>
<!-- Creamos un botón para que con el evento llame a una función SENDBRAND y así envíe del hijo al padre el contenido de la variable . Para ellos creamos ese método en el SCRIPT y dentro escribimos la variable EMIT-->
<style lang="CSS" scoped>
h2{
    color:darkgreen;
    margin-top:5px;
}
p{
    color:blue;
    margin-top:5px;
}
</style>