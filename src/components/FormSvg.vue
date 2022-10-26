<script setup lang="ts">
import type { Montre } from "@/types";
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import SvgFace from "../components/SvgFace.vue";
import SvgProfil from "../components/SvgProfil.vue";
import FormKitListColors from "./FormKitListColors.vue";

const router = useRouter();
const montre = ref({});

const props = defineProps(["id"]);
if (props.id) {
  // On charge les données de la montre
  let { data, error } = await supabase
    .from("montre")
    .select("*")
    .eq("id_montre", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table montre :", error);
  else montre.value = data[0];
}
async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "montre-edit-id", params: { id: data[0].id } });
  }
}
</script>

<template>
  <main>
    <div class="p-2">
      <ul class="flex gap-1">
        <li><a href="#profil">Profil</a></li>
        <li><a href="#face">Face</a></li>
      </ul>
      <div class="carousel w-64">
        <SvgProfil class="carousel-item w-64" v-bind="montre" id="profil" />
        <SvgFace class="carousel-item w-64" v-bind="montre" id="face" />
      </div>

      <FormKit type="form" v-model="montre" @submit="upsertMontre">
        <FormKitListColors name="design" label="design" />
        <FormKitListColors name="boitier" label="boitier" />
        <FormKitListColors name="bracelets" label="bracelets" />
      </FormKit>
    </div>
  </main>
</template>
