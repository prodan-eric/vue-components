<template>
    <div style="display: grid">
      <router-link class="component-option" to="/slider">Slider</router-link>
      <router-link class="component-option" to="/date-picker">Date Picker</router-link>
      <router-link class="component-option" to="/panel-container">Panel Container</router-link>
      <router-link class="component-option" to="/render-button">Render Button</router-link>
    </div>
</template>

<style>
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
  color: white;
 }
</style>

