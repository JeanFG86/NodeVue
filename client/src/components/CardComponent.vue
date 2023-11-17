<script setup lang="ts">

defineProps(["board", "column", "card"]);

</script>

<template>
    <div class="card" draggable="true" @dragstart="board.selectCard(column, card)" @dragend="board.resetCard()">
        <div class="card-title">
    			{{ card.idCard }} - {{ card.title }} (<span class="card-estimative">{{ card.estimative }}</span>)
    		</div>
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