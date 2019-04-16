import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Error404 from './views/404.vue'

import Book from './views/Book/Book.vue'
import Movie from './views/Movie/Movie.vue'
import Music from './views/Music/Music.vue'
import Photo from './views/Photo/Photo.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'book',
      component: Book
    },
    {
      path: '/movie',
      name: 'movie',
      component:Movie
    },
    {
      path:'/Music',
      name:'music',
      component:Music
    },
    {
      path:'/Photo',
      name:'photo',
      component:Photo
    },{
      path:'*',
      component:Error404
    }
  ]
})
