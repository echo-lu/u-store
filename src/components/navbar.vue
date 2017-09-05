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
            <li><a href="#">登录</a></li>
            <li><a href="#">我的购物车</a></li>          
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>  
  </div>
</template>

<script>
export default {
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

</style>
