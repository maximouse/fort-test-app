<template>
    <div>
    <div class="container-fluid">
      <div class="row"> 
        <div class="col-2 bg-secondary ">
           <div class="make-me-sticky">
          <div class="container bg-secondary ">
            <nav class="bg-secondary sidebar">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"><img width="100" height="50" src="../assets/fort_logo.png" alt=""></a>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light">
              <span class="font-weight-light">Меню</span>
              <a class="d-flex align-items-center text-light" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav nav-pills flex-column 1-bottom">
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="home"></span>
                  <i class="fa fa-map-o" aria-hidden="true"></i> Панель <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="file"></span>
                  <i class="fa fa-puzzle-piece" aria-hidden="true"></i> Расширения
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="shopping-cart"></span>
                 <i class="fa fa-paint-brush" aria-hidden="true"></i> Дизайн
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-light active" href="#">
                  <span data-feather="users"></span>
                  <i class="fa fa-line-chart" aria-hidden="true"></i> Продажи
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="bar-chart-2"></span>
                  <i class="fa fa-mars-double" aria-hidden="true"></i> Покупатели
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="layers"></span>
                 <i class="fa fa-bar-chart" aria-hidden="true"></i> Маркетинг
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="layers"></span>
                  <i class="fa fa-server" aria-hidden="true"></i> Система
                </a>
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light">
              <span class="font-weight-light">Поддержка</span>
              <a class="d-flex align-items-center text-light" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav nav-pills flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="file-text"></span>
                  <i class="fa fa-life-ring" aria-hidden="true"></i> Нужна помощь?
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="file-text"></span>
                  <i class="fa fa-users" aria-hidden="true"></i> Контакты
                </a>
              </li>    
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light">
              <span class="font-weight-light">Настройки</span>
              <a class="d-flex align-items-center text-light" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav nav-pills flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="file-text"></span>
                  <i class="fa fa-cog" aria-hidden="true"></i> Настройки
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="file-text"></span>
                 <i class="fa fa-moon-o" aria-hidden="true"></i> Темы
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  <span data-feather="file-text"></span>
                <i class="fa fa-sign-out" aria-hidden="true"></i> Выйти
                </a>
              </li>
            </ul>  
          </nav>
          </div>
        </div>
        </div>
        <div class="col-10">
          <nav class="row navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 justify-content-end">
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap m-0">
                    <a class="nav-link" href="#">
                      <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                      <br>
                      User
                    </a>
                </li>
                
            </ul>
          </nav>
          <main role="main" class="row ml-sm-auto col pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Позиции</h1>
          </div>
          <div class="main">
          <div class="row">
            <div class="col-8 posts">
                <div class="container">
                  <Search v-model="search"></Search>
                </div>
                <div class="container">
                  <Post v-if="filteredPosts.length > 0" :posts="filteredPosts"  />
                  <div v-else class="card mb-3 p-3"><h2>No posts...</h2></div>
                </div>
                
            </div>
            <div class="col-4 tools">
                <PostForm />
                <div class="card postCounter p-3">Количество позиций: {{postCount}}</div>
            </div>
          </div>
        </div>
        </main>
        </div>
      </div>
    </div>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import PostForm from './PostForm.vue'
import Post from './Post.vue'
import Search from './SearchBar.vue'
    export default{
        name: "App",
        components: {
            PostForm,
            Post,
            Search
        },
        data(){
            return{
                message: "Cards",
                search: ""
            }
        },
        methods: {
           ...mapActions(['fetchPosts', 'deletePost']),
           filterByValue(array, string){
                return array.filter(o =>
                    Object.keys(o).some(k =>  o.body.toLowerCase().includes(string.toLowerCase()) || o.title.toLowerCase().includes(string.toLowerCase())))
            },
            
        },
        computed: {
            ...mapGetters(["allPosts", "postCount"]),
            filteredPosts() {
                if(this.search){
                    return this.filterByValue(this.allPosts, this.search)
                } else {
                    return this.allPosts
                }
            }      
        },
        async mounted(){
            this.fetchPosts()
        }
    }
</script>

