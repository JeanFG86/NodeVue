<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import Board from "../entities/Board";
import BoardService from "../services/BoardService";

const data: {board: Board | undefined} = reactive({ board: undefined});
let cardTitle = ref("");
let columnName = ref("");

onMounted(async () => {
    const boardService = inject("boardService") as BoardService;
    const board = await boardService.getBoard(1);
    data.board = board;
})

</script>

<template>
<div>
    <div v-if="data.board">
        <h3>{{data.board.name}} <span id="estimative">{{ data.board.getEstimative() }}</span></h3>
        <div class="columns">
            <div class="column" v-for="column in data.board.columns">
                <h3>{{ column.name }} {{ column.getEstimative() }}</h3>
                <div class="card" v-for="card in column.cards">
                {{ card.title }} {{ card.estimative }}
                <br/>
                <button @click="data.board.increaseEstimative(card)">+</button><button>-</button>
                </div>
                <div class="card new-card">
                    <input type="text" v-model="cardTitle"/>
                    <button v-on:click="data.board.addCard(column.name, cardTitle, 0)">add</button>
                </div>
            </div>
            <div class="new-column">
                {{ columnName }}
                <input type="text" v-model="columnName"/>
                <button v-on:click="data.board.addColumn(columnName, true)">add</button>
            </div> 
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