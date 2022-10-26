<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types";
import { ref } from "vue";
import SvgFace from "./SvgFace.vue";
import SvgProfil from "./SvgProfil.vue";

const montre = ref<Montre>({});
</script>

<template>
  <SvgFace class="h-20" v-bind="montre"></SvgFace>
  <SvgProfil class="h-20" v-bind="montre"></SvgProfil>

  <FormKit type="form" v-model="montre">
    <FormKit
      id="design"
      name="design"
      label="design"
      value="#FFFFFF"
      type="radio"
      :options="colors"
      :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null },
      }"
      input-class="peer sr-only"
      options-class="flex gap-1"
    >
      <template #label="context">
        <div
          class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
          :style="{ backgroundColor: context.option.value }"
        ></div>
        <span class="sr-only">{{ context.option.label }}</span></template
      >
    </FormKit>

    <FormKit
      id="boitier"
      name="boitier"
      label="boitier"
      value="#FFFFFF"
      type="radio"
      :options="colors"
      :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null },
      }"
      input-class="peer sr-only"
      options-class="flex gap-1"
    >
      <template #label="context">
        <div
          class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
          :style="{ backgroundColor: context.option.value }"
        ></div>
        <span class="sr-only">{{ context.option.label }}</span></template
      >
    </FormKit>

    <FormKit
      id="bracelets"
      name="bracelets"
      label="bracelets"
      value="#FFFFFF"
      type="radio"
      :options="colors"
      :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null },
      }"
      input-class="peer sr-only"
      options-class="flex gap-1"
    >
      <template #label="context">
        <div
          class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
          :style="{ backgroundColor: context.option.value }"
        ></div>
        <span class="sr-only">{{ context.option.label }}</span></template
      >
    </FormKit>
  </FormKit>
</template>
