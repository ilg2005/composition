<template>
  <h1 class="text-white center" v-if="!tasksInLocalStorage.length">Задач пока нет</h1>
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
import {ref, watch, computed, onBeforeMount} from "vue";
import {statusMap} from "@/components/AppStatus";

const store = useStore()
const router = useRouter()
const route = useRoute()

let status = ref()
const tasksInLocalStorage = store.getters.getAllTasks


onBeforeMount(() => {

  status.value = route.params.status
  if (status.value && !Object.keys(statusMap).includes(status.value)) {
    status.value = ''
    router.push('/notFound')
  }
})

let adjective = computed(() => status.value ? statusMap[status.value].adj : '')

watch(() => route.path, () => {
      status.value = route.params.status
    }
)

let tasks = computed(() => store.getters.filterTasksByStatus(status.value))

</script>
