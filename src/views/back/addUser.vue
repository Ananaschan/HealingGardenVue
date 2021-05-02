<template>
  <div>
    <h1 style="">添加用户</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>


      <el-form-item label="电话" prop="telephone">
        <el-input v-model.number="ruleForm.telephone"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="address">
        <el-input v-model.number="ruleForm.address"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
    export default {
        name: "addUser",
      data() {
        var checkUserName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('用户名不能为空'));
          } else {
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        };
        var telephone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入电话'));
          } else {
            callback();
          }
        };
        var address = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入地址'));
          }  else {
            callback();
          }
        };
        return {
          ruleForm: {
            userName: '',
            password: '',
            telephone: '',
            address: ''
          },
          rules: {
            userName: [
              { validator: checkUserName, trigger: 'blur' }
            ],
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            telephone: [
              { validator: telephone, trigger: 'blur' }
            ],
            address: [
              { validator: address, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('submit!')
              //向后端提交数据
              this.addUser()
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        addUser(){
          this.$axios
            .post('/addUser', {
              userName: this.ruleForm.userName,
              password: this.ruleForm.password,
              telephone: this.ruleForm.telephone,
              address: this.ruleForm.address
            })
            .then(successResponse => {
              if (successResponse.data > 0) {
                //添加成功！
                this.$alert('添加成功！');
                this.$router.replace({path: '/userList'})
              }
            })
            .catch(failResponse => {

            })
        }
      }
    }
</script>

<style scoped>
  .el-form{
    width: 500px;
    margin: 0 auto;
  }
</style>
