<script setup lang="ts">
import type { Montre } from "@/types";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SvgFace from "../components/SvgFace.vue";
import SvgProfil from "../components/SvgProfil.vue";
import FormKitListColors from "./FormKitListColors.vue";
import { supabase } from "@/supabase";

let user = supabase.auth.user();

const router = useRouter();

const chaussure = ref<Basket>(props.data ?? {});

// fonction pour ajouter dans la bdd les valeurs du formulaire
async function upsertBasket(dataForm, node) {
  const { data, error } = await supabase.from("chaussure").upsert(dataForm);
  if (error || !data) {
    node.setErrors([error?.message]);
  } else {
    node.setErrors([]);
    router.push("/basket");
  }
}

// chargement de la liste des Maison
const props = defineProps(["id"]);
if (props.id) {
  // On charge les données de la maison
  let { data, error } = await supabase
    .from("montre")
    .select("*")
    .eq("id_montre", props.id);
  if (error) console.log("n'a pas pu charger le table montre :", error);
  else montre.value = (data as any[])[0];
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
    router.push("/montre");
  }
}

/*const router = useRouter();
const montre = ref({});
const props = defineProps(["id", "Montre"]);
if (props.id) {
  // On charge les données de la maison
  let { data, error } = await supabase
    .from("montre")
    .select("*")
    .eq("id_montre", props.id);
  if (error || !data)
    console.log("n'a pas pu charger le table Montre :", error);
  else montre.value = data[0];
}

async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "montre-edit-id", params: { id: data[0].id } });
  }
}*/

/*const props = defineProps<{
  data?: Montre;
  id?: string;
}>();

const montre = ref<Montre>({});

const props = defineProps<{
  data?: Montre;
  id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});

async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "edit-id", params: { id: data[0].id } });
  }
}*/
</script>

<template>
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

    <div>
      <button
        type="button"
        v-if="montre.id_montre"
        @click="($refs.dialogSupprimer as any).showModal()"
        class="focus-style mx-auto block rounded-md bg-red-200 p-2 text-base transition duration-200 checked:bg-red-800 hover:bg-red-500 hover:text-white"
      >
        Supprimer la paire
      </button>

      <dialog
        ref="dialogSupprimer"
        @click="($event.currentTarget as any).close()"
      >
        <button
          type="button"
          class="focus-style mx-auto mt-2 mb-5 block rounded-md bg-blue-300 p-2 text-xl transition duration-200 checked:bg-blue-800 hover:bg-blue-500 hover:text-white"
        >
          Annuler
        </button>

        <button
          type="button"
          @click="supprimerMontre()"
          class="focus-style mx-auto mt-5 mb-2 block rounded-md bg-red-200 p-2 text-xl transition duration-200 checked:bg-red-800 hover:bg-red-500 hover:text-white"
        >
          Confirmer la suppression
        </button>
      </dialog>
    </div>
  </div>
</template>
