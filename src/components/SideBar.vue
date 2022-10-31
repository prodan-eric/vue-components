<script lang="ts" setup>
</script>

<template>
    <div class="component-options">
      <div class="component-option" @click="$emit('component-click', $event)" >Date Picker</div>
      <div class="component-option" @click="$emit('component-click', $event)" >Panel Container</div>
      <div class="component-option" @click="$emit('component-click', $event)" >Render Button</div>
      <div class="component-option" @click="$emit('component-click', $event)" >Slider</div>
    </div>
</template>

<style>
 .component-options{
    display: grid;
    grid-template-columns: repeat( 1, minmax(30px, 1fr) );
    margin-right: 50px;
 }

 .component-option{
   outline: solid gray;
   outline-width: 1px;
   border-radius: 5px;
   margin-bottom: 10px;
   padding: 5px;
 }

 .component-option:hover{
    background-color: lightblue;
    cursor: pointer;
 }
</style>

