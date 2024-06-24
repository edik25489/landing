<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true

      return 'Имя слишком короткое'
    },
    phone (value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Номер телефона не соответствует параметрам'
    },
    email (value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Электронная почта не соответствует формату'
    },

  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const comment = useField('comment')
const tab = ref()

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
<v-container id="subscribe">
  <v-row justify="center" class="mb-4">
    <v-col cols="12" align-self="center">
      <p class="text-green-darken-3 text-center text-h5 text-sm-h4">
        Обратная связь
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6">
      <v-card elevation="10">
        <v-card-title class="text-green-darken-3 text-center justify-center py-2">
          <h1 class="font-weight-bold text-h6 text-basil">
            Реклама
          </h1>
        </v-card-title>
        <v-tabs
            v-model="tab"
            align-tabs="center"
            color="deep-purple-accent-4"
        >
          <v-tab :value="1">Дебетовая</v-tab>
          <v-tab :value="2">Кредитная</v-tab>
          <v-tab :value="3">Альфа-стикер</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
              :value="1"
          >
            <v-container fluid>
              <v-row>
                <v-col
                    cols="12"
                    md="6"
                    class="text-center"
                >
                  <v-img
                      :lazy-src="`https://alfabank.servicecdn.ru/site-upload/8c/a9/6467/D_MainBanner_564x450.png`"
                      :src="`https://alfabank.servicecdn.ru/site-upload/8c/a9/6467/D_MainBanner_564x450.png`"
                      height="205"
                      cover
                  ></v-img>
                  <v-btn
                      class="mx-4 mt-3"
                      variant="tonal"
                      target="_blank"
                      href="https://alfa.me/A05ch4"
                  >
                    перейти
                  </v-btn>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                  <p>В Альфа-Банке дают 500 ₽, если оформишь Альфа-Карту по моей ссылке</p>
                  <br/>
                  <p>Она бесплатная, с суперкэшбэком до 100% каждый месяц и ещё по 5% в четырёх категориях на выбор</p>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item
              :value="2"
          >
            <v-container fluid>
              <v-row>
                <v-col
                    cols="12"
                    md="6"
                    class="text-center"
                >
                  <v-img
                      :lazy-src="`https://alfabank.servicecdn.ru/site-upload/36/f8/967/D-main-20052024.png`"
                      :src="`https://alfabank.servicecdn.ru/site-upload/36/f8/967/D-main-20052024.png`"
                      height="205"
                      cover
                  ></v-img>
                  <v-btn
                      class="mx-4 mt-3"
                      variant="tonal"
                      target="_blank"
                      href="https://alfa.me/nhLzKd"
                  >
                    перейти
                  </v-btn>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                  <p>В Альфа-Банке дают 500 ₽, если оформишь кредитку с годом без % по моей ссылке</p>
                  <br/>
                  <p>Она бесплатная и с кэшбэком до 100%.</p>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item
              :value="3"
          >
            <v-container fluid>
              <v-row>
                <v-col
                    cols="12"
                    md="6"
                    class="text-center"
                >
                  <v-img
                      :lazy-src="`https://alfabank.servicecdn.ru/site-upload/9e/8b/6657/D_MainBanner_564x450.png`"
                      :src="`https://alfabank.servicecdn.ru/site-upload/9e/8b/6657/D_MainBanner_564x450.png`"
                      height="205"
                      cover
                  ></v-img>
                  <v-btn
                      class="mx-4 mt-3"
                      variant="tonal"
                      target="_blank"
                      href="https://alfa.me/cKrHVk"
                  >
                    перейти
                  </v-btn>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                  <p>Альфа дарит 500 ₽, если закажешь Альфа-Стикер по моей ссылке</p>
                  <br/>
                  <p>Платят всем, у кого нет Альфа-Карты. Он с кэшбэком до 100% и бесплатный, если тратишь от 10 000 ₽ в месяц</p>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-sheet elevation="10" class="pa-3">
        <form @submit.prevent="submit">
          <v-text-field
              v-model="name.value.value"
              :error-messages="name.errorMessage.value"
              label="Введите Имя"
          ></v-text-field>

          <v-text-field
              v-model="phone.value.value"
              :counter="10"
              :error-messages="phone.errorMessage.value"
              label="Введите номер телефона"
          ></v-text-field>

          <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="Введите электронную почту"
          ></v-text-field>

          <v-textarea
              v-model="comment.value.value"
              label="Введите комментарий"></v-textarea>
          <v-btn
              class="me-4"
              type="submit"
          >
            отправить
          </v-btn>

          <v-btn @click="handleReset">
            очистить
          </v-btn>
        </form>
      </v-sheet>

    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>

</style>