<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <h1>{{articulo.title}}</h1>
                <p class="small">{{articulo.autor}}</p>
                <p>{{articulo.body}}</p>
                <nuxt-link to="/blog" class="btn btn-primary">Atras</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },
    // async created() {
    //     try {
    //         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
    //         this.articulo = res.data;
    //         const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`);
    //         this.articulo.autor = resAutor.data.name;
    //     } catch(err) {
    //         console.log(err);
    //     }
    // },
    async asyncData({params}) {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            const articulo = res.data;
            const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`);
            articulo.autor = resAutor.data.name;
            return {articulo};
        } catch(err) {
            console.log(err);
            return {err: err}
        }
    }
}
</script>
