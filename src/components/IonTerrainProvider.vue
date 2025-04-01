<template></template>
<script setup lang="ts">
import { inject, onMounted } from "vue";
import { CesiumViewer } from "../types";
import { IONTOKEN } from "../assets/default.json";
import {
    createWorldTerrainAsync,
    EllipsoidTerrainProvider,
    Ion,
    WebMercatorTilingScheme,
} from "cesium";
import { onUnmounted } from "vue";
Ion.defaultAccessToken = IONTOKEN;
const IonWorldTerrain = await createWorldTerrainAsync({
    requestVertexNormals: true,
    requestWaterMask: true,
});
const _viewer = inject<CesiumViewer>("_viewer");
onMounted(async () => {
    if (Ion.defaultAccessToken && _viewer?.value) {
        _viewer.value.resolutionScale = window.devicePixelRatio;
        _viewer.value.scene.postProcessStages.fxaa.enabled = true;
        _viewer.value.scene.verticalExaggeration = 2.0;
        _viewer.value.terrainProvider = IonWorldTerrain;
    }
});
onUnmounted(() => {
    if (_viewer?.value) {
        _viewer.value.terrainProvider = new EllipsoidTerrainProvider({
            tilingScheme: new WebMercatorTilingScheme(),
        });
    }
});
</script>
