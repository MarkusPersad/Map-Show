<template>
    <div class="w-full h-full">
        <div id="cesiumViewer" class="relative w-full h-full">
            <slot name="toolbar"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from "vue";
import { Camera, Rectangle, Viewer } from "cesium";
import { CesiumViewer } from "../types";

const props = defineProps<{
    home: [number, number, number, number];
    baseLayer: any;
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
        baseLayer: props.baseLayer,
        timeline: false,
        projectionPicker: false,
        vrButton: false,
        fullscreenButton: false,
        navigationHelpButton: false,
    });
    if (_viewer.value) {
        _viewer.value.resolutionScale = window.devicePixelRatio;
        _viewer.value.scene.postProcessStages.fxaa.enabled = true;
        _viewer.value.scene.verticalExaggeration = 2.0;
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
