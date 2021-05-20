<template>
  <div>
    <h1 style="">订单列表</h1>
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
        prop="id"
        label="订单编号"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="userId"
        label="用户id"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="money"
        label="总价"
        sortable
      >
      </el-table-column>

      <el-table-column
        class="el-table-column"
        prop="time"
        label="时间"
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
          <el-button type="success" plain @click="showEditDialog(scope.row.id)">查看详情</el-button>
        </template>

      </el-table-column>
    </el-table>


    <el-dialog
      title="订单详情信息"
      :visible.sync="editDialogVisible"
      width="50%"
    >

      <el-table
        :data="editForm"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="ordersId"
          label="订单编号"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="foodId"
          label="食物id"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="count"
          label="数量"
          >
        </el-table-column>
      </el-table>


      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "ordersList",
      data() {
        return {
          tableData: [],
          editDialogVisible: false,
          editForm: {
            id: 0,
            foodId: 0,
            ordersId: 0,
            count: 0
          },
          ordersDetailList: {
          },
        }
      },
      mounted(){
        this.getOrdersList()
      },
      methods: {
        getOrdersList(){
          this.$axios
            .post('/getOrders')
            .then(successResponse => {
              console.log(successResponse.data)
              this.tableData = successResponse.data
            })
            .catch(failResponse => {
            })
        },
        showEditDialog(id){
          this.$axios
            .post('/getOrdersDetailById',this.$qs.stringify({
              id: id
            }))
            .then(successResponse => {
              console.log("getOrdersDetailById:"+successResponse.data)
              this.editForm = successResponse.data
            })
            .catch(failResponse => {
            })
          this.editDialogVisible = true
        }
      }
    }
</script>

<style scoped>

</style>
