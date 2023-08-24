<script setup>
import useTodo from "../use/useTodo.js"
import ToDo from "./ToDo.vue"
import vAutoFocus from "../directives/common.directives.js"

const {todoObj} = useTodo();
todoObj.updatePageMeta();
todoObj.getTodoList();  // for loadtime
</script>
<template>
    <div class="mainContainer">
        <div  class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <input v-AutoFocus
                        name="taskText"
                        class="input"
                        placeholder="Add new task and hit enter"
                        v-model="todoObj.newTodoText"
                        @keydown.enter="todoObj.addTodo"
                    />
                </div>
            </div>
        </div>
        <div v-show="todoObj.todoList.length>0" class="todoList">
            <div class="pagination">
                <select name="noOfPages" @change="todoObj.changePageSize()" v-model="todoObj.recordsPerPage">
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