<script>
import DirectiveVShow from '../components/myComponents/Directives/DirectiveVShow.vue';
import DirectiveVIf from '../components/myComponents/Directives/DirectiveVIf.vue';


export default {
  components: { DirectiveVShow, DirectiveVIf }

}
</script>

<!-- Dentro de esta vista creada llamo a los componentes creados en carpeta myComponents.
Puedo usar estos componentes tantas veces quiera:botones, párrafos, etc -->

<template>
    <div>
        <h1>VUE directives</h1>
        <RawHtmlData/>
        --------------------------
        <DirectiveVShow/>
        --------------------------
        <DirectiveVIf/>
        --------------------------


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