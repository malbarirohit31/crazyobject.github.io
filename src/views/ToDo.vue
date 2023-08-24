<script setup>
defineProps({
    todo:{
        type:Object,
        default:{}
    }
})
</script>
<template>
    <div class="todo notification is-primary">
        <div>#{{todo.id}} : {{ todo.text }}</div>
        <div>Edit / Delete</div>
    </div>
</template>
<style scoped>
.todo {
    padding:10px;
    margin-bottom:9px !important;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color:black;
    text-transform: capitalize;
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
}
.todo:hover{
 border:1px solid green;   
}
</style>