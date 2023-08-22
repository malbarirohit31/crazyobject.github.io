<script setup>
import Notes from "./Notes.vue"
import useNotesStore from "../stores/notes.store.js"
const notesStore = useNotesStore();
notesStore.loadNotesFromLocal();
</script>
<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
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
    <Notes/>
  </div>
</template>
<style scoped>
.cancelButton{
  margin-left: 20px;
}
</style>