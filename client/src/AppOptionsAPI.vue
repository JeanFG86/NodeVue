<script>
import axios from "axios"
export default {
    data() {
        return {
            board: undefined,
            columnName: "",
            cardTitle: ""
            }
    },
    methods: {
        addColumn(columnName) {
            this.board.columns.push({name: columnName, cards: []})
        },
        addCard(column, cardTitle) {
            column.cards.push({ title: cardTitle, estimative: 3 })
            column.estimative += 3;
        },
        increaseEstimative(card) {
            card.estimative++;
        }        
    },
    computed: {
        boardEstimative () {
            return this.board.columns.reduce((total, column) => {
                total += column.cards.reduce((total, card) => {
                    total += card.estimative;
                    return total;
                }, 0);
                return total;
            }, 0);
        }
    },
    async mounted() {
        const response = await axios({
            url: "http://localhost:3000/boards/1",
            method: "get"
        });
       this.board = response.data;
    }    
}

</script>

<template>
<div>
    <div v-if="board">
        <h3>{{board.name}} {{ boardEstimative }}</h3>
        <div class="columns">
            <div class="column" v-for="column in board.columns">
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