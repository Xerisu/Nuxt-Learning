<script lang="ts" setup>

const emit = defineEmits(['success', 'failure'])

function onSuccess () {
  emit('success')
}
function onFailure() {
  emit('failure')
}
</script>

<template>
  <UModal>
    <UCard>
      <div class="space-y-2">
        <p>Czy na pewno chcesz usunąć tę pozycję? </p>
        <UButton @click="onSuccess">
          Potwierdź
        </UButton>
        <UButton @click="onFailure">
          Anuluj
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>

