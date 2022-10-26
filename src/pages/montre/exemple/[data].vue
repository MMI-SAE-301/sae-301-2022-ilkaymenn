<script setup lang="ts">
import FormSvg from "../../../components/FormSvg.vue";
defineProps<{
  data: string;
}>();
</script>
<template>
  <FormSvg :data="JSON.parse(data)" />
</template>
