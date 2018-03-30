<template>
   <el-container class="el-container">
    <el-main class="el-main"><router-link to="/">
      <el-button round style="float: right">首页</el-button></router-link>
      <el-card class="box-card">
        <p style="padding-left:50px ">登录</p>
        <el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item  label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <router-link to="/lygl">
              <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            </router-link>

            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>



   </el-container>
</template>

<script>
    export default {
      name: "login",
      data() {

        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else if (this) {
            callback(new Error('两次输入密码不一致!'));
          }
        };
        return {
          ruleForm2: {
            username: '',
            password: ''
          },
          rules2: {
            username: [
              { validator: validatePass, trigger: 'blur' }
            ],
            password: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

   .el-container{
     height: 100%;
   }
   .el-main{
     background-color: rgb(64, 158, 255);

   }
   .box-card{
     text-align: center;
      margin: 10% 40%;
     width: auto;
     height: 300px;
    padding-right: 50px;

   }


</style>
