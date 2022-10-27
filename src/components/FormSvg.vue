<script setup lang="ts">
import { colors, materiaux } from "@/types";
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
// @ts-ignore
async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push("/listes");
  }
}
</script>

<template>
  <div class="w-screen overflow-y-hidden">
    <main class="w-full overflow-hidden">
      <div class="flex justify-around bg-grisPages p-5 text-noir">
        <div class="hautG">
          <p class="azonix text-xl">L'Azox 3700</p>
        </div>

        <div class="">
          <ul class="flex items-center gap-1 space-x-10">
            <li>
              <a href="#profil"
                ><img src="/icones/flechesG.png" alt="Icônes flèches gauches"
              /></a>
            </li>
            <div class="carousel w-64">
              <div id="profil">
                <SvgProfil class="carousel-item w-64" v-bind="montre" />
              </div>
              <div id="face">
                <SvgFace class="carousel-item w-64" v-bind="montre" />
              </div>
            </div>
            <li>
              <a href="#face"
                ><img src="/icones/flechesD.png" alt="Icônes flèches droites"
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
        <div
          class="-m-5 flex h-full w-screen justify-between bg-noirPages p-10 text-blanc"
        >
          <ul class="azonix grid w-24 justify-items-center space-y-4">
            <li>
              <a
                href="#slide1"
                class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
                >Ecran</a
              >
            </li>
            <li>
              <a
                href="#slide2"
                class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
                >Boitier</a
              >
            </li>
            <li>
              <a
                href="#slide3"
                class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
                >Bracelet</a
              >
            </li>
          </ul>

          <FormKit
            type="form"
            v-model="montre"
            @submit="upsertMontre"
            :submit-attrs="{
              classes: {
                input:
                  'bg-grisPages azonix border-2 text-black rounded-xl hover:bg-black  hover:text-blue-600 p-2',
              },
            }"
          >
            <div class="carousel w-[300px] items-center space-x-20 text-center">
              <div id="slide1" class="carousel-item text-xl">
                <FormKit
                  name="design"
                  label="Ecran"
                  value="#FFFFFF"
                  type="radio"
                  :options="colors"
                  :sections-schema="{
                    inner: { $el: null },
                    decorator: { $el: null },
                  }"
                  input-class="peer sr-only "
                  options-class="flex w-full justify-around gap-5"
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

              <div
                id="slide2"
                class="carousel-item flex w-[300px] flex-col gap-y-10 text-xl"
              >
                <FormKit
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
                  options-class="flex w-full justify-between gap-5"
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

                <FormKit
                  name="id_materiaux_boitier"
                  label="materiau du boitier"
                  value="e24298c0-cd56-4193-9167-1fc9066ed30a"
                  type="radio"
                  :options="materiaux"
                  :sections-schema="{
                    inner: { $el: null },
                    decorator: { $el: null },
                  }"
                  legend-class="sr-only"
                  input-class="peer sr-only"
                  options-class="flex w-full justify-between gap-5"
                  wrapper-class="flex flex-col items-center"
                >
                  <template #label="context">
                    <img
                      class="h-10 w-10 rounded-full border-2 peer-checked:border-red-600"
                      :src="context.option.img"
                      :alt="context.option.label"
                    />

                    <span>{{ context.option.label }}</span>
                  </template>
                </FormKit>
              </div>

              <div
                id="slide3"
                class="carousel-item flex w-[300px] flex-col gap-y-10 text-xl"
              >
                <FormKit
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
                  options-class="flex w-full justify-between gap-5"
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

                <FormKit
                  name="id_materiaux_bracelets"
                  label="materiau du boitier"
                  value="e24298c0-cd56-4193-9167-1fc9066ed30a"
                  type="radio"
                  :options="materiaux"
                  :sections-schema="{
                    inner: { $el: null },
                    decorator: { $el: null },
                  }"
                  legend-class="sr-only"
                  input-class="peer sr-only"
                  options-class="flex w-full justify-between gap-5"
                  wrapper-class="flex flex-col items-center"
                >
                  <template #label="context">
                    <img
                      class="h-10 w-10 rounded-full border-2 peer-checked:border-red-600"
                      :src="context.option.img"
                      :alt="context.option.label"
                    />

                    <span>{{ context.option.label }}</span>
                  </template>
                </FormKit>
              </div>
            </div>
          </FormKit>

          <div class="grid justify-items-center">
            <p class="azonix">ecran</p>
            <img
              src="/images/ecran.png"
              alt="Image d'écran de la montre connectée. "
              class="h-20"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.rayer {
  text-decoration: line-through;
}
</style>
