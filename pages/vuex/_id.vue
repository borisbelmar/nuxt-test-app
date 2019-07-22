<template>
    <div class="container mb-5">
        <h2>Editar tarea</h2>
        {{tarea}}
        <form @submit.prevent="editarTarea(tarea)">
            <input type="text" class="form-control mb-2" v-model="tarea.nombre">
            <b-button variant="warning" type="submit">Editar</b-button>
        </form>
    </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapActions } from 'vuex';
export default {
    fetch({store, params}) {
        return db.collection('tareas').doc(params.id).get()
        .then(doc => {
            if(doc.exists) {
                let tarea = doc.data();
                tarea.id = doc.id;
                return store.commit('getTarea', tarea);
            }
        })
        .catch(err => console.log(err))
    },
    computed: {
        tarea: {
            get() {
                return {
                    nombre: this.$store.state.tarea.nombre,
                    id: this.$store.state.tarea.id
                }
            },
            set(nombre) {
                return this.$store.commit('setNombreTarea', nombre)
            }
        }
    },
    methods: {
        ...mapActions(['editarTarea'])
    }
}
</script>
