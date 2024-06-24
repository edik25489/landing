<script setup lang="ts">
const supabase = useSupabaseClient()

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('images').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
