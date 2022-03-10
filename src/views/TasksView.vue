<template>
  <h1 class="text-white center" v-if="!tasksFromLS">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего {{ adjective }} задач: {{ tasks.length }}</h3>
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
import {ref, watch, computed, onBeforeMount} from "vue";
import {statusMap} from "@/use/statusMap";

const store = useStore()
const router = useRouter()
const route = useRoute()

let status = ref()
const tasksFromLS = ls.getTasksFromLocalStorage()


onBeforeMount(() => {
  if (tasksFromLS) {
    store.commit('updateTasks', tasksFromLS)
  }

  status.value = route.params.status
  if (!Object.keys(statusMap).includes(status.value)) {
    status.value = ''
    router.push('/')
  }
})

let adjective = computed(() => status.value ? statusMap[status.value].adj : '')

watch(() => route.path, () => {
      status.value = route.params.status
    }
)

let tasks = computed(() => store.getters.filterTasksByStatus(status.value))

</script>
