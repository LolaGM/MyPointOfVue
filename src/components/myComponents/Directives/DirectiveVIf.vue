<script>
export default {
    data() {
        return {
            movies: [],
            newTitle: "",
            adding: false,
        }
    },

/* Creamos dos metodos para intercambiar el valor de un estado */
//Método addMovie que hace método PUSH. Añade +1 al largo que tenga el título y con this.newTitle lo pone vacío 
    methods: {
        addMovie(){
            this.movies.push({
                id: this.movies.length + 1,
                title: this.newTitle,
            })
            this.newTitle =''
        },

//Método showInputToAdd(state) y le pasamos como parámetro un STATE.Que pone el estado que le pasamos como parámetro () y el title lo pone vacío después
        showInputToAdd(state){
            this.adding = state
            this.newTitle =''
        },
    },
}
</script>

<template>
    <div>
        <h3>Directives v-if and v-else</h3>
        <label class="m-3">Testing directive v-if and v-else</label>    
        <!-- Hay un botón que SI adding es FALSE, va a marcar este valor ADD MOVIE -->
        <!--Hay dos botones: o aparece ADD o aparece CANCEL. Tenemos un ONCLICK como en JAVASCRIPT dentro de V-ON-->
        <button        
            v-if="adding == false"
            v-on:click="showInputToAdd(true)">
            Add Movie 
        </button>
        <!-- Hay un botón que SI adding es TRUE,ya ponemos un V-ELSE y con él hacemos que aparezca directamente CANCEL. O aparece ADD MOVIE o aparece CANCEL-->
    <!-- La arroba escrita delante es lo mismo que poner v-on. POdríamos usarla para sustituir el V-ON -->        <button
            v-else
            v-on:click="showInputToAdd(false)">
            Cancel 
        </button>
        <div v-if="adding">
            <!-- La arroba escrita  donde CLICK es lo mismo que poner v-on -->
            <input 
                id="add-movie-input"
                @keyup.enter="addMovie()" 
                v-model="newTitle"
                placeholder="Add a movie"
            />
            <button v-on:click="addMovie()" class="btn btn-primary">+</button>
        </div>
        <!-- Span que significa que imprimes esto cuando V-if es igual a cero . La frase Please add movie solo aparece cuando no hay películas-->
        <span v-if="movies.length == 0" class="m-3">Please add a movie</span>
        <ul class="m-3">
            <!--En VUE3 un array se recorre con V-FOR.COn V-FOR vamos a recorrer el array pero al reves de cómo se suele hacer un FOREACH $movies as $movie.Le decimos que la KEY es el ID.
            COn esto imprime en pantalla una lista desordenada-->
            <template v-for="(movie, key) in movies" :key="movie.id">
                <li :id="key">{{ movie.id }}: {{ movie.title }}</li>
            </template>
        </ul>
    </div>
  <!-- Si recargo la página se pierde todo y el array se queda vacío. NO hay base de datos donde guardar.
  VUE es como un JSON que se actualiza automáticamente si le doy la instrucción.
De ahí que la página se actualice de forma dinámica -->
</template>

<style>
</style>