<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="task.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input type="date" id="date" v-model.trim="task.deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="task.description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script setup>
import {reactive, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import moment from 'moment'
import ls from "@/use/localStorage";

const router = useRouter()
const store = useStore()

const task = reactive({
  title: '',
  deadline: '',
  description: '',
  status: 'active'
})

const isValid = computed(() => {
  return !Object.values(task).includes('')
})


const createTask = () => {
  if (isValid.value) {
    task.id = Date.now()

    task.status = moment(task.deadline).unix() >= moment().startOf('day').unix() ? 'active' : 'cancelled'

    store.commit('addNewTask', task)
    ls.updateLocalStorage(store.getters.getAllTasks)

    router.push('/')
  }
}
</script>
