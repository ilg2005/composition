<template>
  <span :class="['badge', statusMap[type].class ]">{{ statusMap[type].description }}</span>
</template>

<script setup>
import {statusMap} from "@/use/statusMap";

defineProps({type: String})
</script>
