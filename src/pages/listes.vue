<script setup lang="ts">
import SvgProfil from "../components/SvgProfil.vue";
// import type { Montre } from "../types";
import { supabase } from "@/supabase";

let user = supabase.auth.user();

/*const exemples: Montre[] = [
  {
    design: "white",
    boitier: "black",
    bracelets: "black",
  },
  {
    design: "blanc",
    boitier: "white",
    bracelets: "white",
  },
];*/

const { data: montre, error } = await supabase.from("montre").select("*");
if (error) {
  console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
  <section>
    <h1 class="text-2xl">Mes montres</h1>
    <div class="flex flex-wrap justify-between">
      <li class="list-none" v-for="x in montre" :key="x.id_montre">
        <div v-if="user.id == x.id_user">
          <SvgProfil class="w-64" v-bind="x"></SvgProfil>
          <router-link
            :to="{
              name: 'montre-edit-id',
              params: { id: x.id_montre },
            }"
          >
            <button>Modifier</button>
          </router-link>
          <router-link
            :to="{
              name: 'montre-sup-id',
              params: { id: x.id_montre },
            }"
          >
            <button>Supprimer</button>
          </router-link>
        </div>
      </li>
    </div>
  </section>
</template>
