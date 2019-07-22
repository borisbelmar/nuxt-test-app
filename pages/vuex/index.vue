<template>
    <div class="container">
        <h2>Vuex</h2>
        <form class="mb-5" @submit.prevent="agregarTarea(tarea); tarea = ''">
            <input type="text" class="form-control mb-2" v-model="tarea">
            <b-button type="submit">Agregar</b-button>
        </form>
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} | {{item.nombre}}
                <b-button variant="warning" :to="`/vuex/${item.id}`">Editar</b-button>
                <b-button variant="danger" @click="eliminarTarea(item)">Eliminar</b-button>
                <hr>
            </li>
            
        </ul>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase';
import { mapState, mapActions } from "vuex";
export default {
    // fetch({store}) {
    //     return db.collection('tareas').get()
    //     .then(query => {
    //         const tareas = [];
    //         query.forEach(element => {
    //             tareas.push(element.data());
    //         });
    //         return store.commit('setTareas', tareas);
    //     })
    //     .catch((err) => {
    //         console.log("Error obteniendo documentos: ", err);
    //     })
    // },
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['agregarTarea', 'eliminarTarea'])
    },
    data() {
        return {
            tarea: ''
        }
    }
}
</script>
