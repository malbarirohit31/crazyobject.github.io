<script setup>
import Notes from "./Notes.vue"
import useNotesStore from "../stores/notes.store.js"
import {watch} from "vue"
import {storeToRefs} from "pinia"
import vAutoFocus from "../directives/common.directives.js"

const notesStore = useNotesStore();
const {newNote} = storeToRefs(notesStore)

watch(newNote,(newVal,oldVal)=>{
  console.log(newVal, oldVal)
})
</script>
<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-AutoFocus
            class="textarea"
            placeholder="Add a new note"
            v-model="notesStore.newNote"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button  v-show="!notesStore.isEdit" @click="notesStore.addNote" :disabled=!notesStore.newNote class="button is-link has-background-success">
            Add New Note
          </button>
          <button v-show="notesStore.isEdit" @click="notesStore.updateNote(notesStore.editId)" :disabled=!notesStore.newNote class="button is-link has-background-success">
            Edit Note
          </button>
          <button v-show="notesStore.isEdit" @click="notesStore.isEdit=false;notesStore.newNote=``;notesStore.editId=0;" :disabled=!notesStore.newNote class="cancelButton button is-link has-background-success">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="has-text-right"><p class="help is-success">Total Notes - {{ notesStore.getTotalNotes }}</p></div>
    <Notes/>
  </div>
</template>
<style scoped>
.cancelButton{
  margin-left: 20px;
}
</style>