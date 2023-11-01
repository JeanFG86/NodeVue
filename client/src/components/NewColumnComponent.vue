<script setup lang="ts">
import { ref } from 'vue';

defineProps(["board"]);
let columnName = ref("");
</script>

<template>
    <div class="new-column">
        {{ columnName }}
        <input type="text" v-model="columnName"/>
        <button v-on:click="board?.addColumn(columnName, true)">add</button>
    </div> 
</template>

<style scoped>
    .new-column{
        background-color: #EEE;
        border: 1px dashed #CCC;
        display: block;
        width: 200px;
        text-align: center;
        margin-right: 5px;
        padding: 10px;
    }

</style>