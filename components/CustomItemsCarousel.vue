<script src="./js/CustomItemsCarousel.js"></script>
<template>
  <div class="container">
      <carousel :perPageCustom="perPageCustom">
        <slide v-for="(item, index) in itemsOrganized" :key="index+'item'">
            <custom-item :isOnlyImage="isOnlyImage" :item="item"></custom-item>
        </slide>
      </carousel>
  </div>
</template>
<style lang="sass" scoped>
    @import "./sass/CustomItemsCarousel"
</style>
