<template>
  <h1 class="text-white center" v-if="!tasks">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasksNumber }}</h3>
    <div class="card"
         v-for="task of tasks"
         :key="task.id"
    >
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.deadline).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="router.push(`/task/${task.id}`)">Посмотреть</button>
    </div>
  </div>
</template>

<script setup>
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
import ls from "@/use/localStorage";
import {ref, watch} from "vue";

const store = useStore()
const router = useRouter()
const route = useRoute()

let tasks = ref(ls.getTasksFromLocalStorage())

if (tasks.value) {
  store.commit('updateTasks', tasks.value)
}

let status = route.params.status

watch(() => route.path, () => {
      status = route.params.status
      if (status) {
        tasks.value = store.getters.filterTasksByStatus(status)
        console.log(tasks.value)
      } else {
        tasks.value = store.getters.getAllTasks
      }
    }
)


const activeTasksNumber = store.getters.getActiveTasksNumber


</script>
