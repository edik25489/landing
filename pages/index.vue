<script setup lang="ts">
definePageMeta({
  layout:'default'
})
</script>

<template>

  <v-app-bar :elevation="2">
    <v-avatar
      class="hidden-md-and-up mx-2"
      color="green-darken-1"
      size="32"
      icon="mdi-menu"
    ></v-avatar>

    <v-btn
        class="hidden-md-and-up"
        color="green-darken-4"
    >
      Разработка сайтов
    </v-btn>
    <v-spacer/>
      <v-btn
        variant="tonal"
        href="/login"
      >
        <v-icon icon="mdi-login-variant"></v-icon>
        Войти
      </v-btn>
  </v-app-bar>

</template>

<style scoped>

</style>