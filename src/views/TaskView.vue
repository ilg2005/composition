<template>
  <div class="card">
    <h2>{{ selectedTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="selectedTask.status" /></p>
    <p><strong>Дедлайн</strong>: {{ new Date(selectedTask.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ selectedTask.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script setup>
import AppStatus from '../components/AppStatus'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

const route = useRoute()
const store = useStore()

const id = route.params.id
const selectedTask = store.getters.getSelectedTask(id)
console.log(selectedTask)

</script>

<style scoped>

</style>
