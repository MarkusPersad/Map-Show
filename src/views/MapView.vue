<template>
    <VcViewer :home="[73.5, 3.5, 135, 54]">
        <template #toolbar>
            <ToolBar></ToolBar>
        </template>
        <Suspense>
            <IonTerrainProvider />
        </Suspense>
    </VcViewer>
</template>
<script setup lang="ts">
import IonTerrainProvider from "../components/IonTerrainProvider.vue";
import ToolBar from "../components/ToolBar.vue";
import VcViewer from "../components/VcViewer.vue";
</script>
