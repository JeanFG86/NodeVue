<script setup lang="ts">
import { ref } from 'vue';
import ColumnComponent from './ColumnComponent.vue';
import NewCardComponent from './NewCardComponent.vue';

defineProps(["board"]);
let columnName = ref("");
</script>

<template>
    <div v-if="board">
            <h3>{{ board.name }} <span id="estimative">{{ board.getEstimative() }}</span></h3>
            <div class="columns">
                <div v-for="column in board.columns">
                    <ColumnComponent :board="board" :column="column"></ColumnComponent>
                    <NewCardComponent :board="board" :column="column"></NewCardComponent>
                </div>
                <div class="column new-column">
                    {{ columnName }}
                    <input type="text" v-model="columnName"/>
                    <button v-on:click="board.addColumn(columnName, true)">add</button>
                </div> 
            </div>  
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

    .columns{
        display: flex;
        flex-direction: row;
    }

</style>