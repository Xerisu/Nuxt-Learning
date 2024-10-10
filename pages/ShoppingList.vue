<script setup lang="ts">
// @ts-ignore
import { getData, setData } from 'nuxt-storage/local-storage';
import CheckboxEntry from '../models/checkbox-entry';
import AddForm from '../components/AddForm.vue';

let save: CheckboxEntry[] | null = JSON.parse(getData('items'))
if (!save) {
  save = []
}
const items = ref<CheckboxEntry[]>(save)

function SaveItems(data : any) {
  setData('items', JSON.stringify(data), 3000, "h");
}

function addItem(item: string) {
  items.value.push(new CheckboxEntry(item))
  SaveItems(items.value);
}
function updateValue(newValue: boolean, index: number) {
  items.value[index].isChecked = newValue;
  SaveItems(items.value);
}
function deleteValue(index : number) {
  items.value.splice(index, 1);
  SaveItems(items.value);
}

</script>



<template>
  <div>
    <h1>Lista Zakupów</h1>
  </div>
  <AddForm @addItem="addItem" />
  <ItemList @deleteValue="deleteValue" @newValue="updateValue" :items="items" />
</template>