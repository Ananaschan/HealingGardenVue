<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="item in imagesBox" :key="item.id">
        <img :src="item.idView">
      </el-carousel-item>
    </el-carousel>

    <div class="aboutUs">
      <el-row :gutter="24">
        <el-col :span="10" offset="2">
          <div class="about-us-content-area">
            <div class="section-title">
              <h4 class="wow slideInDown">Authentic</h4>
              <h2 class="wow slideInDown">Best Pizza</h2>
            </div>
            <i class="el-icon-minus" style="color: rgb(255,105,0);font-size: 40px"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Delectus aperiam, consequuntur cumque inventore necessitatibus debitis facere!</p>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="about-us-bg">
            <img src="../../assets/img/about-us.jpg" alt="">
          </div>
        </el-col>

      </el-row>
    </div>

    <div class="aboutUs2">
      <el-row :gutter="24">
        <el-col :span="4" offset="6">
          <div class="facility-area">
            <i class="el-icon-orange" style="color: rgb(255,105,0);font-size: 60px"></i>
            <h4><i class="el-icon-minus" style="font-size: 20px"></i> Real Italian <i class="el-icon-minus"
                                                                                      style="font-size: 20px"></i></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="facility-area">
            <i class="el-icon-fork-spoon" style="color: rgb(255,105,0);font-size: 60px"></i>
            <h4><i class="el-icon-minus" style="font-size: 20px"></i> Amazing Wines <i class="el-icon-minus"
                                                                                       style="font-size: 20px"></i></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="facility-area">
            <i class="el-icon-dish-1" style="color: rgb(255,105,0);font-size: 60px"></i>
            <h4><i class="el-icon-minus" style="font-size: 20px"></i> Salad Time <i class="el-icon-minus"
                                                                                    style="font-size: 20px"></i></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div id="menu" class="menu-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h4 class="wow slideInDown">Pizza Time</h4>
              <h2 class="wow slideInDown">Choose Yours</h2>
            </div>
            <i class="el-icon-minus" style="color: rgb(255,105,0);font-size: 80px"></i>
          </div>
        </div>
        <el-row :gutter="24">
          <el-col :span="4" offset="6">
            <div class="single-menu-item">
              <div class="menu-item-bg1"></div>
              <h4>Classic Cheese</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.</p>
              <p class="price-tag"><b>$22</b> Plus Tax</p>
              <a href="#" class="order-btn">Add to Cart</a>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="single-menu-item">
              <div class="menu-item-bg2"></div>
              <h4>Vegetable &amp; Mozzarella</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.</p>
              <p class="price-tag"><b>$22</b> Plus Tax</p>
              <a href="#" class="order-btn">Add to Cart</a>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="single-menu-item">
              <div class="menu-item-bg3"></div>
              <h6>Napelotana</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, numquam.</p>
              <p class="price-tag"><b>$22</b> Plus Tax</p>
              <a href="#" class="order-btn">Add to Cart</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="cta-area">
      <div class="container">
        <el-row :gutter="24">
          <el-col :span="10" offset="2">
            <div class="cta-content">
              <h2 class="wow slideInDown">Order Now</h2>
              <h6>Opening Hours</h6>
              <p>Sunday-Tuesday 10.00 - 23.00</p>
              <p>Friday-Saturday 09.00 - 24.00</p>
              <el-button style="color:#FFF;background-color: rgb(255,105,0)">Order Online</el-button>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="cta-right-content">
              <h2>...and find outwhy we are named the Best Pizza!</h2>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="ranking-section section-padding">
      <div class="container">
        <el-row :gutter="24">
          <el-col :span="12">
            <div class="rank-num">
              <h1># <b>1</b></h1>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="rank-content text-center">
              <div class="section-title">
                <h6 class="wow slideInDown">Trending</h6>
                <h2 class="wow slideInDown">Pizzeola in NY</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptate alias labore, fugit, dicta expedita?</p>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        imagesBox: [
          {id: 1, idView: require("../../assets/img/slider/hero-area-bg.jpg")},
          {id: 2, idView: require("../../assets/img/slider/hero-area-bg-2.jpg")},
          {id: 3, idView: require("../../assets/img/slider/hero-area-bg-3.jpg")}
        ],
        fiveNews: []
      }
    }
  }
</script>

<style scoped>
  .el-carousel {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
    color: #989898;
    background: #fff;
    position: relative;
    z-index: 1;
    margin-bottom: 200px;
  }

  .about-us-content-area {
    margin-top: 20px;
    float: right;
    border: 5px solid #eee;
    height: 353px;
    width: 540px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 200px;
    background-color: #FFF;
  }

  .about-us-content-area h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: 1px;
  }

  .about-us-bg {
    margin-left: -50px;
    margin-top: -75px;
    float: left;
  }

  .aboutUs p {
    color: #909399
  }

  .aboutUs2 {
    padding-bottom: 100px;
    border-bottom: rgba(0, 0, 0, .12) 1px solid;
  }

  .aboutUs2 p {
    color: #909399
  }

  .single-menu-item {
    text-align: center;
    border: 1px solid #eee;
    padding: 25px;
    margin-top: 50px;
  }

  .menu-area p {
    color: #909399
  }

  .menu-area .order-btn{
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 2px solid;
    padding: 8px 10px;
    color: black;
  }
  .menu-item-bg1 {
    filter: brightness(75%);
    background-image: url("../../assets/img/menu/menu-item-bg-2.jpg");
    height: 200px;
    width: 300px;
    margin: auto;
  }

  .menu-item-bg2 {
    background-image: url("../../assets/img/menu/menu-item-bg-3.jpg");
    height: 200px;
    width: 300px;
    margin: auto;
  }

  .menu-item-bg3 {
    background-image: url("../../assets/img/menu/menu-item-bg.jpg");
    height: 200px;
    width: 300px;
    margin: auto;
  }

  .cta-area{
    background-size: cover;
    background-position: center;
    background-color: #ddd;
    position: relative;
    z-index: 1;
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/img/order-online-bg.jpg");
    filter: brightness(50%);
  }

  .cta-content {
    height: 209px;
    width: 380px;
    text-align: center;
    background: #fff;
    padding: 70px 50px;
    margin: 20px;
  }

  .cta-content p{
    color: #909399
  }
  .cta-right-content {
    padding: 100px;
    text-align: center;
  }

  .cta-right-content h2 {
    color: #fff;
    font-size: 36px;
    line-height: 1.4;
    letter-spacing: 1px;
  }

  .cta-content .boxed-btn {
    margin-top: 30px;
  }

  .ranking-section{

  }

  .rank-num {
    background: #FE6900;
    width: 400px;
    height: 400px;
    line-height: 400px;
    justify-content: center;
    align-items: center;
    color: #fff;
    right: 0;
    z-index: 9;
    float: right;
  }

  .rank-content {
    margin-left: -20px;
    width: 500px;
    height: 300px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    float: left;
    margin-top: 50px;
    z-index: 1;
  }


</style>
