<script setup lang="ts">

defineProps(["board", "column"]);

</script>

<template>
    <h3>{{ column.name }} {{ column.getEstimative() }}</h3>
    <div class="card" v-for="card in column.cards">
    {{ card.title }} {{ card.estimative }}
    <br/>
    <button @click="board.increaseEstimative(card)">+</button><button>-</button>
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