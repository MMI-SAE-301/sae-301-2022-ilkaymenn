<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types";
import type { label } from "@formkit/inputs";
import { ref } from "vue";
import FormKitListColors from "./FormKitListColors .vue";
import SvgFace from "./SvgFace.vue";
import SvgProfil from "./SvgProfil.vue";

const montre = ref<Montre>({});
</script>

<template>
  <SvgFace class="h-20" v-bind="montre"></SvgFace>
  <SvgProfil class="h-20" v-bind="montre"></SvgProfil>

  <FormKit type="form" v-model="montre">
    <FormKitListColors name="design" label="design" />
    <FormKitListColors name="boitier" label="boitier" />
    <FormKitListColors name="bracelets" label="bracelets" />
  </FormKit>
</template>
