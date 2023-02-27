<script>
export default {
    data(){
        return{
            title : "This is My first Variable",
            person:{
                id:1,
                name: "Lola",
                img: "https://as1.ftcdn.net/v2/jpg/01/13/41/66/1000_F_113416666_a7CuS6cvc6D5P5ezUbsTMexJHm9iAgga.jpg",
            },
            msg:"I am a developer in FEMCODERS Málaga Bootcamp",
            direct:"V-FOR,V-ON",
        }
    },
};
</script>

/*Usaremos las directivas V-BIND y V-HTML para usar variables definidas dentro del RETURN.Estas variables pueden cambiar su valor dentro del SCRIPT pero no hará falta cambiarlas dentro de TEMPLATE*/ 
/*Con dos puntos delante del atributo de la etiqueta HTML o simplemente indicando delante v-bind: y el atributo seguidas de la propiedad con un punto y el atributo de esa objeto: person.name o simplemente indicando la propiedad title o msg sin punto*/
/*También podemos usar las directivas para elementos HTML que normalmente no llevan atributos */

<template>    
        <h3>{{ title }}</h3>

        /*Esta directiva permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML.*/
        <h3>V-BIND</h3>
        <div :id="person.id">
            <h4>My name is {{ person.name }}</h4>
            <img :src="person.img" :alt="person.name">
            <img v-bind:src="person.img" :alt="person.name">
        </div>

        /*La directiva V-HTML permite usar directamente con el igual y comillas la propiedad sin tener que llamarla con llaves*/
        <h3>V-HTML</h3>
            <p>{{ msg }}</p>
            <p v-html="msg"></p>
        <h3>Other directives V</h3>
            <p v-html="direct"></p>
</template>

<style language="CSS" scoped>

h3{
    color:lightgreen;
    text-decoration:wavy;
}

h4{
    color:green;
}

img{
    width: 10%;
}

p{
    color:darkolivegreen;
}

</style>