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
  <div>
    <main>
      <div class="flex justify-around bg-grisPages p-5 text-noir">
        <div class="hautG">
          <p class="azonix text-xl">L'Azox 3700</p>
        </div>

        <div class="justify-items-center">
          <!-- <ul class="flex gap-1">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#face">Face</a></li>
          </ul> -->
          <div class="carousel w-64">
            <SvgProfil class="carousel-item w-64" v-bind="montre" id="profil" />
            <SvgFace class="carousel-item w-64" v-bind="montre" id="face" />
          </div>
        </div>

        <div class="grid content-between">
          <div class="grid justify-items-center">
            <p class="azonix hautD text-xl">320.99€</p>
            <p class="azonix hautD rayer text-base">450.99€</p>
          </div>

          <div class="basD space-x-2">
            <div>
              <input
                type="radio"
                id="paiement"
                name="paiement"
                value="paiement"
              />
              <label class="azonix text-base" for="paiement"
                >paiement en 4 fois</label
              >
            </div>
            <div>
              <input
                type="radio"
                id="commander"
                name="commander"
                value="commander"
              />
              <label class="azonix text-2xl" for="paiement">commander</label>
            </div>
          </div>
        </div>
      </div>

      <FormKit type="form" v-model="montre" @submit="upsertMontre">
        <FormKitListColors name="design" label="design" />
        <FormKitListColors name="boitier" label="boitier" />
        <FormKitListColors name="bracelets" label="bracelets" />
      </FormKit>
    </main>
  </div>
</template>

<style scoped>
.rayer {
  text-decoration: line-through;
}
</style>
