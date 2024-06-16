<script setup lang="ts">

</script>

<template>
<v-container
    class="my-10"
>
  <v-row justify="center">
    <v-col cols="12" align-self="center">
      <p class="text-green-darken-3 text-center text-h5 text-sm-h4">
        В разработке используется
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-card
          class="mx-auto"
          subtitle="Vue3 PWA Framework"
          max-width="400"
      >
        <template v-slot:prepend>
          <v-icon color="green" icon="mdi mdi-nuxt"></v-icon>
        </template>
        <template v-slot:title>
          <span class="font-weight-black">Nuxt 3</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Фреймворк для универсальных приложений на Vue.js
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card
          class="mx-auto"
          subtitle="Vue3 UI Framework"
          max-width="400"
      >
        <template v-slot:prepend>
          <v-icon color="blue-lighten-2" icon="mdi mdi-vuetify"></v-icon>
        </template>
        <template v-slot:title>
          <span class="font-weight-black">Vuetify 3</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Инфраструктура компонентов Vue для создания пользовательского интерфейса
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card
          class="mx-auto"
          subtitle="PHP Framework"
          max-width="400"
      >
        <template v-slot:prepend>
          <v-icon color="red-darken-2" icon="mdi mdi-laravel"></v-icon>
        </template>
        <template v-slot:title>
          <span class="font-weight-black">Laravel</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Легковесный PHP фреймворк для создания сайтов и Web-приложений
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-card
          class="mx-auto"
          subtitle="Облачные технологии"
          max-width="400"
      >
        <template v-slot:prepend>
          <v-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 128 128"><path fill="#014847" d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"/><path fill="#05bdba" d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/></svg>
          </v-icon>
        </template>
        <template v-slot:title>
          <span class="font-weight-black">Netlify</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Платформа, объединяющая несколько продуктов и сервисов для ускорения и упрощения веб-разработки
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>

</style>