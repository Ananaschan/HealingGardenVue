<template>
  <div>
    <h1 style="">管理员列表</h1>
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

    </el-table>
  </div>

</template>

<script>
    export default {
        name: "adminList",
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
            .post('/adminList')
            .then(successResponse => {
              this.tableData = successResponse.data
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
