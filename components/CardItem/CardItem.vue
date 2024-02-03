<template>
  <div :class="$cls.container">
    <div :class="$cls.title">
        <a href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem nihil sequi illum cupiditate?
        </a>
    </div>
    <div :class="$cls.text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem nihil sequi illum cupiditate?
    </div>
    <div :class="$cls.link">
        <a href="#">Подробнее</a>
    </div>
    <div :class="$cls.info" >
        <div class="resource">
            rss
        </div>
        <div class="date">
            01.01.2001
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import cls from './style.module.scss';
    type ClassType = typeof cls;
    const $cls: ClassType = cls;
</script>

<style>

</style>