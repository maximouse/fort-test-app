<template>
    <div>
        <div class="card mb-3 p-3" v-for="post in posts" :key="post.id">
            
            <div class="card body border-0">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.body}}</p>    
            </div>
            <div class="modal-footer p-1">
                <button class="btn btn-danger btn-sm" @click="removePost(post.id)">Удалить</button>
            </div>
        </div>
    </div>
   
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "Post",
    props: {
        posts: Array
    },
    methods: {
        ...mapMutations(['deletePost']),
        removePost(id){
            this.deletePost(id)
        }
    }
}
</script>

