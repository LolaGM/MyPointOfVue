<!-- Crearemos una variable BOOLEANA (que por defecto es true) dentro de data dentro de return que se llame como hemos indicado en el V-SHOW -->

<!-- Añadimos un método (o fnunción en Javascript) debajo de las variables que contiene data. El método que definimos en el botón con la directiva V-ON: onclick CHANGE STATE -->
<script>
export default {
    data(){
        return{
            isShowing:true,//boolean
        }
    },
    //function changeState en JS también llamada método
    /* Dentro del método usamos un if para que cambie el estado de un booleano cada vez que clicamos el botón */
    methods: {
        changeState(){
            if(this.isShowing){
                //en este estado está TRUE (por defecto) pero queremos que cambie con cada clic
                this.isShowing=false
                //si me quiero salir de la función añado el RETURN
                return
            }
            this.isShowing=true
            //con esto inviertes la función: cambias el valor de una variable con pulsar un botón en HTML
        }
    },
};
</script>
<!-- Usaremos la directiva V-ON para un estado del botón: con ello llamamos a una función.Crea texto que está contenido en SPAN
Luego usaremos la directiva V-SHOW para que con esa variable isShowing que indicamos haga algo y aparezca el texto que indiquemos en SPAN
Al pulsar el botón se mostrará el texto -->
<template>
    <div>
        <h3>V-SHOW and V-ON directives using a button</h3>
        <button v-on:click="changeState">
            <span v-show="isShowing">Once upon a time in Málaga</span>
        </button>
    </div>
</template>

<style>
button{
    color:white;
    background-color: green;
    border-color: none;
    border-radius: 10px;
    width: 150px;
}
</style>