<script setup lang="ts">
const icons = [
    {
      'name':'ВКонтакте',
      'icon':'mdi-facebook-workplace',
      'href':'https://vk.com/id555738436',
    },
  ]
</script>

<template>
  <v-footer class="d-flex flex-column">
    <div class="pa-5 bg-teal d-flex w-100 align-center">

      <v-spacer></v-spacer>

      <v-btn
          v-for="item in icons"
          :key="item.name"
          :prepend-icon="item.icon"
          class="mx-4"
          variant="tonal"
          :href="item.href"
      >
        {{item.name}}
      </v-btn>
    </div>

    <div class="py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Попутный ветер</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>