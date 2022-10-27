<script lang="ts" setup>
import DatePickerOptions from "./options/DatePicker.vue";
import DatePickerComposition from "./composition/DatePicker.vue";
import {changeTheme} from './dateFunctions'
import { ref } from "vue";

const showTime = ref(true);
const showDateSideBar = ref(false);
</script>

<template>
<div class="date-picker">
    <div class="switcher">
    <p>Light&nbsp;</p> 
    <label class="switch">
      <input type="checkbox" @input="(event) => changeTheme(event as InputEvent)"/>
      <span class="slider round"></span> 
     </label>
    <p>&nbsp;Dark</p>

    <p>&nbsp;&nbsp;Show Time&nbsp;</p> 
    <label class="switch">
      <input type="checkbox" checked @input="()=>showTime=!showTime"/>
      <span class="slider round"></span> 
     </label>

     <p>&nbsp;&nbsp;Show Side Bar&nbsp;</p> 
     <label class="switch">
      <input type="checkbox" @input="()=>showDateSideBar=!showDateSideBar"/>
      <span class="slider round"></span> 
     </label>
  </div>

  <p class="api">Options API:</p>
  <DatePickerOptions :showTime="showTime" :showDateSideBar="showDateSideBar" />
  <p class="api">Composition API:</p>
  <DatePickerComposition :showTime="showTime" :showDateSideBar="showDateSideBar" />
</div>

</template>

<style>
@import './styles-date-picker.css';
.button-wrapper{
   display: flex;
   justify-content: center;
}

.switcher {
  display: flex;
  align-items: center;
}

.api {
  width: 170px;
}
</style>
