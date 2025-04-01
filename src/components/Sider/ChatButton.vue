<template>
    <div class="tooltip tooltip-accent tooltip-top border-0" data-tip="聊天">
        <button
            class="btn btn-square iconfont border-0 shadow-none iconfont-chat"
            :class="{
                ' bg-blue-700 dark:bg-gray-900 text-white':
                    props.isActive,
                'bg-blue-400 dark:bg-gray-700 icontext': !props.isActive,
            }"
            v-bind="attrs"
        ></button>
    </div>
</template>
<script setup lang="ts">
import { useAttrs } from "vue";

const props = defineProps<{
    isActive: boolean;
}>();
const attrs = useAttrs();
</script>
