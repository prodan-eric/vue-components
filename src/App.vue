<script setup lang="ts">
import SideBar from './components/SideBar.vue'
</script>

<template>
    <div class="side-bar">
        <SideBar/>
    </div>
    <div class="components">
        <router-view/>
    </div>
</template>

<style>
  .side-bar{
    width: fit-content;
    margin-bottom: 100px;
  }
</style>

