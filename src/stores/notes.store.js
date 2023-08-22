import {defineStore} from "pinia"
import {ref} from "vue"

const useNotesStore = defineStore("Notes",{
    id:"notes",
    state:()=>{
        return {
            notes:ref([]),
            newNote:ref(""),
            isEdit:ref(false),
            editId:ref(0),
        }
    },
    getters:{
        getTotalNotes(){
            return this.notes.length
        }
    },
    actions:{
        loadNotesFromLocal(){
            // get notes from cache if not return empty array
            const localNotes = localStorage.getItem("myVueStore");
            this.notes = localNotes ? ref(JSON.parse(localNotes)) : ref([]);
        },
        saveNotesToLocal(){
            localStorage.setItem("myVueStore", JSON.stringify(this.notes));
        },
        updateNote(editId){
            if(editId){
                const updatedArray = this.notes.map((note)=>{
                if(note.id===editId){
                    return {
                        id:editId,
                        text: this.newNote,
                    }
                 }else{
                    return note
                 }
               })
               this.notes = updatedArray;
               this.saveNotesToLocal();
               this.newNote=""
               this.isEdit=false
               this.editId=0
            }else{
                alert("error deleting note");
            }
        },
        setEditMode(editId){
            const tempNote = this.notes.filter((note)=>{
                return note.id===editId
            });
            this.isEdit = true;
            this.editId = editId;
            this.newNote=tempNote[0].text;
        },
        addNote(){
            if(this.newNote===""){
              alert("form is empty!")
            }else{
              this.notes.push({
                id:this.notes.length===0 ? 1 : this.notes[this.notes.length-1].id+1,
                text:this.newNote
              })
              this.newNote = ''
              this.saveNotesToLocal();
            }
          },
          
        deleteNote(noteId){
            this.notes = this.notes.filter((note)=>{
              return note.id!==noteId
            })
            this.saveNotesToLocal();
          }
    }
})

export default useNotesStore