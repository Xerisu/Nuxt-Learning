<template>
  <div class="flex justify-center m-3">
    <UButtonGroup size="sm" orientation="horizontal">
      <UInput v-model="itemToBuy" variant="outline" size="sm" placeholder="Dodaj zakup..." />
      <UButton @click="addItem" label="+" />
    </UButtonGroup>
  </div>
</template>

<script lang="ts" setup>
const itemToBuy = ref('')
const emit = defineEmits(['addItem'])

function addItem() {
  if (itemToBuy.value !== '') {
    emit('addItem', itemToBuy.value)
    itemToBuy.value = ""
  }
}
</script>

<script lang="ts">

</script>

<style></style>