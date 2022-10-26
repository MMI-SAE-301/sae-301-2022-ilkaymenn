<script setup lang="ts">
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <main class="">
      <div class="-m-5 columns-2">
        <div class="flex justify-around bg-noirPages p-5 text-blanc">
          <div class="hautG">
            <p class="azonix w-24 text-xs">
              Vous pouvez même Paiyer en plusieurs fois !
            </p>
          </div>

          <img
            src="../../public/images/montreAccueil.png"
            alt="Exemple de personnalisation de montre connectée réalisée par nos soins"
            class="h-60 justify-items-center"
          />
          <div class="grid content-between">
            <p class="azonix hautD text-xl">L'Azox</p>

            <div class="basD">
              <button to="/" class="azonix perso w-16">
                Person-nalisation
              </button>
            </div>
          </div>
        </div>

        <div class="p-12">
          <h1 class="font-extrabold">
            Vous souhaitez personnaliser votre montre connectée ?
          </h1>
          <br />
          <p class="helvetica">
            Vous êtes à la bonne adresse ! En seulement quelques clics TIK • TAK
            vous permettent de posséder une montre connectée unique.
            <br /><br />La finition de votre montre est entre vos mains !
          </p>
        </div>
      </div>

      <div class="mt-12 flex items-center justify-center">
        <img
          src="../../public/images/doublesMontres.png"
          alt="Deux différentes personnalisations de montres connectées réalisées par nos soins."
          class="h-60"
        />
        <div class="grid">
          <p1 class="helvetica mb-5 w-96">
            Imaginer <b to="/personnalisation">LA</b> montre qui vous ressemble,
            vous correspond le mieux. Et libérer tout simplement votre
            créativité !
          </p1>
          <p1 class="helvetica w-96">
            Lancer vous ! <b>Allez-y !</b> C’est vous, qui, maintenant avez les
            cartes en mains....
          </p1>
        </div>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.azonix {
  font-family: "azonixregular";
}

.helvetica {
  font-family: "helveticaregular";
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
