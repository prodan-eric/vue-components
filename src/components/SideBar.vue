<script lang="ts" setup>
</script>

<template>
    <div class="component-options">
      <router-link class="component-option" to="/slider">Slider</router-link>
      <router-link class="component-option" to="/date-picker">Date Picker</router-link>
      <router-link class="component-option" to="/panel-container">Panel Container</router-link>
      <router-link class="component-option" to="/render-button">Render Button</router-link>
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
   text-decoration: none;
   color: black;
 }

 .component-option:hover{
    background-color: lightblue;
    cursor: pointer;
 }

 .component-option:active{
  color: blue;
 }
</style>

