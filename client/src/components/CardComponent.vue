<script setup lang="ts">

defineProps(["board", "column", "card"]);

</script>

<template>
    <div class="card">
        <span class="card-title">{{ card.title }}</span> <span class="card-estimative">{{ card.estimative }}</span>
        <br/>
        <button class="card-increase-estimative" @click="board.increaseEstimative(card)">+</button><button>-</button>
    </div>    
</template>

<style scoped>
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