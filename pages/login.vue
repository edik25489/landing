<script setup lang="ts">
import { reactive } from 'vue'
import {useRouter} from "vue-router"
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
  password: '',
  email: '',
}
const state = reactive({
  ...initialState,
})
 const router = useRouter()

const rules = {
  email: { required, email },
  password: { required },
}

const v$ = useVuelidate(rules, state)

function clear () {
  v$.value.$reset()
  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
function home(){
  router.replace('/')
}
definePageMeta({
  layout:'auth'
})
</script>

<template>
<v-container>
  <v-row
      class="w-100 h-screen mx-auto"
      justify="center"
      align="center"
  >
    <v-sheet
        width="300"
    >
      <h1 class="text-center mb-3 text-green-darken-3"> Авторизация</h1>
      <v-form>
        <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            label="E-mail"
            required
            @blur="v$.email.$touch"
            @input="v$.email.$touch"
        ></v-text-field>
        <v-text-field
            v-model="state.password"
            type="password"
            :error-messages="v$.password.$errors.map(e => e.$message)"
            label="Password"
            required
            @blur="v$.password.$touch"
            @input="v$.password.$touch"
        ></v-text-field>

        <v-btn
            class="w-100 mb-3 text-green-darken-3 font-weight-bold"
            @click="v$.$validate"
        >
          submit
        </v-btn>
        <v-btn
            class="w-100 mb-3"
            @click="clear">
          clear
        </v-btn>
        <v-btn
              class="w-100"
              @click="home">
            go to home
        </v-btn>
      </v-form>
    </v-sheet>
  </v-row>
</v-container>
</template>

<style scoped>

</style>