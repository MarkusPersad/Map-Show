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
                    <KeepAlive :include="['MapView']">
                        <component :is="Component" />
                    </KeepAlive>
                </Transition>
            </RouterView>
        </template>
    </Layout>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import Sider from "./components/Sider.vue";
import Layout from "./views/Layout.vue";
import { RouterView } from "vue-router";
import { useTray } from "./utils";
onMounted(async ()=>{
    await useTray()
})
</script>
