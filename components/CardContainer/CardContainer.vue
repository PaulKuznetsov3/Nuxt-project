
<template>
  <div :class="$cls.container">
    <div :class="$cls.content" v-if="props.format === 'tile'" >
      <CardItem 
      v-for="item in props.newMosArr"
      :title="item.title._text"
      :descr="item.description._text"
      :link="item.link._text"
      :key = "item.pubDate._text"
      :date="item.pubDate._text"
    />
    </div>
    <div v-if="props.format === 'list'">
      <ListItem
        v-for="item in props.newMosArr"
        :title="item.title._text"
        :descr="item.description._text"
        :link="item.link._text"
        :key = "item.pubDate._text"
        :date="item.pubDate._text"
        :image="item.enclosure._attributes"
      />
    </div>

  </div>
</template>

<script lang="ts" setup>
  import cls from './style.module.scss';
  import { ref } from 'vue';

  type ClassType = typeof cls;
  const $cls: ClassType = cls;

  interface Props {
    format: string,
    newMosArr: any
  }



  const props = defineProps<Props>();

</script>

<style>

</style>