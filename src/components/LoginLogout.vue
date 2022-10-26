<script setup lang="ts">
import { supabase, user } from "@/supabase";
</script>

<template>
  <div>
    <div class="my-5 bg-blue-50 p-3">
      <div v-if="user">
        <span class="font-bold">{{ user.email }}</span> vous êtes connecté(e)
        <button
          class="mx-5 rounded-xl bg-blue-200 p-3 transition duration-200 hover:bg-red-200"
          @pointerdown="supabase.auth.signOut()"
        >
          Se déconnecter
        </button>
      </div>

      <button
        class="mx-5 rounded-xl bg-blue-200 p-3 transition duration-200 hover:bg-blue-500 hover:text-white"
        v-else
        @pointerdown="supabase.auth.signIn({ provider: 'google' })"
      >
        Se connecter avec Google
      </button>
    </div>

    <div class="my-5 bg-blue-50 p-3">
      <div v-if="user">
        <span class="font-bold">{{ user.email }}</span> vous êtes connecté(e)
        <button
          class="mx-5 rounded-xl bg-blue-200 p-3 transition duration-200 hover:bg-red-200"
          @pointerdown="supabase.auth.signOut()"
        >
          Se déconnecter
        </button>
      </div>

      <button
        class="mx-5 rounded-xl bg-blue-200 p-3 transition duration-200 hover:bg-blue-500 hover:text-white"
        v-else
        @pointerdown="supabase.auth.signIn({ provider: 'facebook' })"
      >
        Se connecter avec Facebook
      </button>
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
