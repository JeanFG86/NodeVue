<script setup lang="ts">
import { ref } from 'vue';

defineProps(["board", "column"]);
let cardTitle = ref("");

</script>

<template>
    <div class="new-card">
        <input class="new-card-input" type="text" v-model="cardTitle"/>
        <button class="new-card-add" v-on:click="board.addCard(column.name, cardTitle, 0)">add</button>
    </div>             
</template>

<style scoped>
.new-card {
    text-align: center;
    padding: 20px;
}
</style>