<script>
export default {
    data() {
        return {
            //creamos la sección data y dentro un string que se llama comicTitle
            comicTitle: 'Amazing Spiderman - Vol.1',
            count: 0,
        }
    },
    //Las propiedades computadas Vue son una de las características más potentes del framework. 
    //Permiten establecer comparaciones y lógica elaborada que se re evalúa cada vez que uno de sus valores a comprobar cambia, asegurando su reactividad
    //Nos verifican en nuestro caché si el valor ha cambiado. SI ese valor cambiara, tienes que ejecutar algo en concreto (no recargar la página)
    //dentro de la COMPUTADA tenemos dos funciones:el titulo al reves y la barra de progreso
    //La reversedComicTitle invierte el orden del STRING declarado en DATA
    computed: {
        reversedComicTitle() {
            //coge la variable y dale la vuelta y la unes
            return this.comicTitle.split('').reverse().join('')
        },
        //dentro de computada crreamos una función para la barra de carga
        //Si la variable count, es más pequeña que 20, con BOOTSTRAP le indicamos colores
        barColor() {
            return {
                'bg-sucess': this.count > 20,
                'bg-warning': this.count >= 20 && this.count <= 30,
                'bg-alert': this.count > 30,
            }
        }
    }
}
</script>
 <!-- La computed nos permite lanzar una función.
        El valor de la variable introducida en el input cambia y cambia el título y lo pone al revés
        -->
        <!-- Cada vez que haya un cambio en comicTitle, tienes que re ejecutar la función que pedimos
        Imprimimos dentro de un DIV comicTitle  que sacará lo que contiene DATA -->
 <template>
    <div class="my-4">
        <h1>Computed property</h1>       
        <div>
            <p>Imprime lo que contiene la variable:</p>
            <h5>Movie title: {{ comicTitle }}</h5>
            <p>Imprime lo que contiene la variable pero al revés:</p>
            <h5>Movie title: reversed: {{ reversedComicTitle }}</h5>  
            <!-- Con V-model dentro de INPUT re ejecutamos la función completa: como hay un cambio la tenemos que relanzar. Cada vez que se toca el teclado y se escribe, se reejectuta la computed -->
            <input type="text" v-model="comicTitle" />
        </div>
        <!-- Barra de progreso de una cuenta 
        La variable $event la ha puest VUE al llamar con V la arroba que representa el evento CLICK cuando pulsamos en más o menos en el navegador-->
        <h4>Progress bar pressing on blue and red buttons</h4>
        <div class="my-4">
            <button class="me-3 btn btn-primary" @click="count++">+</button>
            <button class="btn btn-danger" @click="count--">-</button>
            <!-- IMprime el valor de esa cuenta -->
            <h5>Contador: {{ count }}</h5>
            <!--También tenemos una barra de progreso hecha con BOOTSTRAP que se usa por ejemplo para fuerza de contraseñas en un LOGIN de acceso a la web-->  
            <div class="progress">
                <div
                    :class="['progress-bar', barColor]"
                    role="progressbar"
                    :style="{width: count +'%'}"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    >
                    {{ count }}%
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Indicamos a bootstrap para el estilo además de nuestros propios estilos -->
<style lang="css">
@import "bootstrap/dist/css/bootstrap.min.css";
h4{
    color:darkgreen;
    margin-top:5px;
}
h5{
    color:blue;
    margin-top:5px;
}
p{
    color:green;
    margin-top:5px;
}
</style>