<template>
    <div class="mb-3">
        <input class="form-control form-control-dark w-100" type="text" placeholder="Поиск" v-model="search">
    </div>
</template>

<script>
    export default{
        name: "SearchBar",
        props: ['value'],
        computed: {
            search: {                
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }              
            }
        }
    }
</script>
