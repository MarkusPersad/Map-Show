<template>
    <div class="flex flex-col h-screen w-screen overflow-hidden">
        <slot name="navbar"></slot>
        <div class="flex-grow flex">
            <slot name="sider"></slot>
            <slot name="context" class="flex-grow"></slot>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
