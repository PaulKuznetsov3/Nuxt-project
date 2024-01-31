<template>
  <div class="container">
    <div class="navbar">
      <div class="title">
        <h2>Список новостей</h2>
        <button class="updateBtn">
          <img :src="update" alt="">
        </button>
      </div>
      <div>
        <input type="text">
        <button type="button">
          <img :src="search" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import update from '../assets/icons/update.svg';
  import search from '../assets/icons/search.svg';
</script>

<style lang="scss" scoped>
.container {
    padding: 36px 170px 48px;
  }
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
</style>