<template>
  <nav class="navbar">
    <h3>
      Task Manager
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Все задачи</router-link>
      </li>
      <li v-for="(item, i) in statusMap"
          :key="i"
      >
        <router-link :to="`/${i}`">{{ item.navTitle }}</router-link>
      </li>
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {statusMap} from "@/components/AppStatus";
</script>
