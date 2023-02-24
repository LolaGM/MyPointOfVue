<script>
export default {
    data(){
        return(
            title : "This is My first Variable",
            person:{
                id:1,
                name: "Lola",
                img: "https://as1.ftcdn.net/v2/jpg/01/13/41/66/1000_F_113416666_a7CuS6cvc6D5P5ezUbsTMexJHm9iAgga.jpg",
            }
        )
    },
};
</script>

<template>    
        <h3>Esto es el RAW</h3>
        <div id="person">
            <h4>{{ person.name }}</h4>
            <h4>{{ person.img }}</h4>

        </div>

    
</template>

<style language="CSS" scoped>
h3{
    color:blue;
}
</style>