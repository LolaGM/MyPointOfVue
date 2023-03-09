<script>
import ComputedProps from '../components/myComponents/computed-properties/ComputedProps.vue'

export default {
    components: { ComputedProps}

}
</script>

<!-- Dentro de esta vista creada llamo a los componentes creados en carpeta myComponents.
Puedo usar estos componentes tantas veces quiera:botones, párrafos, etc -->
<template>
    <div>
        <ComputedProps/>
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