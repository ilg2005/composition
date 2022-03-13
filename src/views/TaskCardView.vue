<template>
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
</template>

<script setup>
import {useRouter} from "vue-router";
import AppStatus from "@/components/AppStatus"

const router = useRouter()
defineProps(['task'])

</script>