<script>
import ParentComponent from '../components/myComponents/props/ParentComponent.vue'
export default {
  components: { ParentComponent },

}
</script>
<template>
    <div>
        <h1>Props from Parent to Child</h1>
        <ParentComponent/>
        <h1>Methods from Child to Parent</h1>

    </div>
</template>


<style>
h1{
    color:#42b883;
}

p{
    color: #34495e;
    font-style: italic;
}
</style>