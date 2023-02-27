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

<template>    
        <h3>{{ title }}</h3>
        <h3>V-BIND</h3>
        <div :id="person.id">
            <h4>My name is {{ person.name }}</h4>
            <img :src="person.img" :alt="person.name">
            <img v-bind:src="person.img" :alt="person.name">

        </div>
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