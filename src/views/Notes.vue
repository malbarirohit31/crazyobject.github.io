<script setup>
import useNotesStore from "../stores/notes.store.js"
const notesStore = useNotesStore();
</script>
<template>
    <div v-for="note in notesStore.notes" class="card mb-4">
  <div class="card-content">
    <div class="content">{{ note.text }}</div>
  </div>
  <footer class="card-footer">
    <a href="#" @click="notesStore.setEditMode(note.id)" class="card-footer-item">Edit</a>
    <a href="#" @click="notesStore.deleteNote(note.id)" class="card-footer-item">Delete</a>
  </footer>
</div>
</template>