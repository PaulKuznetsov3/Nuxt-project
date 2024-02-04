<template>
  <div class="navbar">
    <div class="title">
      <h1>Список новостей</h1>
      <button class="updateBtn">
        <img :src="update" alt="">
      </button>
    </div>
    <div class="searchInput">
      <input type="text">
      <button class="buttonSearch" type="button">
        <img :src="search" alt="">
      </button>
    </div>
  </div>
  <div class="line"></div>
</template>

<script lang="ts" setup>
  import update from '../assets/icons/update.svg';
  import search from '../assets/icons/search.svg';

  
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
    font-family: Arial;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .updateBtn {
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    img {
      width: 100%;
    }
  }

  .searchInput {
    position: relative;
    box-shadow: 0px 1px 4px 0px #0000000D;
    box-shadow: 0px 2px 4px 0px #0000000D;
  }
  .buttonSearch {
    position: absolute;
    background-color: transparent;
    border: none;
    width: 20px;
    height: 20px;
    right: 5%;
    cursor: pointer;
    img {
      width: 100%;
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