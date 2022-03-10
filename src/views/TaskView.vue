<template>
  <div class="card" v-if="selectedTask">
    <h2>{{ selectedTask.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="selectedTask.status"/>
    </p>
    <p><strong>Дедлайн</strong>: {{ new Date(selectedTask.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ selectedTask.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script setup>
import AppStatus from '../components/AppStatus'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import ls from "@/use/localStorage";

const route = useRoute()
const store = useStore()

const tasksFromLS = ls.getTasksFromLocalStorage()
let tasks = store.commit('updateTasks', tasksFromLS)

const id = route.params.id
const selectedTask = store.getters.getSelectedTask(id)


const changeStatus = (status) => {
  store.commit('changeSelectedTaskStatus', {id, status})
  tasks = store.getters.getAllTasks
  ls.updateLocalStorage(tasks)
}

</script>
