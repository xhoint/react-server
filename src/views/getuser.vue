
<template>
  <div class="app-container">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>用户权限</el-breadcrumb-item>
     <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 添加按钮 -->
    <div class="filter-container">
      <el-form>
        <el-form-item>
          <el-button type="primary" icon="plus" class='add' @click="addrole" >创建角色</el-button>
        </el-form-item> 
      </el-form>
    </div>
    <!-- 表格数据 -->
    <el-table
      :data="role"
      v-loading.body="listLoading"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="80" type="index" :index="indexMethod"></el-table-column>
      <el-table-column align="center" label="用户名" prop="name" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="角色" width="100" prop="job"></el-table-column>
      <el-table-column align="center" label="创建时间" width="170" prop="date"></el-table-column>
      <el-table-column align="center" label="地址" width="170" prop="address"></el-table-column>

      <el-table-column align="center" label="管理" width="220">
        <template>
          <el-button type="primary" icon="edit">修改</el-button>
          <el-button type="danger" icon="delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部分页 -->
    <el-pagination
      :current-page="listQuery.pageNum"
      :page-size="listQuery.pageRow"
      :total="totalCount"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>

    <!-- 添加按钮弹框 -->
    <el-dialog>
      <el-form
        class="small-space"
        label-position="left"
        label-width="80px"
        style="width: 300px; margin-left:50px;"
      >
        <el-form-item label="用户名" required>
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" required>
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input type="password" placeholder="不填则表示不修改"></el-input>
        </el-form-item>
        <el-form-item label="角色" required>
          <el-select placeholder="请选择">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="昵称" required>
          <el-input type="text"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="success">创 建</el-button>
        <el-button type="primary">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//引入角色列表
// import { GetRole } from "../api/user";

export default {
  data() {
    return {
      // 模拟数据
      role: [
        {
          job: "仓库文员",
          date: "2016-05-02",
          name: "小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          job: "管理员",
          date: "2020-05-02",
          name: "小龙",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          job: "软件工程师",
          date: "2019-05-02",
          name: "小康",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          job: "服务工程师",
          date: "2016-05-04",
          name: "小明",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          job: "服务经理",
          date: "2016-05-01",
          name: "小米",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          job: "生产助理",
          date: "2016-05-03",
          name: "小猫",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

      totalCount: 0, //分页组件--数据总条数
      listLoading: false, //数据加载等待动画
      listQuery: {
        pageNum: 1, //页码
        pageRow: 30, //每页条数
      },
      // role: [], //角色列表
      dialogStatus: "create",
      dialogFormVisible: false,
      textMap: {
        update: "编辑",
        create: "新建用户",
      },
      tempUser: {
        username: "",
        password: "",
        nickname: "",
        roleId: "",
        userId: "",
      },
    };
  },

  methods: {
    //序号索引
    indexMethod(index) {
      return index +1;
    },

    //显示添加弹出框
    addrole(){
      this.tempUser.username = "";
        this.tempUser.password = "";
        this.tempUser.nickname = "";
        this.tempUser.roleId = "";
        this.tempUser.userId = "";
        this.dialogStatus = "create"
        this.dialogFormVisible = true
    }
  },
};
</script>

<style lang="less" scoped>
.add{
  display: flex;
  text-align: left;
  margin-top: 30px;
}
</style>