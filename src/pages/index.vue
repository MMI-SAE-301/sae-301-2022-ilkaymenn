<script setup lang="ts">
import SvgProfil from "../components/SvgProfil.vue";
import type { Montre } from "../types";
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
import { supabase } from "@/supabase";
const props = defineProps<{
  max?: number;
}>();
const { data: montre, error } = await supabase
  .from("montre")
  .select("*")
  .limit(props.max ?? 100);
if (error) {
  console.log("n'a pas pu récupérer les baskets", { error });
}
</script>
<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <li v-for="x in exemples" :key="x.id">
          <router-link
            :to="{
              name: 'montre-edit-id',
              params: { id: x.id_montre },
            }"
          >
            <SvgProfil class="w-64" v-bind="x" />
          </router-link>
        </li>
      </div>
    </div>
  </section>
</template>
