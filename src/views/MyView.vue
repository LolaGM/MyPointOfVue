<script>
import SingleComponent from '../components/myComponents/SingleComponent.vue'
export default {
  components: { SingleComponent },

}
</script>

<template>
    <div>
        <h1>My Single Page with VUE3 by FEMCODERS</h1>
        <p>Las FEMCODERS P1 Málaga estamos aprendiendo desde cero a usar VUE3. </p>
        <p>Nuestra primera vista en VUE está hecha siguiendo las rutas indicadas en el archivo index.js de la carpeta router.</p>
        <p>No olvidemos ir al archivo App.vue para incluir un enlace a la vista en el menú usando ROUTERLINK y TO para indicar el PATH y el nombre de la vista.</p>
        <p>Usando el atributo SCOPED en la etiqueta STYLE conseguiremos que el estilo sólo afecte al archivo .vue que estamos creando.</p>
        -----------------------------------------------------------
        <SingleComponent/>
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
}

</style>