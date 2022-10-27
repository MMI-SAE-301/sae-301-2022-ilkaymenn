<template>
  <div>
    <h1>wfihvfbvn</h1>
    <FormSuppression :id="id" />
  </div>
</template>

<script setup lang="ts">
import FormSuppression from "@/components/FormSuppression.vue";

defineProps<{
  id: string;
}>();
</script>
