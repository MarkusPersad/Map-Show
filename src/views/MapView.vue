<template>
    <VcViewer :home="[73.5, 3.5, 135, 54]" :base-layer="false">
        <template #toolbar>
            <ToolBar></ToolBar>
        </template>
        <AsyncTianDiTu />
        <Suspense>
            <IonTerrainProvider />
        </Suspense>
    </VcViewer>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import IonTerrainProvider from "../components/IonTerrainProvider.vue";
import ToolBar from "../components/ToolBar.vue";
import VcViewer from "../components/VcViewer.vue";
const AsyncTianDiTu = defineAsyncComponent(
    () => import("../components/TianDiTuImagery.vue")
)
</script>
