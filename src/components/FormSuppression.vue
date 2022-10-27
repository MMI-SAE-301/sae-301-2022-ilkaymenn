<script setup lang="ts">
import { colors, materiaux } from "@/types";
//import type { Montre } from "@/types";
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import SvgFace from "../components/SvgFace.vue";
import SvgProfil from "../components/SvgProfil.vue";
//import FormKitListColors from "./FormKitListColors.vue";
import type { Montre } from "@/types";

const router = useRouter();

const props = defineProps(["id", "data"]);
const montre = ref<Montre>(props.data ?? {});

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

async function supprimerMontre() {
  const { data, error } = await supabase
    .from("montre")
    .delete()
    .match({ id_montre: montre.value.id_montre });
  if (error) {
    console.error(
      "Erreur à la suppression de ",
      montre.value,
      "erreur :",
      error
    );
  } else {
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

          <div>
            <button
              class="mx-auto my-10 text-sm md:my-20 md:text-base"
              v-if="montre.id_montre"
              @click="($refs.dialogSupprimer as any).showModal()"
            >
              Supprimer cette montre
            </button>

            <dialog
              ref="dialogSupprimer"
              @click="($event.currentTarget as any).close()"
            >
              <button class="mx-auto">Annuler</button>

              <button @click="supprimerMontre()" class="md:my20 mx-auto my-10">
                Confirmer la suppression
              </button>
            </dialog>
          </div>
        </div>

        <div class="">
          <ul class="flex items-center gap-1 space-x-10">
            <li>
              <a href="#profil"
                ><img src="/icones/flechesG.png" alt="Icônes flèches gauches"
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
                ><img src="/icones/flechesD.png" alt="Icônes flèches droites"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
