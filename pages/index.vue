<script setup lang="ts">
import { ref, watch } from 'vue'

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
definePageMeta({
  layout:'default'
})
</script>

<template>
  <ClientOnly>
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
        v-if="$vuetify.display.sm || $vuetify.display.xs"
      ></v-app-bar-nav-icon>

      <v-spacer/>
      <v-btn
        v-if="$vuetify.display.sm"
        color="green-darken-2"
        variant="text"
      >
        разработка сайтов
      </v-btn>
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          variant="text"
          href="/test/admin"
        >Админ - панель</v-btn>

        <v-btn
          variant="text"
          href="/test/account"
        >Личный кабинет</v-btn>
      </template>
      <v-spacer/>
      <v-btn
        class="mr-4"
        variant="tonal"
        href="/login"
      >
        <v-icon icon="mdi-login-variant"></v-icon>
        Войти
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.smAndDown ? 'left' : undefined"
      temporary
    >
      <v-list-item
        link
        title="Админ - панель"
        href="/test/admin"
      ></v-list-item>
      <v-list-item
        link
        title="Личный кабинет"
        href="/test/account"
      >
      </v-list-item>

    </v-navigation-drawer>
  </ClientOnly>


  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-green-darken-2 text-h5 text-sm-h4">
            Разработка сайтов и Web-приложений
          </p>
          <v-list>

            <v-list-item
              color="primary"
              variant="flat"
            >
                <v-icon color="green" icon="mdi-check-circle"></v-icon>
                ghfg
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6">2 columns</v-col>
      </v-row>
    </v-container>
  </v-main>

</template>

<style scoped>

</style>