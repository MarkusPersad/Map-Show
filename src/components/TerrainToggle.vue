<template>
    <button
        class="btn btn-accent dark:bg-gray-700 btn-square iconfont iconfont-shandi"
        :class="{
            'text-green-600': terrainShow,
            'text-gray-300': !terrainShow,
        }"
        @click="useTerrain().terrainChange()"
    ></button>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTerrain } from "../store";
const { terrainShow } = storeToRefs(useTerrain());
</script>
