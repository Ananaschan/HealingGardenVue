<template>
  <div>
    <h1 style="">用户列表</h1>
    <el-table
      class="el-table"
      :data="tableData"
      style="width: 80%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        class="el-table-column"
        type="selection"
      >
      </el-table-column>
      <el-table-column
        class="el-table-column"
        prop="foodName"
        label="食品名称"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="foodType"
        label="食物种类"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="price"
        label="价格"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="description"
        label="描述"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop=""
        label="操作"
        sortable
      >

        <template slot-scope="scope">
          <el-button type="primary" plain @click="showEditDialog(scope.row.id)">修改</el-button>
          <el-popover
            placement="top"
            width="160"
          >
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" >取消</el-button>
              <el-button type="primary" size="mini" @click="deleteFood(scope.row.id)">确定</el-button>
            </div>
            <el-button slot="reference" type="danger" plain>删除</el-button>
          </el-popover>
        </template>

      </el-table-column>
    </el-table>


    <el-dialog
      title="修改用户信息"
      :visible.sync="editDialogVisible"
      width="50%"
    >
      <el-form :model="editForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="食物名称" prop="userName">
          <el-input type="text" v-model="editForm.foodName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="食物类型" prop="password">
          <el-input type="password" v-model="editForm.foodType" autocomplete="off"></el-input>

        </el-form-item>


        <el-form-item label="价格" prop="telephone">
          <el-input v-model.number="editForm.price"></el-input>
        </el-form-item>

        <el-form-item label="描述" prop="address">
          <el-input v-model.number="editForm.description"></el-input>
        </el-form-item>

      </el-form>

      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editDialogVisible = false,submitForm('ruleForm')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "foodList",
      data() {

        var checkFoodName = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('食物名称不能为空'));
          } else {
            callback();
          }
        };
        var checkFoodType = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入食物种类'));
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
          tableData: [],
          editDialogVisible: false,
          editForm: {},
          rules: {
            foodName: [
              { validator: checkFoodName, trigger: 'blur' }
            ],
            foodType: [
              { validator: checkFoodType, trigger: 'blur' }
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
        this.getList()
      },
      methods: {
        getList(){
          this.$axios
            .post('/foodList')
            .then(successResponse => {
              console.log(successResponse.data)
              this.tableData = successResponse.data
            })
            .catch(failResponse => {
            })
        },
        deleteFood(id){
          this.$axios
            .post('/deleteFood',this.$qs.stringify({
              id: id
            }))
            .then(successResponse => {
              console.log(successResponse.data)
              this.getList()
            })
            .catch(failResponse => {
            })
        },
        showEditDialog(id){
          this.$axios
            .post('/getFoodById',this.$qs.stringify({
              id: id
            }))
            .then(successResponse => {
              console.log(successResponse.data)
              this.editForm = successResponse.data
            })
            .catch(failResponse => {
            })
          this.editDialogVisible = true
        },
        updateFood(){
          this.$axios
            .post('/updateFood',{
              id: this.editForm.id,
              foodName: this.editForm.foodName,
              foodType: this.editForm.foodType,
              price: this.editForm.price,
              description: this.editForm.description
            })
            .then(successResponse => {
              console.log(successResponse.data)
              this.getList()
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
        }
      }
    }
</script>

<style scoped>

</style>
