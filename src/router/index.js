import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyView from '../views/MyView.vue'
import VueDirectives from '../views/VueDirectives.vue'

import ApiPokemonView from '../views/ApiPokemonView.vue'
import ApiChuckView from '../views/ApiChuckView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  //Aquí creo la ruta con el nombre elegido según nombre del archivo que luego indicaré en APP.VUE
    {
      path: '/myview',
      name: 'MyView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MyView
    },
    {
      path: '/directives',
      name: 'VUE directives',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: VueDirectives
    },
    {
      path: '/pokemon',
      name: 'ApiPokemonView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ApiPokemonView
    },
    {
      path: '/chuck',
      name: 'ApiChuckView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ApiChuckView
    }
  ]
})

export default router
