<template>
    <form @submit.prevent="submit">
        <div class="form-group">
            <input class="form-control mb-1" rows="1" type="text" placeholder="Заголовок" v-model="title">
            <input class="form-control mb-1" rows="3" type="text" placeholder="Текст" v-model="body">
            <button class="btn btn-primary" type="submit">Создать</button>
        </div>    
    </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        submit(){
            this.createPost({
                title: this.title || 'Новая позиция',
                body: this.body || 'Описание позции',
                id: Date.now()
            })
            this.title = ''
            this.body = ''
        }
    }
}
</script>
