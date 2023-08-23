<script setup>
import useBlogStore from "@/stores/blog.store.js"
import {storeToRefs} from "pinia"
import {watch,onMounted} from "vue"

const store = useBlogStore();
const {dataSource,blogData,isLoading,errorText} = storeToRefs(store)

watch(dataSource,(newVal,oldVal)=>{
  store.getDataFromAPI()
})

onMounted(()=>{
  store.getDataFromAPI()
})

</script>
<template>
  <div class="weather">
    <div class="form">
      <div class="buttons">
        <button class="button is-success" @click="store.changeSource('posts')">Posts</button>
        <button class="button is-success" @click="store.changeSource('users')">Users</button>
        <button class="button is-success" @click="store.changeSource('comments')">Comments</button>
      </div>
    </div>
    <div class="weatherDetails">      
      <!-- loader -->
      <div class="loading" v-show="isLoading">Loading {{ dataSource }}...</div>
      <!-- error element -->
      <div><p class="help is-danger"></p></div>
      <div>
        {{ dataSource }}
        <pre>{{ blogData }}</pre>
      </div>
    </div>
  </div>
</template>