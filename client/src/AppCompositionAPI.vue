<script setup lang="ts">
import axios from "axios";
import { computed, onMounted, reactive } from "vue";

let data: any = reactive({});

let cardTitle = "";
let columnName = "";

function addColumn(columnName: string) {
    data.board.columns.push({ name: columnName, cards: [] })
}

function addCard(column: any, cardTitle: string) {
    column.cards.push({ title: cardTitle, estimative: 3 })
    column.estimative += 3;
}

function increaseEstimative(card: any) {
    card.estimative++;
}

const boardEstimative = computed(() => {
    return data.board.columns.reduce((total: number, column: any) => {
        total += column.cards.reduce((total: number, card: any) => {
            total += card.estimative;
            return total;
        }, 0);
        return total;
    }, 0);
});

onMounted(async () => {
    const response = await axios({
        url: "http://localhost:3000/boards/1",
        method: "get"
    });
    data.board = response.data;
})

</script>

<template>
<div>
    <div v-if="data.board">
        <h3>{{data.board.name}} {{ boardEstimative }}</h3>
        <div class="columns">
            <div class="column" v-for="column in data.board.columns">
                <h3>{{ column.name }} {{ column.estimative }}</h3>
                <div class="card" v-for="card in column.cards">
                {{ card.title }} {{ card.estimative }}
                <br/>
                <button @click="increaseEstimative(card)">+</button><button>-</button>
                </div>
                <div class="card new-card">
                    <input type="text" v-model="cardTitle"/>
                    <button v-on:click="addCard(column, cardTitle)">add</button>
                </div>
            </div>
            <div class="new-column">
                {{ columnName }}
                <input type="text" v-model="columnName"/>
                <button v-on:click="addColumn(columnName)">add</button>
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