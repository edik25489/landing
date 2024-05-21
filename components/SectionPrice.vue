<script setup lang="ts">
const low = [
  {
    from: 'Разработка макета',
    message: `Сроки зависят от сложности или наличия макета Заказчика`,
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'Выгрузка на хостинг',
    message: 'Подключение или покупка домена Заказчика',
    color: 'green',
  },
  {
    from: 'Техническая поддержка',
    message: 'Онлайн - чат',
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'Обратная связь на сайте',
    message: 'Обратная связь для Вашего клиента',
    color: 'green',
  },
]
const medium = [
  {
    from: 'You',
    message: `Sure, I'll see you later.`,

    color: 'deep-purple-lighten-1',
  },
  {
    from: 'John Doe',
    message: 'Yeah, sure. Does 1:00pm work?',

    color: 'green',
  },
  {
    from: 'You',
    message: 'Did you still want to grab lunch today?',

    color: 'deep-purple-lighten-1',
  },
]
const max = [
  {
    from: 'You',
    message: `Sure, I'll see you later.`,
    time: '10:42am',
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'John Doe',
    message: 'Yeah, sure. Does 1:00pm work?',
    time: '10:37am',
    color: 'green',
  },
  {
    from: 'You',
    message: 'Did you still want to grab lunch today?',
    time: '9:47am',
    color: 'deep-purple-lighten-1',
  },
]
</script>

<template>
<v-container class="my-4" style="background: linear-gradient(#FAFAFA, #FAFAFA, lightgreen, #FAFAFA)">
  <v-row justify="center" class="mb-4">
    <v-col cols="12" align-self="center">
      <p class="text-green-darken-3 text-center text-h5 text-sm-h4">
        Тарифы
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-card class="mx-auto my-4" max-width="400">

        <v-toolbar color="green-lighten-5">
          <template v-slot:prepend>
            <v-btn icon="mdi mdi-battery-20"></v-btn>
          </template>

          <v-toolbar-title class="text-h6" text="Базовый"></v-toolbar-title>

        </v-toolbar>


      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2 text-center">Условия тарифа</div>

        <v-timeline align="start" density="compact">
          <v-timeline-item
              v-for="message in low"
              :key="message.from"
              :dot-color="message.color"
              size="x-small"
          >
            <div class="mb-3">
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong>
              </div>

              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <div class="font-weight-bold ms-1 mb-2">от 20 000 руб.</div>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto" max-width="400">

      <v-toolbar color="green-darken-1">
        <template v-slot:prepend>
          <v-btn icon="mdi mdi-battery-60"></v-btn>
        </template>

        <v-toolbar-title class="text-h6" text="Стандарт"></v-toolbar-title>

      </v-toolbar>


      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2 text-center">
          <v-icon icon="mdi mdi-plus-circle" color="green" size="20"></v-icon>
          Условия Базового тарифа
        </div>

        <v-timeline align="start" density="compact">
          <v-timeline-item
              v-for="message in medium"
              :key="message.from"
              :dot-color="message.color"
              size="x-small"
          >
            <div class="mb-4">
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong>
              </div>

              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <div class="font-weight-bold ms-1 mb-2">от 40 000 руб.</div>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto my-4" max-width="400">

      <v-toolbar color="green-darken-4">
        <template v-slot:prepend>
          <v-btn icon="mdi mdi-battery-charging-high"></v-btn>
        </template>

        <v-toolbar-title class="text-h6" text="Базовый"></v-toolbar-title>

      </v-toolbar>


      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2">Условия тарифа</div>

        <v-timeline align="start" density="compact">
          <v-timeline-item
              v-for="message in max"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
          >
            <div class="mb-4">
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{ message.time }}
              </div>

              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <div class="font-weight-bold ms-1 mb-2">от 60 000 руб.</div>
      </v-card-text>
    </v-card>
  </v-row>
</v-container>
</template>

<style scoped>

</style>