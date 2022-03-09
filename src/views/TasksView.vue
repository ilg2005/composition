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
import {useRouter} from 'vue-router'
import ls from "@/use/localStorage";

const store = useStore()
const router = useRouter()

const tasks = ls.getTasksFromLocalStorage()

if (tasks) {
  store.commit('updateTasks', tasks)
}

const activeTasksNumber = store.getters.getActiveTasksNumber


</script>
