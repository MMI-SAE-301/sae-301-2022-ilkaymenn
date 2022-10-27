<script setup lang="ts">
import { supabase, user } from "@/supabase";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <main>
      <div class="columns-2">
        <div class="-m-5 flex justify-center bg-noirPages">
          <img
            src="../../public/images/montre_seco.png"
            alt="Exemple de montre connectée réalisée par nos soins."
            class="h-60"
          />
        </div>
        <div>
          <div class="flex columns-2">
            <div class="my-5 bg-blue-50 p-3">
              <h1 class="azonix mb-7">Avec Google</h1>

              <div v-if="user">
                <span class="font-bold">{{ user.email }}</span> vous êtes
                connecté(e)
                <button
                  class="mx-5 rounded-xl bg-noir p-3 transition duration-200 hover:text-blue-600"
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
              <h1 class="azonix mb-7">Avec Facebook</h1>

              <div v-if="user">
                <span class="font-bold">{{ user.email }}</span> vous êtes
                connecté(e)
                <button
                  class="mx-5 rounded-xl bg-noir p-3 transition duration-200 hover:text-blue-600"
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
          <!--
        <div class="bg-red-400">
          <h1>test</h1>

          <ul class="w-24">
            <li><a href="#slide1">Feuille</a></li>
            <li><a href="#slide2">Corps</a></li>
            <li><a href="#slide3">Points</a></li>
          </ul>

          <div class="columns-2">
            <img
              src="../../public/avatar/avatar.png"
              alt="Avatar d'un de nos utilisateurs."
              class="h-10"
            />
          </div>
        </div>-->
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.azonix {
  font-family: "azonixregular";
}
</style>
