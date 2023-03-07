<script>
export default {
    data() {
        //variables header conun string de texto ''
        //array [] con sabores vacío
        return {
            header: 'Vue ready',
            flavors: [],
        }
    },
}
</script>

<!-- Vamos a imprimir lo que contiene la variable HEADER del SCRIPT en la que hemos indicado un texto (string) -->
<!-- Vamos a imprimir lo que contiene la variable HEADER del SCRIPT en la que hemos indicado un texto (string) -->     
<!-- Le vamos a meter un INPUT que es el HEADER 
DEntro de INPUT voy a crear un V-MODEL que contiene una variable declarada en SCRIPT 
Cuando ejecuto el código en el navegador, las variables las pone en la memoria. NO recarga la paguina y la guarda aqyu en la variable reejcutando el código.
CUando cambié el código en HEADER se cambiará en tiempo real el título sin recargar la página-->  
<template>
    <div>
        <h3>V-MODEL directive</h3>
        <h3>{{ header }}</h3>
        <input type="text" v-model="header" />
        <div class="flavourOptions">
            <label>
            <input 
                v-model="flavors"
                type="checkbox"
                id="coco"
                value="coco"
                name="coco"
            />
            Coco
            </label>
            <label>
                <input 
                    v-model="flavors"
                    type="checkbox"
                    id="chocolate"
                    value="chocolate"
                    name="chocolate"
                />
                Chocolate
            </label>
            <label>
                <input 
                    v-model="flavors"
                    type="checkbox"
                    id="oreo"
                    value="oreo"
                    name="oreo"
                />
                Oreo
            </label>
        </div>        
    </div>
</template>
<!-- Esto no tiene lógica en un formulario. Es más para mostrar opciones o una lista de personas convocadas
Esto es para reactividad: cambio en tiempo real -->
<style>

.flavourOptions{
    display: flex;
    justify-content:space-between ;
    color:green;
}

</style>