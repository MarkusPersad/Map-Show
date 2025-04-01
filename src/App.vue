<template>
    <Layout>
        <template #navbar>
            <NavBar />
        </template>
        <template #sider>
            <Sider />
        </template>
        <template #context>
            <RouterView v-slot="{ Component }">
                <Transition name="fade">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </template>
    </Layout>
</template>
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Sider from "./components/Sider.vue";
import Layout from "./views/Layout.vue";
</script>
