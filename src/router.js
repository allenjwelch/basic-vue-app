import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import TodoList from './views/TodoList.vue';
import Examples from './views/Examples.vue';
import Movies from './views/Movies.vue';
import MovieDetail from '@/components/MovieDetail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/todolist',
        name: 'todolist',
        component: TodoList
    },
    {
        path: '/examples',
        name: 'examples',
        component: Examples
    },
    {
        path: '/movies/',
        name: 'movies',
        component: Movies
    },
    {
        path: '/movie/:id',
        name: 'movieDetail',
        component: MovieDetail
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
