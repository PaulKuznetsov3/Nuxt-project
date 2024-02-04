
<template>
  <div :class="$cls.container">
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <!-- <ListItem/>
    <ListItem/>
    <ListItem/> -->
  </div>
</template>

<script lang="ts" setup>
  import cls from './style.module.scss';
  type ClassType = typeof cls;
  const $cls: ClassType = cls;
</script>

<style>

</style>