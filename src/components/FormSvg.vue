<script setup lang="ts">
import { colors } from "@/types";
//import type { Montre } from "@/types";
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import SvgFace from "../components/SvgFace.vue";
import SvgProfil from "../components/SvgProfil.vue";
//import FormKitListColors from "./FormKitListColors.vue";

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

        <div class="">
          <ul class="flex items-center gap-1 space-x-10">
            <li>
              <a href="#profil"
                ><img
                  src="../../public/icones/flechesG.png"
                  alt="Icônes flèches gauches"
              /></a>
            </li>
            <div class="carousel w-64">
              <SvgProfil
                class="carousel-item w-64"
                v-bind="montre"
                id="profil"
              />
              <SvgFace class="carousel-item w-64" v-bind="montre" id="face" />
            </div>
            <li>
              <a href="#face"
                ><img
                  src="../../public/icones/flechesD.png"
                  alt="Icônes flèches droites"
              /></a>
            </li>
          </ul>
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

      <div>
        <div class="-m-5 flex justify-between bg-noirPages p-10 text-blanc">
          <ul class="azonix grid w-24 justify-items-center space-y-4">
            <li><a href="#slide1">Ecran</a></li>
            <li><a href="#slide2">Boitier</a></li>
            <li><a href="#slide3">Bracelet</a></li>
          </ul>

          <FormKit type="form" v-model="montre" @submit="upsertMontre">
            <div class="carousel w-48 text-center">
              <div class="carousel-item text-xl">
                <FormKit
                  id="slide1"
                  name="design"
                  label="Ecran"
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
                    <span class="sr-only">{{
                      context.option.label
                    }}</span></template
                  >
                </FormKit>
              </div>
              <div class="carousel-item text-xl">
                <FormKit
                  id="slide2"
                  name="boitier"
                  label="Boitier"
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
                    <span class="sr-only">{{
                      context.option.label
                    }}</span></template
                  >
                </FormKit>
              </div>
              <div class="carousel-item text-xl">
                <FormKit
                  id="slide3"
                  name="bracelets"
                  label="Bracelet"
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
                    <span class="sr-only">{{
                      context.option.label
                    }}</span></template
                  >
                </FormKit>
              </div>
            </div>
          </FormKit>

          <div class="grid justify-items-center">
            <p class="azonix">ecran</p>
            <img
              src="../../public/images/ecran.png"
              alt="Image d'écran de la montre connectée. "
              class="h-20"
            />
          </div>
        </div>
      </div>

      <!--<ul class="w-24">
        <li><a href="#slide1">Feuille</a></li>
        <li><a href="#slide2">Corps</a></li>
        <li><a href="#slide3">Points</a></li>
      </ul>

      <FormKit type="form" v-model="montre" @submit="upsertMontre">
        <FormKitListColors name="design" label="design" />
        <FormKitListColors name="boitier" label="boitier" />
        <FormKitListColors name="bracelets" label="bracelets" />
      </FormKit>-->
    </main>
  </div>
</template>

<style scoped>
.rayer {
  text-decoration: line-through;
}
</style>
