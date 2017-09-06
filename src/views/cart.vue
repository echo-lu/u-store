<template>
  <div id="app">
    <navbar></navbar> 
    <div class="container">
      <div class="cart-wrapper">
        <div class="name"><h3>我的购物车</h3></div>
        <div class="cart-list">
          <table class="table">
            <thead>
              <tr>
                <th>物品</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
                <th>编辑</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="pic">
                    <span class="icon-check_circle"></span>
                    <img src="" alt="">
                    <span class="pic-name">XXX</span>
                  </div>
                </td>
                <td>Mark</td>
                <td>
                  <div class="item-quantity">
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <a class="input-sub">-</a>
                        <span class="select-ipt">10</span>
                        <a class="input-add">+</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>
                  <div class="pic">
                    <span class="icon-check_circle"></span>
                    <img src="" alt="">
                    <span class="pic-name">XXXxxxxxxxxxxx</span>
                  </div>
                </td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
  components: {
    navbar
  }
}
</script>

<style scoped>
  #app {
     background-color: #f3f5f7;
  }
  .name {
    text-align: left;
    font-weight: 700;
  }
  .cart-list {
    
    width:100%;
  }
  table {
    width:100%;
    background-color: #fff;
  }
  table > thead > tr {
    background-color: #605f5f;
    border:2px solid #605f5f;
    color:#fff;

  }
  table > thead > tr >th {
    text-align: center;
  }
  table > tbody > tr {
    height: 120px;
  }
  table > tbody > tr > td:first-child {
    position: relative;
    width:50%;
  }
  .pic {
    position: absolute;
    top:0;
    left:10%;
    width:125.15px;
    height:120px;
    line-height: 120px;
  }
  .pic img{
    width: 86%;
    position: absolute;
    top:5px;
    margin-left: 40px;
    margin-right:10px;
  }
  .pic .pic-name {
    display: block;
    position: absolute;
    top:0;
    left:240px;
    width:40px;
    overflow: hidden;
  }
  .icon-check_circle {
    padding-left: 3px;
    color:orange;
    font-size: 22px;
  }
  .select-ipt {
    display: inline-block;
    min-width: 40px;
    height: 100%;
    vertical-align: top;
    margin-right: -4px;
    margin-left: -4px;
    border:1.5px solid #f0f0f0;
  }

  .input-add, .input-sub {
    min-width: 40px;
    height: 100%;
    border: 0;
    color: #605f5f;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    display: inline-block;
    background: #f0f0f0;
}
  .input-add:hover, .input-sub:hover {
    text-decoration: none;
    cursor: pointer;
  }
</style>
