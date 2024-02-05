
<template>
  <div :class="$cls.container">
    <CardItem v-if="props.format === 'tile'"/>
    <ListItem v-if="props.format === 'list'"/>
  </div>
</template>

<script lang="ts" setup>
  import cls from './style.module.scss';
  import { ref } from 'vue';

  type ClassType = typeof cls;
  const $cls: ClassType = cls;

  interface Props {
    format: string
  }

  const props = defineProps<Props>();

 


</script>

<style>

</style>