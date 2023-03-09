<script>
import { emit } from 'process';

export default {
    //llamamos con los PROPS dentro del hijo a la variable y al tipo de variable
    props:{
        movieTitle: String,
    },
    //para pasar la variable de HIJO a PADRE usamos METHODS
    //le decimos DATA y que devuelva con  nombre de la variable y su valor
    methods: {
        data(){
            return{
                brand:"DC Comics",
            }
        },
        sendBrand(){
            this.$emit
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
        <button @click="sendBrand">Send BRAND to FATHER</button>
    </div>
</template>

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