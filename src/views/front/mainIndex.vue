<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="12" >
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">
                <router-link to="/home">HOME</router-link>
              </el-menu-item>
              <el-menu-item index="2">ABOUT</el-menu-item>
              <el-menu-item index="3">
                <router-link to="/menu">MENU</router-link>
              </el-menu-item>
              <el-menu-item index="4">GALLERY</el-menu-item>
              <el-menu-item index="5">BLOG</el-menu-item>
              <el-menu-item index="6">CONTACT</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="6" :offset="6">
            <el-button v-show="!login" type="success" round @click="dialogVisible = true">登录</el-button>
            <el-button v-show="login" type="success" plain>欢迎你，</el-button>
            <el-button v-show="login" type="danger" plain @click="quit">退出</el-button>
<!--            <el-button type="danger" plain @click="change">切换</el-button>-->

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

    <el-dialog
      title="HealingGarden用户登录"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <div class="text item">
        <el-input
          placeholder="请输入账号"
          v-model="loginForm.userName"
          clearable>
        </el-input>
        <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="userLogin">登 入</el-button>
  </span>
    </el-dialog>
  </div>



</template>

<script>
    export default {
        name: "mainIndex",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          dialogVisible: false,
         loginForm:{
           userName:'',
           password:''
         },
          login:false
        };
      },
      computed:{
        isLogin:function () {
          return localStorage.getItem("user").valueOf()==="0"
        }
      },
      mounted() {
        this.isLogin()
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        userLogin () {
          var _this = this
          console.log(this.$store.state)
          this.$axios
            .post('/userLogin', {
              userName: this.loginForm.userName,
              password: this.loginForm.password
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                //用户名密码匹配正确
                //调用store中adminLogin方法保存用户登录状态
                _this.$store.commit('userLogin',_this.loginForm)
                _this.dialogVisible = false
                this.$router.replace({path: '/menu'})
                this.change()
              }else {
                this.$message.error('登录失败');
              }
            })
            .catch(failResponse => {
            })
        },
        quit() {
          var _this = this
          _this.$store.commit('userLogin',0)
          this.change()
          this.$router.push("/home")
        },
        change(){
          this.login = !this.login
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

  * {
    text-decoration: none;
  }
</style>
