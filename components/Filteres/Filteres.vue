<template>
  <div :class="$cls.container">
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
        <button class="btnList" @click="$emit(`${props.handleBtnListClick()}`)">
            <div class="itemBtnList1"></div>
            <div class="itemBtnList"></div>
        </button>

        <button class="btnTile" @click="$emit(`${props.handleBtnTileClick()}`)">
            <div class="btnTileItem"></div>
            <div class="btnTileItem"></div>
            <div class="btnTileItem"></div>
            <div class="btnTileItem"></div>
        </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

    import cls from './style.module.scss';
    type ClassType = typeof cls;
    const $cls: ClassType = cls;

    interface Props {
        handleBtnListClick: () => void;
        handleBtnTileClick: () => void;
    }

    const props = defineProps<Props>();

   
</script>

<style lang="scss" scoped>

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
        background: none;
    }

    .itemBtnList1 {
        width: 18px;
        height: 8px;
  
        background-color: #C4C4C4;
    }

    .itemBtnList {
        margin-top: 2px;
        width: 18px;
        height: 8px;
        background-color: #C4C4C4;
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