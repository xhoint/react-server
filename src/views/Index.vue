<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router='true'
          :unique-opened='true'
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
          </el-submenu>
          <el-submenu  index='2'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户权限</span>
            </template>
            <el-menu-item index="/index/getuser">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>角色列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/index/role">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>权限管理</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
            <span class="el-icon-s-fold toggle-btn"></span>
            <div class="welcome">
                <span> 退出</span>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.index {
  height: 100%;
  .el-menu{
      border-right: none;
  }
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
</style>
