<script>
import axios from 'axios'

export default {
    data(){
        return{
            chuckData:null,//variable que contiene vacío NULL
        }        
    },
    //AXIOS usa ciclos de vida y cogemos un HOOK llamado CREATED: método que dentro llama a la librearía AXIOS y con un get llamar a la URL de la API y específicamente a PIKACHU 
    created(){
        axios.get('https://api.chucknorris.io/jokes/random').then((result) => {
            this.chuckData = result.data
        })
    }
}
</script>

<template>
        <div>
            <h1>CHUCK NORRIS</h1>
            <div v-if="chuckData">
                <h2>{{ chuckData.value }}</h2>

                <h3>ID: {{ chuckData.id }}</h3>
            </div>
        </div>
</template>

<style>

</style>