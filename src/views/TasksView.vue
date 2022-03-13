<template>
  <h1 class="text-white center" v-if="!tasksInLocalStorage.length">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего {{ adjective }} задач: {{ tasks.length }}</h3>
    <task-card-view v-for="task of tasks"
                    :key="task.id"
                    :task="task"
    >
    </task-card-view>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
import {ref, watch, computed, onBeforeMount} from "vue";
import {statusMap} from "@/components/AppStatus";
import TaskCardView from "@/views/TaskCardView"

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
