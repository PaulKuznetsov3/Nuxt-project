<template>
  <div class="container">
    <PageHeader :searchQuery="searchQuery" :updateQuery="updateQuery"/>
    <Filteres :format="format"  :handleBtnListClick="handleBtnListClick" :handleBtnTileClick="handleBtnTileClick" />
    <CardContainer :format="format" :newMosArr="newMosArr"/>
  </div>
  
</template>

<script lang="ts" setup>
    import { ref, onMounted, computed, watch } from 'vue';
    import { xml2json } from 'xml-js';
    
    const route = useRoute();
    const router = useRouter();

    const newMosRef = ref();
    //const newLentaRef = ref();

   // запрос на сервер
    const { data: newNos } = await useFetch('https://www.mos.ru/rss');
   // const { data: newLenta } = await useAsyncData(() => $fetch('http://lenta.ru/rss/news'));

    // присвоение значений
    newMosRef.value = newNos.value;
    //newLentaRef.value = newLenta.value;

    // преобразование в json
    const newMosJson =  JSON.parse(xml2json(newMosRef.value, { spaces: 2, compact: true }));
    //const newLentaJson = xml2json(newLentaRef.value, { spaces: 2, compact: true });

    // преобразование в массив
    const newMosArr = newMosJson.rss.channel.item;
   // console.log('jsonLenta', JSON.parse(newLentaJson))

   const searchQuery = ref(route.query.q || ''); // Получаем значение из query параметра
    const newsList = newMosArr; // Ваш список новостей

    const filteredNews = computed(() => {
      return newsList.filter((news: any) => {
        if (typeof searchQuery.value === 'string') {
          return news.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                 news.content.toLowerCase().includes(searchQuery.value.toLowerCase());
        }
        return false; // handle array case if needed
      });
    });

    
    function updateQuery(value: string) {
      searchQuery.value = value;
      router.push({ query: { q: value } });
    }


    watch(() => route.query.q, (newValue) => {
      searchQuery.value = newValue || '';
      console.log('newValue', newValue)
    });

    console.log('json', newMosArr)
    const format = ref<string>('list');
    console.log('format', format.value)

    onMounted(async () => {
      const savedFormat = localStorage.getItem('format');
      if (savedFormat) {
        format.value = savedFormat;
      }
    });

    const handleBtnListClick = () => {
      localStorage.setItem('format', 'list');
      return format.value = 'list';
    };

    const handleBtnTileClick = () => {
      localStorage.setItem('format', 'tile');
       return format.value = 'tile';
    };
  
</script>

<style lang="scss" scoped>
    .container {
    padding: 36px 170px 48px;
  }
</style>