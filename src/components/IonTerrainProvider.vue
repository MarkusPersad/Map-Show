<template></template>
<script setup lang="ts">
import { inject, onMounted } from "vue";
import { CesiumViewer } from "../types";
import { IONTOKEN } from "../assets/default.json";
import { createWorldTerrainAsync,  Ion } from "cesium";
Ion.defaultAccessToken = IONTOKEN;
const IonWorldTerrain = await createWorldTerrainAsync({
    requestVertexNormals: true,
    requestWaterMask: true,
});
const _viewer = inject<CesiumViewer>("_viewer");
onMounted(async () => {
    if (Ion.defaultAccessToken && _viewer?.value) {
        _viewer.value.resolutionScale = window.devicePixelRatio
        _viewer.value.scene.postProcessStages.fxaa.enabled = true;
        _viewer.value.scene.verticalExaggeration = 2.0;
        _viewer.value.terrainProvider = IonWorldTerrain;
    }
});
</script>
