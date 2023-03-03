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

<!-- Usamos una card de BOOTSTRAP cuyo enlace está en main.js -->
<template>

    <div v-if="pokemonData">
        <div class="card pokemonCard" style="width: 18rem;">
            <h5 class="card-title">Name: {{ pokemonData.name }}</h5>
            <img class="imgPokemon card-img-top" :src="pokemonData.sprites.other.dream_world.front_default" alt='{{ pokemonData.name }}'>
            <div class="card-body">
                <p class="card-text">HP: {{ pokemonData.stats[0].base_stat }}</p>
                <p>Speed: {{ pokemonData.stats[1].base_stat }}</p>
                <p>Attack: {{ pokemonData.stats[3].base_stat }}</p>
                <p>Weight: {{ pokemonData.weight }}</p>
                <p>Height: {{ pokemonData.height }}</p>
            </div>
        </div>
    </div>

</template>

<style>

.pokemonCard{
    display: flex;
    margin: auto;
    margin-top:5%;
    text-align: center;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.imgPokemon{
    width:150px;
    margin: auto;
}

</style>