<script>
import SingleComponent from '../components/myComponents/SingleComponent.vue'
export default {
  components: { SingleComponent },

}
</script>

<!-- Dentro de esta vista creada llamo a los componentes creados en carpeta myComponents.
Puedo usar estos componentes tantas veces quiera:botones, párrafos, etc -->
<template>
    <div>
        <h1>My Single PAGE with VUE3 by FEMCODERS</h1>
        <p>Las FEMCODERS P1 Málaga estamos aprendiendo desde cero a usar VUE3. </p>
        <ul>
            <li><p>Nuestra primera vista en VUE está hecha siguiendo las rutas indicadas en el archivo index.js de la carpeta router.</p></li>
            <li><p>No olvidemos ir al archivo App.vue para incluir un enlace a la vista en el menú usando ROUTERLINK y TO para indicar el PATH y el nombre de la vista.</p></li>
            <li><p>Usando el atributo SCOPED en la etiqueta STYLE conseguiremos que el estilo sólo afecte al archivo .vue que estamos creando.</p></li>    
        </ul>        
        -----------------------------------------------------------
        <SingleComponent/>      

    </div>
</template>

<style language="CSS" scoped>
h1{
    color:#42b883;
}

p{
    color: #34495e;
    font-style: italic;
}

</style>