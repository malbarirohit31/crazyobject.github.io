<script setup>
import {ref} from "vue"
import useTodo from "../use/useTodo.js"
import ToDo from "./ToDo.vue"
const showAddTaskForm =  ref(false)

const {todoObj} = useTodo();
todoObj.getTodoList();  // for loadtime
</script>
<template>
    <div class="mainContainer">
        <div class="field is-grouped is-grouped-right">
        <div class="control">
            <button @click="showAddTaskForm=true" class="button is-link has-background-success">
                Add Task
            </button>
        </div>
      </div>
        <div v-show="showAddTaskForm" class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                <input
                    name="taskText"
                    class="input"
                    placeholder="new task"
                    v-model="todoObj.newTodoText"
                />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click="todoObj.addTodo" class="button is-link has-background-success">
                        Save
                    </button> &nbsp;
                    <button  @click="showAddTaskForm=false" class="button is-link has-background-success">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        <div v-show="todoObj.todoList.length>0" class="todoList">
            <div class="pagination">
                <select name="noOfPages" @change="todoObj.getTodoList()" v-model="todoObj.recordsPerPage">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select>
                <div>
                    <a href="javascript:void();" @click="todoObj.prev">Prev</a> | <a href="javascript:void();" @click="todoObj.next"
                    >Next</a>
                </div>
            </div>       
            <ToDo v-for="todo in todoObj.filteredTodoList" :todo=todo />
        </div>    
    </div>
</template>
<style>
.pagination{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.mainContainer{
    background-color: white;
    width:100%;
    border:1px solid #cccccc;
    border-radius:25px;
    padding:20px;
}
</style>