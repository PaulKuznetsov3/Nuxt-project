<template>
  <div :class="$cls.container">
    <div :class="$cls.content">
        <div :class="$cls.image">
            <img :src="defaultImage" alt="картинка">
        </div>
        <div :class="$cls.body">
            <div :class="$cls.title">
                <a :href="$props.link">
                    {{ props.title }}
                </a>
            </div>
            <div :class="$cls.text">
                {{ props.descr }}
            </div>
        </div>
    </div>
    <div :class="$cls.info">
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
    import defaultImage from '../../assets/defaultImg/defoultImage.png';
    type ClassType = typeof cls;
    const $cls: ClassType = cls;

    interface Props {
    title: string,
    descr: string,
    link: string,
    date: string,
    image: any
  }

  const props = defineProps<Props>();

  const url = new URL(props.link);
  const domain = url.hostname;

  const date = new Date(props.date);
  const formattedDate = `${date.getDate()}.${(String(date.getMonth() + 1)).padStart(2, '0')}.${date.getFullYear()}`;

  let img = '';
  //const {urlImage} = props.image
 // console.log(Object.values(props.image))
    if (props.image && props.image.url) {
     img = props.image.url;
    } else {
      console.log('props.image или props.image.url не определены');
    }
</script>

<style>

</style>