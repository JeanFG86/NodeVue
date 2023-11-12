<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import Board from "../entities/Board";
import BoardService from "../services/BoardService";
import BoardComponent from "../components/BoardComponent.vue";
import DomainEvent from "../events/DomainEvent";
import { useRoute } from "vue-router";

const data: {board: Board | undefined} = reactive({ board: undefined});

const route = useRoute();
const idBoard = parseInt(route.params.idBoard as string);

onMounted(async () => {
    const boardService = inject("boardService") as BoardService;
    const board = await boardService.getBoard(idBoard);
    board.on("addColumn", async function (event: DomainEvent) {
        await boardService.saveColumn(event.data)
    });
    data.board = board;
})

</script>

<template>
<div>
    <router-link to="/boards">Boards</router-link>
    <hr/>
    <BoardComponent :board="data.board"></BoardComponent>
</div>
</template>

<style scoped>       
</style>