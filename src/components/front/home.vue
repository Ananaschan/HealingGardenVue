<template>
  <div class="block">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in imagesBox" :key="item.id">
        <img :src="item.idView" class="image" style="background-size: cover;">
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "home",
      data() {
        return {
          imagesBox: [
            {id: 1, idView: require("../../assets/img/slider/hero-area-bg.jpg")},
            {id: 2, idView: require("../../assets/img/slider/hero-area-bg-2.jpg")}
            ],
          fiveNews: []
        }
      }
    }
</script>

<style scoped>

</style>
