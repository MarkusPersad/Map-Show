<template>
    <div class="flex flex-col h-screen w-screen overflow-hidden">
        <slot name="navbar"></slot>
        <div class="flex-1 flex">
            <slot name="sider"></slot>
            <slot name="context"></slot>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
