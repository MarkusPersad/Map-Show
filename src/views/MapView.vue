<template>
    <VcViewer :home="[73.5, 3.5, 135, 54]" :base-layer="false">
        <template #toolbar>
            <ToolBar></ToolBar>
        </template>
        <AsyncImagery />
        <Suspense>
            <IonTerrainProvider v-if="terrainShow" />
        </Suspense>
        <AsyncHawEyeMap />
    </VcViewer>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import IonTerrainProvider from "../components/IonTerrainProvider.vue";
import ToolBar from "../components/ToolBar.vue";
import VcViewer from "../components/VcViewer.vue";
import { useTerrain } from "../store";
import { storeToRefs } from "pinia";
const AsyncImagery = defineAsyncComponent(
    () => import("../components/GaoDeImagery.vue"),
);
const { terrainShow } = storeToRefs(useTerrain());
const AsyncHawEyeMap = defineAsyncComponent(
    () => import("../components/HawkEyeMap.vue")
)
</script>
