<template>
    <button class="btn btn-primary" @click="FlyToHome">Home</button>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { CesiumViewer } from "../types";

const _viewer = inject<CesiumViewer>("_viewer");
const FlyToHome = () => {
    _viewer?.value?.camera.flyHome(2);
};
</script>
