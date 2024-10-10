<template>
  <div class="flex justify-center m-3">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <ItemListItem @deleteValue="deleteValue(index)" @newValue="emitCheckboxValue($event, index)" :item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import CheckboxEntry from '../models/checkbox-entry';

const emit = defineEmits(['newValue', 'deleteValue'])
const props = defineProps({
  items: {
    type: Array<CheckboxEntry>,
    required: true
  }
})

function emitCheckboxValue(newValue: boolean, index: number): void {
  emit("newValue", newValue, index)
}
function deleteValue(index : number) {
  emit("deleteValue", index)
}
</script>

<style></style>