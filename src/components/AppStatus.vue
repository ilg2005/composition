<template>
  <span :class="['badge', typesMap[type].class ]">{{ typesMap[type].translation }}</span>
</template>

<script setup>
import {reactive} from 'vue'

defineProps({type: String})
const typesMap = reactive({
  'active': {class: 'primary', translation: 'Активен'},
  'done': {class: 'primary', translation: 'Завершен'},
  'cancelled': {class: 'danger', translation: 'Отменен'},
  'pending': {class: 'warning', translation: 'В работе'}
})

</script>