<script>
export default {
    data() {
           //array con 3 países qe queremos imprimir 
        return {
            list:['Spain', 'France', 'Italy', 'Germany', 'Portugal'],
        }
    },
}
</script>
<!-- Convención de VUE de cómo se escribe un FOR 
La key era el index como vimos en el FOR anterior-->
<!--V-FOR recorrre al reves primero KEY y luego COUNTRY.
La directiva V-FOR: Es un FOR mezclado con un FOREACH. Él sabe cuándo pararse
El key poníamos id pero ahora no tenemos objetos: Al no tener ID, hay una conveción que dice:
COUNTRY KEY que está dentro de una LIST
La list es mi array
COUNTRY es la variable
Imprimiremos cada vez una línea. Imprimiremos dos datos:La key y el valor
en el primer elemento del array SPAIN sería KEY 0  valor SPAIN y así sucesivamente con el 1 se van añadiendo elementos-->
<template>
    <div>
        <h3>V-FOR directive</h3>
        <ul>
            <template v-for="(country, key) in list" :key="key">
            <li :id="[key + 1]"> {{ key }}: {{ country }}</li>
            </template>
        </ul>
    </div>

</template>

<style>

li{
    color:green;
}

</style>