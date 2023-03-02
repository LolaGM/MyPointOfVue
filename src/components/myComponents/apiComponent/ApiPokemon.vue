<script>
import axios from 'axios'

export default {
    data(){
        return{
            pokemonData:null,//variable que contiene vacío NULL
        }        
    },
    //AXIOS usa ciclos de vida y cogemos un HOOK llamado CREATED: método que dentro llama a la librearía AXIOS y con un get llamar a la URL de la API y específicamente a PIKACHU 
    created(){
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((result) => {
            this.pokemonData = result.data
        })
    }
}
</script>

<template>
        <div>
            <h1>Pokemon</h1>
            <div v-if="pokemonData">
                <h2>{{ pokemonData.name }}</h2>
                <img class="imgPokemon" :src="pokemonData.sprites.other.dream_world.front_default" alt='{{ pokemonData.name }}'>

                <h3>HP: {{ pokemonData.stats[0].base_stat }}</h3>
                <h3>HP: {{ pokemonData.stats[0].base_stat }}</h3>
                <h3>HP: {{ pokemonData.stats[0].base_stat }}</h3>
                <h3>HP: {{ pokemonData.stats[0].base_stat }}</h3>



            </div>

        </div>
</template>

<style>
.imgPokemon{
    width:200px;
}
</style>