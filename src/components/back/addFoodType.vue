<template>
  <div>
  <h1 style="">添加食品种类</h1>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="种类名称" prop="userName">
      <el-input type="text" v-model="ruleForm.typeName" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
    export default {
        name: "addFoodType",
      data() {
        var checkTypeName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('用户名不能为空'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            typeName: ''
          },
          rules: {
            typeName: [
              { validator: checkTypeName, trigger: 'blur' }
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
              this.addFoodTypeName()
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        addFoodTypeName(){
          this.$axios
            .post('/addFoodType', {
              typeName: this.ruleForm.typeName
            })
            .then(successResponse => {
              if (successResponse.data > 0) {
                //添加成功！
                this.$alert('添加成功！');
                this.$router.replace({path: '/foodTypeList'})
              }
            })
            .catch(failResponse => {

            })
        }
      }
    }
</script>

<style scoped>

</style>
