<script setup lang="ts">
    const board = {
        name: "Project A",
        columns:[
            {
                name:"Todo",
                cards:[]
            },
                {
                name:"Doing",
                cards:[]
            },
                {
                name:"Done",
                cards:[]
            },
        ]            
    }
</script>

<template>
<div>
    <h3>{{board.name}}</h3>
    <div class="columns">
        <div class="column" v-for="column in board.columns">{{column.name}}</div>
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
    }
</style>
