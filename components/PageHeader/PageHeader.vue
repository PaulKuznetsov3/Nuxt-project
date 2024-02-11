<template>
  <div class="navbar">
    <div class="title">
      <h1>Список новостей</h1>
      <button class="updateBtn">
        <img :src="update" alt="">
      </button>
    </div>
    <div class="searchInput">
      <input type="text" :value="props.searchQuery">
      <button class="buttonSearch" type="button" @click="props.updateQuery">
        <img :src="search" alt="">
      </button>
    </div>
  </div>
  <div class="line"></div>
</template>

<script lang="ts" setup>
  import update from '../assets/icons/update.svg';
  import search from '../assets/icons/search.svg';

  interface Props {
    searchQuery: any
    updateQuery: any
  }

  const props = defineProps<Props>();

</script>

<style lang="scss" scoped>

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .updateBtn {
    background-color: transparent;
    margin-left: 30px;
    border: none;
    width: 40px;
    height: 40px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  .searchInput {
    position: relative;
    box-shadow: 0px 2px 4px 0px #0000000D;

    input {
      padding: 12px 60px 12px 15px;
      width: 321px;
      font-size: 14px;
    }
  }

  .buttonSearch {
    position: absolute;
    background-color: transparent;
    border: none;
    width: 20px;
    height: 20px;
    right: 8%;
    top: 24%;
    cursor: pointer;
    
    img {
      width: 20px;
      height: 20x;
    }
  }

  input {
    border: none;
  }

  .line {
    width: 100%;
    margin-top: 36px;
    height: 1px;
    background-color: #E5E5E5;
  }
</style>