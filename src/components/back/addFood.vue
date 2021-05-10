<template>
  <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="食物名称" prop="foodName">
      <el-input type="text" v-model="editForm.foodName" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="食物类型" prop="foodType">
      <el-select v-model=editForm.foodType.id>
        <el-option
          v-for="item in foodTypeList"
          :key="item.foodTypeList"
          :label="item.typeName"
          :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="价格" prop="price">
      <el-input v-model.number="editForm.price"></el-input>
    </el-form-item>

    <el-form-item label="描述" prop="description">
      <el-input v-model.number="editForm.description"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
        name: "addFood",
      data() {
        var checkFoodName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('食物名称不能为空'));
          } else {
            callback();
          }
        };
        var checkPrice = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入价格'));
          } else {
            callback();
          }
        };
        var checkDescription = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入食物描述'));
          }  else {
            callback();
          }
        };
        return {
          editForm: {

            foodName: '',
            foodType: {

              typeName :''
            },

            description: ''
          },
          foodTypeList: {

          },
          rules: {
            foodName: [
              { validator: checkFoodName, trigger: 'blur' }
            ],
            price: [
              { validator: checkPrice, trigger: 'blur' }
            ],
            description: [
              { validator: checkDescription, trigger: 'blur' }
            ]
          }
        }
      },
      mounted(){
        this.getFoodTypeList()
      },
      methods: {
        getFoodTypeList(){
          this.$axios
            .post('/getFoodTypeList')
            .then(successResponse => {
              this.foodTypeList = successResponse.data
            })
            .catch(failResponse => {
            })
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('submit!')
              //向后端提交数据
              this.updateFood()
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        formatter(row, column) {
          return row.address;
        },
        updateFood(){
          console.log("editForm:",this.editForm)
          this.$axios
            .post('/addFood',{
              id: this.editForm.id,
              foodName: this.editForm.foodName,
              foodType: this.editForm.foodType,
              price: this.editForm.price,
              description: this.editForm.description
            })
            .then(successResponse => {
              if (successResponse.data > 0) {
                //添加成功！
                this.$alert('添加成功！');
                this.$router.replace({path: '/foodList'})
              }
            })
            .catch(failResponse => {
            })
        },
      }
    }
</script>

<style scoped>

</style>
