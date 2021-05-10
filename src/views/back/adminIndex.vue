<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="RGB(57,61,73)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :gutter="20">

        <el-row :gutter="20">
          <el-col :span="6">
            <el-menu-item index="1" :span="18">HealingGarden后台管理</el-menu-item>
          </el-col>

          <el-col :span="6" :offset="12">
            <el-button type="danger" plain @click="quit">退出</el-button>
          </el-col>
        </el-row>

      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-knife-fork"></i>
                  <span>食品管理</span>
                </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">
                      <router-link to="/foodList">食品列表</router-link>
                    </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="/addFood">食品添加</router-link>
                    </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-notebook-2"></i>
                  <span>类别管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <router-link to="/foodTypeList">类别列表</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <router-link to="/addFoodType">类别添加</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <router-link to="/userList">用户列表</router-link>
                    </el-menu-item>
                  <el-menu-item index="3-2">
                    <router-link to="/addUser">用户添加</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>管理员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <router-link to="/adminList">管理员列表</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>©HealingGarden有限公司</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {

        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        quit() {
          var _this = this
          _this.$store.commit('adminLogin',"")
          this.$router.push("/adminLogin")
        }
      }
    }
</script>

<style scoped>
  .el-menu-demo{
    width: 100%;
    margin-left: -20px;
    padding-right: 40px;
  }
  .el-menu-vertical-demo{
    height: 860px;
  }
  .el-header, .el-footer {
    background-color: RGB(238,238,238);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #FFF;
    color: #333;
    text-align: center;
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
</style>
