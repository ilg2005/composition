<template>
  <span :class="['badge', statusMap[type].class ]">{{ statusMap[type].description }}</span>
</template>

<script setup>
defineProps({type: String})

</script>

<script>
export const statusMap = {
  'active': {class: 'primary', description: 'Активен', adj: 'активных', navTitle: 'Активные'},
  'pending': {class: 'warning', description: 'Выполняется', adj: 'выполняемых', navTitle: 'Выполняются'},
  'done': {class: 'primary', description: 'Завершен', adj: 'готовых', navTitle: 'Готовые'},
  'cancelled': {class: 'danger', description: 'Отменен', adj: 'отмененных', navTitle: 'Отмененные'},
}

</script>
