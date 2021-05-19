<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="12" >
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/home">HOME</router-link>
            </el-menu-item>
              <el-menu-item index="2">ABOUT</el-menu-item>
              <el-menu-item index="3">MENU</el-menu-item>
              <el-menu-item index="4">GALLERY</el-menu-item>
              <el-menu-item index="5">BLOG</el-menu-item>
              <el-menu-item index="6">CONTACT</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" :offset="6">
          <el-button type="success" round>登录</el-button>
        </el-col>
      </el-row>
      <div class="line"></div>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      © 2021 HealingGarden
      &nbsp&nbsp&nbsp&nbsp&nbsp
      <i class="el-icon-eleme"></i>
      &nbsp
      <i class="el-icon-phone-outline"></i>
      &nbsp
      <i class="el-icon-star-off"></i>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "mainIndex",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    line-height: 60px;
    background-color: rgb(30,32,31);
    color: #FFFFFF;
    text-align: center;

  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  * {
    text-decoration: none;
  }
</style>
