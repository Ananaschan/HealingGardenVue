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
        prop="userName"
        label="用户名"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="password"
        label="密码"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="telephone"
        label="电话"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="address"
        label="地址"
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
              <el-button type="primary" size="mini" @click="deleteUser(scope.row.id)">确定</el-button>
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

        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="editForm.userName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="editForm.password" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item label="电话" prop="telephone">
          <el-input v-model.number="editForm.telephone"></el-input>
        </el-form-item>

        <el-form-item label="地址" prop="address">
          <el-input v-model.number="editForm.address"></el-input>
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
      name: "userList",
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
          tableData: [],
          editDialogVisible: false,
          editForm: {},
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
        }
      },
      mounted(){
        this.getList()
      },
      methods: {
        getList(){
          this.$axios
            .post('/userList')
            .then(successResponse => {
              console.log(successResponse.data)
              this.tableData = successResponse.data
            })
            .catch(failResponse => {
            })
        },
        deleteUser(id){
          this.$axios
            .post('/deleteUser',this.$qs.stringify({
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
            .post('/getUserById',this.$qs.stringify({
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
        updateUser(){
          this.$axios
            .post('/updateUser',{
              id: this.editForm.id,
              userName: this.editForm.userName,
              password: this.editForm.password,
              telephone: this.editForm.telephone,
              address: this.editForm.address
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
              this.updateUser()
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
  .el-table{
    margin:0 auto;
    text-align:center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 500px;
  }
</style>
