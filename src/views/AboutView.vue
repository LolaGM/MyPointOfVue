<template>
  <div class="about">
      <div>
        <h1>GITHUB</h1>
        <a href="https://github.com/LolaGM/MyPointOfVue" target="_blank">My Point of VUE</a>
      </div>
      <div>
        <a href="https://github.com/LolaGM/MyPointOfVue" target="_blank" alt="My Point of Vue Logo"><img alt="My Point Of Vue logo" class="logo" src="@/assets/PointOfVueLogo1.jpg" /></a>
      </div>
  </div>  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .logo{
    width: 80%;
    height: 40%;
  }
}
@media (max-width: 480px) {
  .about {
    min-height: 100vh;
    display: flex;
    margin-top: 5vh;
    text-align: center;
  }
  .logo{
    width: 40%;
    height: 20%;
  }
}
</style>
