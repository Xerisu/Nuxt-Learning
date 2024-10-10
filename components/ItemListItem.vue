<template>
  <div id="item">
    
      <UCheckbox v-model="selected" name="item" class="m-3" @change = "emitCheckboxValue">
        <template #label>
          <span :class="{'line-through' : selected}">{{ item.text }}</span>
        </template>
      </UCheckbox> 
      <UButton size = 'sm' @click="openModal()" label="🗑️"></UButton>
    
  </div>  
 
</template>

<script lang="ts" setup>
  import CheckboxEntry from '../models/checkbox-entry';

  const props = defineProps({
    item: {
      type: CheckboxEntry,
      required: true
    }
  })

  const selected = ref(props.item.isChecked)
  const emit = defineEmits(['newValue', 'deleteValue'])
  const emitCheckboxValue = (newValue: boolean) => {
    emit("newValue", newValue)
  }
  function deleteValue() {
    emit("deleteValue")
  }

import ModalConfirmDeletion from '../components/ModalConfirmDeletion.vue';

const modal = useModal()
function openModal () {
  modal.open(ModalConfirmDeletion, {
    onSuccess () {
      deleteValue()
      modal.close()
    },
    onFailure () {
      // Nic nie rob i guess
      modal.close()
    }
    
  })
}
</script>

<style>
  #item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
  }
</style>