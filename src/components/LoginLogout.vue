<script setup lang="ts">
import { supabase, user } from "@/supabase";
</script>

<template>
  <div class="columns-2">
    <div class="bg-noirPages">
      <img
        src="../../public/montre_seco.png"
        alt="image d'un exemple de montre personnaliser par nos soins"
        class="center p-5"
      />
    </div>

    <div>
      <form class="center h-5/6 rounded-xl border-2 bg-blanc">
        <div class="columns-2 p-10">
          <div class="my-5">
            <div v-if="user">
              <span class="font-bold">{{ user.email }}</span> vous êtes
              connecté(e)
              <button
                class="mx-5 rounded-xl bg-blue-200 p-3 transition duration-200 hover:bg-red-200"
                @pointerdown="supabase.auth.signOut()"
              >
                Se déconnecter
              </button>
            </div>

            <button
              class="mx-5 rounded-lg bg-noirPages p-3 text-xs text-blanc transition duration-200 hover:text-indigo-500"
              v-else
              @pointerdown="supabase.auth.signIn({ provider: 'google' })"
            >
              Se connecter
            </button>
          </div>

          <div class="my-5">
            <div v-if="user">
              <span class="font-bold">{{ user.email }}</span> vous êtes
              connecté(e)
              <button
                class="mx-5 rounded-xl bg-blue-200 p-3 transition duration-200 hover:bg-red-200"
                @pointerdown="supabase.auth.signOut()"
              >
                Se déconnecter
              </button>
            </div>

            <button
              class="mx-5 rounded-xl bg-noirPages p-3 text-xs text-blanc transition duration-200 hover:text-indigo-500"
              v-else
              @pointerdown="supabase.auth.signIn({ provider: 'facebook' })"
            >
              Se connecter
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
