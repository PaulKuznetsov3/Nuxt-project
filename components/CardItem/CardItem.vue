<template>
  <div :class="$cls.container">
    <div :class="$cls.title">
        <a :href="$props.link">
            {{ props.title }}
        </a>
    </div>
    <div :class="$cls.text">
        {{ props.descr }}
    </div>
    <div :class="$cls.link">
        <a :href="$props.link">Подробнее</a>
    </div>
    <div :class="$cls.info" >
        <div class="resource">
            {{ domain }}
        </div>
        <div class="date">
            {{ formattedDate }}
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import cls from './style.module.scss';
    type ClassType = typeof cls;
    const $cls: ClassType = cls;

    
  interface Props {
    title: string,
    descr: string,
    link: string
    date: string
  }

  const props = defineProps<Props>();

  const url = new URL(props.link);
  const domain = url.hostname;

  const date = new Date(props.date);
  const formattedDate = `${date.getDate()}.${(String(date.getMonth() + 1)).padStart(2, '0')}.${date.getFullYear()}`;
</script>

<style>

</style>