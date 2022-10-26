<script setup lang="ts">
import FormSvg from "../components/FormSvg.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <FormSvg :id="id" />
</template>
