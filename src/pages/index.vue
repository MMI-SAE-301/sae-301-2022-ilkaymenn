<script setup lang="ts"></script>

<template>
  <main class="">
    <div class="-m-5 columns-2">
      <div class="flex justify-around bg-noirPages p-5 text-blanc">
        <div class="hautG">
          <p class="azonix w-24 text-xs">
            Vous pouvez même Paiyer en plusieurs fois !
          </p>
        </div>

        <img
          src="../../public/montreAccueil.png"
          alt="Exemple de personnalisation de montre connectée réaliser par nos soins"
          class="h-60 justify-items-center"
        />
        <div class="grid content-between">
          <p class="azonix hautD text-xl">L'Azox</p>

          <div class="basD">
            <button to="/" class="azonix perso w-16">Person-nalisation</button>
          </div>
        </div>
      </div>

      <div class="">
        <h1 class="athena">
          Vous souhaitez personnaliser votre montre connectée ?
        </h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
.azonix {
  font-family: "azonixregular";
}

.hautD {
  display: grid;
  align-content: space-between;
}

.hautG {
  display: grid;
  align-items: flex-start;
}
.basD {
  display: grid;
  align-content: flex-end;
}
</style>
