<script>
export default {
    props: {
    movieTitle: String,
    },
    data() {
        return {
        brand: 'DC Comics',
        }
    },
    methods:{
        sendBrand(){
            this.$emit('brand', this.brand)
        }
    }
}
</script>

<template>
    <h2>I'm your Child</h2>
    <h3>Movie Title received From Father: <em>{{ movieTitle }}</em>ita</h3>
    <button @click="sendBrand">sendBrand</button>
</template>

<style lang="css" scoped>
h2{
    color:lightgreen;
}
h3{
    color:olive;
}
button{
    color:white;
    background-color: green;
    border-color: none;
    border-radius: 10px;
    width: 150px;
}
span{
    margin-left: 10px;
    color:blue;
}
</style>