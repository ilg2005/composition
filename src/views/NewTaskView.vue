<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input type="date" id="date" v-model="task.deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script setup>
import {reactive, computed,} from 'vue'

const task = reactive({
  id: Date.now(),
  title: null,
  deadline: null,
  description: null,
  status: 'active'
})

const isValid = computed(() => {
  return !Object.values(task).includes(null)
})


const createTask = () => {
  if (isValid.value) {
    console.log(task)
  }
}
</script>
