<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
<!-- Aquí añado al menú los enlaces que se encuentran creados por mí en index.js dentro de router -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/myview">My View</RouterLink>
        <RouterLink to="/directives">VUE Directives</RouterLink>
        <RouterLink to="/computed">Computed Properties</RouterLink>
        <RouterLink to="/props">Props and methods</RouterLink>
        <RouterLink to="/pokemon">Pokemon API</RouterLink>
        <RouterLink to="/chuck">Chuck Norris API</RouterLink>
        <RouterLink to="/about">About My Point Of VUE</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
