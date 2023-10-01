<script>
import axios from "axios"
export default {
    data() {
        return {
            board: {
                    name: "Project A",
                    columns: [
                    {
                        name: "Todo",
                        cards: [
                            { title: "A", estimative: 3 },
                            { title: "B", estimative: 2 },
                            { title: "C", estimative: 1 }
                        ]
                    },
                    {
                        name: "Doing",
                        cards: []
                    },
                    {
                        name: "Done",
                        cards: []
                    },
                ]
                }
            }
    },
    mounted() {
        axios({
            url: "http://localhost:3000/boards/1",
            method: "get"
        });
    }
}

</script>

<template>
<div>
    <h3>{{board.name}}</h3>
    <div class="columns">
        <div class="column" v-for="column in board.columns">
            <h3>{{ column.name }}</h3>
            <div class="card" v-for="card in column.cards">
            {{ card.title }}
            </div>
        </div>
    </div>    
</div>
</template>

<style scoped>
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