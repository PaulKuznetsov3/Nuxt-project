<template>
  <div class="container">
    <div class="buttonsResource">
        <button>
            Все
        </button>
        <button>
            lenta.ru
        </button>
        <button>
            Mos.ru
        </button>
    </div>
    <div class="buttonDisplay">
        <button class="btnList">
            <div class="itemBtnList1"></div>
            <div class="itemBtnList"></div>
        </button>

        <button class="btnTile">
            <div class="btnTileItem"></div>
            <div class="btnTileItem"></div>
            <div class="btnTileItem"></div>
            <div class="btnTileItem"></div>
        </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-between;
        margin-top: 28px;
    }

    .buttonsResource{
        display: flex;
        gap: 15px;
        button {
            background: transparent;
            border: none;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
        }
    }

    .buttonDisplay{
        display: flex;
        gap: 15px;
        button {
            border: none;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
        }
    }

    .btnList{
        display: block;
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        background: none;
    }

    .itemBtnList1 {
        width: 18px;
        height: 8px;
  
        background-color: #C4C4C4;
        box-sizing: border-box;
    }

    .itemBtnList {
        margin-top: 2px;
        width: 18px;
        height: 8px;
        background-color: #C4C4C4;
        box-sizing: border-box;
    }

    .btnTile {
        width: 18px;
        height: 18px;
        display: flex;
        padding: 0;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-around;
    }

    .btnTileItem{
        background-color: #C4C4C4;
        width: 8px;
        height: 8px;
    }
</style>