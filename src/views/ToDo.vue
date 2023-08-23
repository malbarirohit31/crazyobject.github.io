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
        <div>{{ todo.text }}</div>
        <div>Edit / Delete</div>
    </div>
</template>
<style scoped>
.todo {
    padding:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color:black;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>