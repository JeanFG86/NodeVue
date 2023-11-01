<script setup lang="ts">
import { ref } from 'vue';
import ColumnComponent from './ColumnComponent.vue';

defineProps(["board"]);
let cardTitle = ref("");
let columnName = ref("");
</script>

<template>
    <div v-if="board">
            <h3>{{ board.name }} <span id="estimative">{{ board.getEstimative() }}</span></h3>
            <div class="columns">
                <div class="column" v-for="column in board.columns">
                    <ColumnComponent :board="board" :column="column"></ColumnComponent>
                    <div class="card new-card">
                        <input type="text" v-model="cardTitle"/>
                        <button v-on:click="board.addCard(column.name, cardTitle, 0)">add</button>
                    </div>
                </div>
                <div class="new-column">
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

    .new-card{
        background-color: #EEE;
        border: 1px dashed #CCC;
        display: block;
    }

    .columns{
        display: flex;
        flex-direction: row;
    }
    .column{
        width: 200px;
        text-align: center;
        background-color: #CCC;
        margin-right: 5px;
        padding: 10px;
        border: 1px solid;
    }
    .card{
        width: 100%;
        height: 80px;
        text-align: center;
        background-color: #F3E779;
        border: 1px solid;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

</style>