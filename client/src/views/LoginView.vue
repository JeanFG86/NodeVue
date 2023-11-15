<script setup lang="ts">
import { ref } from 'vue';

const username = ref("");
const password = ref("");


</script>

<template>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button>login</button>
</template>