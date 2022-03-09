<template>
  <span :class="['badge', typesMap[type].class ]">{{ typesMap[type].description }}</span>
</template>

<script setup>
import {reactive} from 'vue'

defineProps({type: String})

const typesMap = reactive({
  'active': {class: 'primary', description: 'Активен'},
  'done': {class: 'primary', description: 'Завершен'},
  'cancelled': {class: 'danger', description: 'Отменен'},
  'pending': {class: 'warning', description: 'Выполняется'}
})

</script>
