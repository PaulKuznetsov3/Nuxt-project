<template>
  <div class="container">
    <PageHeader />
    <Filteres :handleBtnListClick="handleBtnListClick" :handleBtnTileClick="handleBtnTileClick" />
    <CardContainer :format="format"/>
  </div>
  
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import * as parser from 'xml2json';

export default {
  setup() {
    const format = ref<string>('list');

    onMounted(async () => {
      const savedFormat = localStorage.getItem('format');
      if (savedFormat) {
        format.value = savedFormat;
      }

      const newMos = await fetchAndParseXml();
      console.log('=>', newMos);
      // Convert XML to JSON
      const json = parser.toJson(newMos);
      console.log("to json ->", json);
    });

    const handleBtnListClick = () => {
      format.value = 'list';
      console.log('asd', format.value);
      localStorage.setItem('format', 'list');
    };

    const handleBtnTileClick = () => {
      format.value = 'tile';
      console.log('asd', format.value);
      localStorage.setItem('format', 'tile');
    };

    // Function to fetch and parse XML
    const fetchAndParseXml = async () => {
      const response = await fetch('https://www.mos.ru/rss');
      const xml = await response.text();
      return xml;
    };

    return {
      format,
      handleBtnListClick,
      handleBtnTileClick,
    };
  },
};
</script>

<style lang="scss" scoped>
    .container {
    padding: 36px 170px 48px;
  }
</style>