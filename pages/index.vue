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


  <v-main class="mt-4">
    <v-container>
      <v-row>
        <v-col cols="12" sm="7" class="d-flex flex-column justify-space-between">
          <p class="text-green-darken-2 text-h5 text-sm-h3">
            Разработка сайтов и Web-приложений
          </p>
          <v-list>

            <v-list-item
              color="primary"
              variant="flat"
            >
                <v-icon color="green" icon="mdi-check-circle"></v-icon>
              Индивидуальный подход к разработке
            </v-list-item>
            <v-list-item
              color="primary"
              variant="flat"
            >
              <v-icon color="green" icon="mdi-check-circle"></v-icon>
              Соблюдение дедлайна
            </v-list-item>
            <v-list-item
              color="primary"
              variant="flat"
            >
              <v-icon color="green" icon="mdi-check-circle"></v-icon>

            </v-list-item>
          </v-list>
          <v-btn width="400" elevation="8">
            <template #prepend>
              <v-icon color="green" icon="mdi-bell-plus"></v-icon>
            </template>
            <template #default>
              <span class="font-weight-bold text-green-darken-2">оставить заявку</span>
            </template>
          </v-btn>
        </v-col>
        <v-col
          sm="5"
          class="d-none d-md-flex rounded-ts-circle"
          style="background: #7DF1E8; height: 350px;"
        >
        </v-col>
      </v-row>
    </v-container>
  </v-main>

</template>

<style scoped>

</style>