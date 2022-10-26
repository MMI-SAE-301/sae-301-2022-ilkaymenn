<script setup lang="ts"></script>

<template>
  <div class="bg-grisPages">
    <nav>
      <div class="hidden justify-between space-x-12 bg-noirPages px-5 lg:flex">
        <div class="flex items-center p-2">
          <RouterLink to="/"><img src="/logo.png" class="w-20" /></RouterLink>
        </div>

        <div class="hidden items-center space-x-6 lg:flex">
          <router-link
            class="text-blanc no-underline hover:text-indigo-400"
            to="/personnalisation"
          >
            <code class="azonix">Personnalisation</code>
          </router-link>
          <router-link
            class="text-blanc no-underline hover:text-indigo-400"
            to="/monCompte"
          >
            <code class="azonix">Mon Compte</code>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-2 border-2 p-2" />
    </Suspense>
  </div>
</template>

<style>
.azonix {
  font-family: "azonixregular";
}
</style>
