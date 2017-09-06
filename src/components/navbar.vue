<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand nav-logo" href="#">
            <img src="../assets/logo.png">
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left">
            <li class="active"><a href="#">首页</a></li>
            <li><a href="#">商品</a></li>
            <li><a href="#">关于</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" data-toggle="modal" data-target="#myModal" class="login" v-show="!isLogin">登录</a></li>
            <li><span class="username" v-show="isLogin">{{username}} | <a href="#"  v-show="isLogin" class="login" @click="loginout">[退出]</a></span></li>
            <li><a href="#" class="shopping-cart"><span class="icon-shopping_cart"></span>购物车<span class="badge number" v-show="shopNumber!=0">{{shopNumber}}</span></a></li>          
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav> 
    <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">登录</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control"  placeholder="admin" v-model="username">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="密码" v-model="pwd">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="login" data-dismiss="modal">登录</button>
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="login">取消</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal --> 
  </div>
</template>

<script>
  export default {
    props: {
      shopNumber: {
        type:Number,
        default:0
      },
      isLogin: {
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        username:'',
        pwd:''       
      }
    },
    methods: {
      login() {
        this.$emit('loginCheck',this.username,this.pwd);
      },
      loginout() {
        this.$emit('loginout',this.username,this.pwd);
      }
    }
  }
</script>

<style scoped>
  .nav-logo {
    display: inline-block;
  }
  .nav-logo img {
    display: inline-block;
    width: 60%;
    margin-top: -6px;
  }

  .login:active,.login:focus,.login:visited,.login:link{
    border:none;
    outline: 0;
  }
  @media only screen and (max-width: 468px)  {
    .nav-logo {
    display: inline-block;
    width:60%;
    }
    .nav-logo img {
    display: inline-block;
    width: 80%;
    }

  }
  .username {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    color:#fff;
  }
  .username a {
    color:#fff;
  }
  .username a:hover {
    color:#2c3e50;
  }
  .icon-shopping_cart {
    padding-right: 4px;
    vertical-align: middle;
  }
  .shopping-cart {
    position: relative;
  }
  .number {
    position: absolute;
    top:6px;
    left: 72px;
  }
</style>
