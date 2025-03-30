<template>
    <Layout>
        <template #navbar>
            <NavBar />
        </template>
        <template #context>
            <VcViewer
                :home="[73.5, 3.5, 135, 54]"
                v-bind:class="['h-full w-full']"
            >
                <ToolBar>
                    <HomeButton />
                </ToolBar>
            </VcViewer>
        </template>
    </Layout>
</template>
<script setup lang="ts">
import HomeButton from "./components/HomeButton.vue";
import NavBar from "./components/NavBar.vue";
import ToolBar from "./components/ToolBar.vue";
import VcViewer from "./components/VcViewer.vue";
import Layout from "./views/Layout.vue";
</script>
