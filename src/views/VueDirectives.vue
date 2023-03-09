<script>
import RawHtmlData from '../components/myComponents/RawHtmlData.vue';
import DirectiveVShow from '../components/myComponents/Directives/DirectiveVShow.vue';
import DirectiveVIf from '../components/myComponents/Directives/DirectiveVIf.vue';
import DirectiveVModel from '../components/myComponents/Directives/DirectiveVModel.vue';
import DirectiveVFor from '../components/myComponents/Directives/DirectiveVFor.vue';
import ComputedProps from '../components/myComponents/computed-properties/ComputedProps.vue'

export default {
    components: { RawHtmlData, DirectiveVShow, DirectiveVIf ,DirectiveVModel, DirectiveVFor, ComputedProps}

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
        <DirectiveVModel/>
        --------------------------
        <DirectiveVFor/>
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