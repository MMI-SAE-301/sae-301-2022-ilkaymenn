<script setup lang="ts"></script>

<template>
  <div class="bg-grisPages">
    <nav>
      <div class="justify-between space-x-12 bg-noirPages px-5 lg:flex">
        <div class="flex items-center p-2">
          <RouterLink to="/"
            ><img src="../public/logos/LOGO.png" class="w-20"
          /></RouterLink>
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

    <footer
      class="grid justify-items-center bg-noirPages p-8 text-xs text-blanc"
    >
      <div class="mb-4 flex space-x-10">
        <img src="../public/logos/insta.png" alt="logo Instagram" class="w-6" />
        <img
          src="../public/logos/linkedin.png"
          alt="logo LinkedIn"
          class="w-6"
        />
        <img src="../public/logos/mmi.png" alt="logo MMI" class="w-6" />
      </div>
      <p class="helvetica">
        Maquette réalisé dans le cadre d’un exercice pédagogique au département
        MMI de Montbéliard
      </p>
    </footer>
  </div>
</template>

<style>
.azonix {
  font-family: "azonixregular";
}
</style>
