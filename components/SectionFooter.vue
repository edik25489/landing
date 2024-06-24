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
  <v-footer color="black" class="d-flex flex-column">
    <v-sheet color="black" class="d-flex w-100 align-center" no-gutters>
      <v-spacer></v-spacer>
      <p>Контактные данные:</p>
      <v-btn
          v-for="item in icons"
          :key="item.name"
          :prepend-icon="item.icon"
          class="mx-4"
          target="_blank"
          variant="tonal"
          :href="item.href"
      >
        {{item.name}}
      </v-btn>
    </v-sheet>

    <v-sheet class="py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Попутный ветер</strong>
    </v-sheet>
  </v-footer>
</template>

<style scoped>

</style>