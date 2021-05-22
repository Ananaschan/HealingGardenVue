<template>
  <div>
    <div class="topImg">
      <el-image
        style="width: 1980px; height: 400px"
        :src="img1"
        :fit="fit1"></el-image>
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
          <el-col :span="4" v-for="food in foodList" :key="food.id">
            <div class="single-menu-item">
              <el-image
                style="width: 200px; height: 200px"
                :src="menuImg"
                :fit="fit2"></el-image>
              <h4>{{food.foodName}}</h4>
              <p>{{food.foodType.typeName}}</p>
              <p>{{food.description}}</p>
              <p class="price-tag"><b style="color: black">${{food.price}}</b> Plus Tax</p>
              <a href="" class="order-btn">Add to Cart</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "menu",
      data() {
        return {
          fit1: 'cover',
          fit2: "fill",
          img1: require('../../assets/img/bread/bread-bg-menu.jpg'),
          menuImg:require('../../assets/img/menu/menu-item-bg-2.jpg'),
          foodList:[]
        }
      },
      mounted(){
        this.getList()
      },
      methods: {
        getList(){
          this.$axios
            .post('/foodList')
            .then(successResponse => {
              console.log(successResponse.data)
              this.foodList = successResponse.data
            })
            .catch(failResponse => {
            })
        }
      }
    }
</script>

<style scoped>
  .topImg{
    margin-bottom: 100px;
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

  .menu-area .order-btn {
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 2px solid;
    padding: 8px 10px;
    color: black;
  }
</style>
