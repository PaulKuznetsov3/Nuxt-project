<template>
  <div class="container">
    <PageHeader />
    <Filteres :handleBtnListClick="handleBtnListClick" :handleBtnTileClick="handleBtnTileClick" />
    <CardContainer :format="format"/>
  </div>
  
</template>

<script lang="ts" setup>

    import { ref, onMounted } from 'vue';

    const format: Ref = ref<string>('list');
     
    onMounted(() => {
      const savedFormat = localStorage.getItem('format');
     
      if (savedFormat) {
          format.value = savedFormat;
      }
    });

    const handleBtnListClick = () => {
        format.value = 'list'; 
        console.log('asd', format.value )
        localStorage.setItem('format', 'list');
    };

    const handleBtnTileClick = () => {
        format.value = 'tile'; 
        console.log('asd', format.value )
        localStorage.setItem('format', 'tile');
    };
</script>

<style lang="scss" scoped>
    .container {
    padding: 36px 170px 48px;
  }
</style>