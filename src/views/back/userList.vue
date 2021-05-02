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
          <el-button type="primary" plain>修改</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="visible">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible = false,deleteUser(scope.row.id)">确定</el-button>
            </div>
            <el-button slot="reference" type="danger" plain>删除</el-button>
          </el-popover>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "userList",
      data() {
        return {
          tableData: []
        }
      },mounted(){
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
