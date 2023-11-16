<script setup lang="ts">

defineProps(["board", "column", "card"]);

</script>

<template>
    <div class="card" draggable="true" @dragstart="board.selectCard(column, card)" @dragend="board.resetCard()">
        <span class="card-title">{{ card.title }}</span> <span class="card-estimative">{{ card.estimative }}</span>
        <br/>
        <button class="card-increase-estimative" @click="board.increaseEstimative(card)">+</button><button>-</button>
    </div>    
</template>

<style scoped>
.card {
    text-align: center;
    width: 100%;
    height: 80px;
    background-color: #F3E779;
    border: 1px solid #000;
    margin-bottom: 10px;
}

.card-title {
    padding: 15px;
}
</style>