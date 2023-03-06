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

<!-- Usamos una card de BOOTSTRAP cuyo enlace está en main.js -->
<template>
    <div v-if="chuckData">
        <h1>API#2 CHUCK NORRIS</h1>

        <div class="card chuckCard" style="width: 18rem;">
            <h2>CHUCK NORRIS</h2>
            <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" class="card-img-top imgChuck" alt="Chuck Norris Api Logo">
            <div class="card-body">
                <p class="card-text">JOKE: {{ chuckData.value }}</p>
                <p class="card-text">ID: {{ chuckData.id }}</p>
            </div>
        </div>
    </div>        
</template>

<style>

h1{
    color:#42b883;
    text-align: center;
}

h2{
    text-align: center;

}

.chuckCard{
    display: flex;
    margin: auto;
    margin-top:5%;
    text-align: left;
    font-family: 'Courier New', Courier, monospace;
}

.imgChuck{
    width:250px;
    margin: auto;
}

</style>