<script setup lang="ts">
import type { Montre } from "@/types";
import { supabase } from "@/supabase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SvgFace from "../components/SvgFace.vue";
import SvgProfil from "../components/SvgProfil.vue";
// import FormKitListColors from "./FormKitListColors.vue";

const router = useRouter();
const Montre = ref({});
const props = defineProps(["id"]);
if (props.id) {
  // On charge les données de la maison
  let { data, error } = await supabase
    .from("montre")
    .select("*")
    .eq("id_montre", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table Maison :", error);
  else montre.value = data[0];
}

async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "personnalisation", params: { id: data[0].id } });
  }
}

const montre = ref<Montre>(props.data ?? {});
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
