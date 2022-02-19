<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>home.vue</h1>
  </div>
</template>

<style scoped></style>
