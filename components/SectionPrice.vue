<script setup lang="ts">
const low = [
  {
    from: 'Разработка макета',
    message: `Сроки зависят от сложности дизайна сайта`,
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'Выгрузка на хостинг',
    message: 'Подключение или покупка домена',
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
    from: 'Управление доступом',
    message: `Установка прав доступа`,

    color: 'deep-purple-lighten-1',
  },
  {
    from: 'Панель администратора',
    message: 'Настраиваемый личный кабинет администратора',

    color: 'green',
  },
  {
    from: 'Интернет-магазин',
    message: 'Возможность продажи и обратной связи с клиентом',

    color: 'deep-purple-lighten-1',
  },
]
const max = [
  {
    from: 'Статистика',
    message: `Настройка отчетности или статистики`,
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'CRM',
    message: 'Разработка функционала CRM-систем',
    color: 'green',
  },
  {
    from: 'Дополнительные услуги',
    message: 'Настройка и разработка интересов Заказчика',
    color: 'deep-purple-lighten-1',
  },
]
</script>

<template>
<v-container class="my-4">
  <v-row justify="center" class="mb-4">
    <v-col cols="12" align-self="center">
      <p class="text-green-darken-3 text-center text-h5 text-sm-h4">
        Тарифы
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="4">
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
    </v-col>
    <v-col cols="12" md="4">
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
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto my-4" max-width="400">

        <v-toolbar color="green-darken-4">
          <template v-slot:prepend>
            <v-btn icon="mdi mdi-battery-charging-high"></v-btn>
          </template>

          <v-toolbar-title class="text-h6" text="Максимальный"></v-toolbar-title>

        </v-toolbar>


        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            <v-icon icon="mdi mdi-plus-circle" color="green" size="20"></v-icon>
            Условия Стандарт тарифа
          </div>

          <v-timeline align="start" density="compact">
            <v-timeline-item
                v-for="message in max"
                :key="message.time"
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
          <div class="font-weight-bold ms-1 mb-2">от 60 000 руб.</div>
        </v-card-text>
      </v-card>
    </v-col>



  </v-row>
</v-container>
</template>

<style scoped>

</style>