<template>
    <div class="w-full h-full">
        <div id="cesiumViewer" class="relative w-full h-full">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from "vue";
import { Camera, Rectangle, Viewer } from "cesium";
import { CesiumViewer } from "../types";

const props = defineProps<{
    home: [number, number, number, number];
}>();

const _viewer = ref<Viewer | null>(null);
defineExpose({
    _viewer,
});
provide<CesiumViewer>("_viewer", _viewer);

onMounted(() => {
    _viewer.value = new Viewer("cesiumViewer", {
        homeButton: false,
        geocoder: false,
        animation: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        timeline: false,
        projectionPicker: false,
        vrButton: false,
        fullscreenButton: false,
        navigationHelpButton: false,
    });
    if (_viewer.value) {
        _viewer.value.creditDisplay.container.style.display = "none";
        Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(...props.home);
        _viewer.value.camera.flyHome(2.0);
    }
    window.addEventListener("resize", () => {
        _viewer.value?.resize();
    });
});
onUnmounted(() => {
    window.addEventListener("resize", () => {
        _viewer.value?.resize();
    });
    _viewer.value?.destroy();
});
</script>
