<script setup lang="ts">

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" class="bg-grey-lighten-5 d-flex flex-column justify-start align-lg-center">
        <p class="text-green-darken-2 text-h5 text-sm-h4 text-md-h3">
          Разработка сайтов и Web-приложений
        </p>
        <v-list bg-color="grey-lighten-5">

          <v-list-item
              variant="flat"
          >
            <v-icon color="green" icon="mdi-check-circle"></v-icon>
            Индивидуальный подход к разработке
          </v-list-item>
          <v-list-item

              variant="flat"
          >
            <v-icon color="green" icon="mdi-check-circle"></v-icon>
            Соблюдение сроков
          </v-list-item>
          <v-list-item

              variant="flat"
          >
            <v-icon color="green" icon="mdi-check-circle"></v-icon>
            Поддержка и сопровождение
          </v-list-item>
        </v-list>
        <v-btn
            href="#subscribe"
            width="400"
            elevation="8"
            class="mt-4">
          <template #prepend>
            <v-icon color="green" icon="mdi-bell-plus"></v-icon>
          </template>
          <template #default>
            <span class="font-weight-bold text-green-darken-2">оставить заявку</span>
          </template>
        </v-btn>
      </v-col>
      <v-col sm="6" class="d-none d-sm-block">
        <v-sheet color="#7DF1E8" height="400" class="w-100 rounded-ts-pill"></v-sheet>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex">
      <v-col sm="6">
        <v-row class="d-flex justify-space-around">
          <v-col sm="4">
            <v-sheet color="#9098af" height="80" class="w-100 rounded-te-pill"></v-sheet>
          </v-col>
          <v-col sm="4">
            <v-sheet color="#FFE3FB" height="80" class="w-100 rounded-t-pill"></v-sheet>
          </v-col>
          <v-col sm="4">
            <v-sheet color="#15837B" height="80" class="w-100 rounded-te-pill rounded-b-pill"></v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="6">
        <v-sheet color="#7DF1E8" height="80" class="w-100"></v-sheet>
      </v-col>
    </v-row>
    <v-row class="d-none d-sm-flex">
      <v-col sm="2">
        <v-sheet color="#9098af" height="80" class="w-100 rounded-be-pill"></v-sheet>
      </v-col>
      <v-col sm="10">
        <v-sheet color="#FFDD58" height="80" class="w-100 rounded-b-pill"></v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>