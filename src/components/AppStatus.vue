<template>
  <span :class="['badge', typesMap[type].class ]">{{ typesMap[type].description }}</span>
</template>

<script setup>
import {typesMap} from "@/use/typesMap";

defineProps({type: String})
</script>
