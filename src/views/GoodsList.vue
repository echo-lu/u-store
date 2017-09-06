<template>
  <div id="app">
    <navbar :shop-number="shopnum" :isLogin="isLogin" v-on:loginCheck="loginCheck" v-on:loginout="loginout"></navbar>
    <div class="filter-nav text-left ">
      <div class="container">
        <div class="sortby-wrapper">
            <span class="sortby">类别：</span>
            <a href="javascript:void(0)"    @click="sortAli('all')" :class="{'cur':sortChecked == 'all'}">全部</a>
            <a href="javascript:void(0)"  @click="sortAli('ali')"  :class="{'cur':sortChecked == 'ali'}">阿狸</a>
            <a href="javascript:void(0)" @click="sortAli('black')"  :class="{'cur':sortChecked == 'black'}">罗小黑</a>
        </div>
        <div class="sortby-wrapper" >
          <span class="sortby">价格：</span>
          <a href="javascript:void(0)"  @click="priceSort('all')" :class="{'cur':priceChecked=='all'}">全部</a>
          <div class="pricefilter" v-for="(price,index) in priceFilter"  @click="priceChecked = index">
            <a href="javascript:void(0)"  @click="priceSort(index)" :class="{'cur':priceChecked == index}">{{price.startPrice}} - {{price.endPrice}}</a>
          </div>
        </div> 
        
      </div>       
    </div>
    <div class="container container-wrapper">
      <div class="goodslist-wrapper container">
        <div class="sort-by text-right cur-sort">
        <span class="cur-span">sort by:</span>
          <a href="javascript:void(0)"  class="cur-def">Default</a>
            <a href="javascript:void(0)"  @click="sortPrice" >Price<span class="icon-arrow-up2" v-show="pricesort"></span><span class="icon-arrow-down2" v-show="!pricesort"></span></a>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5" v-for="(item,index) in showList">
            <div class="goods" >
              <div class="pic">
                <a href="#"><img v-lazy="item.prodcutImg" alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">￥{{item.prodcutPrice}}</div>
                <div class="btn-area">
                <a href="javascript:;" class="btn btn-define" @click="add">加入购物车</a>
                </div>
              </div>          
            </div>
          </div>

        </div>
      </div>
    </div>  
  </div>
</template>

<script>
  import navbar from '../components/navbar'
  import axios from 'axios'
  export default {
    data() {
      return {
        goodsList:[],
        showList:[],
        priceList:[],
        priceFilter:[
          {
            startPrice:'0',
            endPrice:'100'
          },
          {
            startPrice:'100',
            endPrice:'500'
          },
          {
            startPrice:'500',
            endPrice:'1000'
          }
        ],
        priceChecked:'all',
        sortChecked:'all',
        shopnum:0,
        username:'',
        pwd:'',
        isLogin:false,
        pricesort:false
      }
    },
    components: {
      navbar
    },
    mounted: function() {
      this.getGoodsList();
    },
    methods: {
      getGoodsList() {
        axios.get("/goods").then((result)=> {
          var res = result.data;
          this.goodsList = res.result;
        });
        axios.get("/goods").then((result)=> {
          var res = result.data;
          this.priceList = res.result.sort(function(num1,num2) {
            return num1.prodcutPrice - num2.prodcutPrice;
        });
        });
        axios.get("/goods").then((result)=> {
          var res = result.data;
          this.showList = res.result;
        });
      },
      sortPrice() {
        if(!this.pricesort) {
          this.showList = this.showList.sort(function(num1,num2) {
            return num1.prodcutPrice - num2.prodcutPrice;
        });
        }else {
          this.showList = this.showList.sort(function(num1,num2) {
            return num2.prodcutPrice - num1.prodcutPrice;
        });
        }
        this.pricesort = !this.pricesort;
      },
      sortAli(sortname) {
        this.sortChecked = sortname;
        this.priceChecked = 'all';
        if(sortname === 'all') {
          this.showList = this.goodsList;
        }
         if(sortname === 'ali') {
          var list = [];
          for(var i=0;i<this.goodsList.length;i++) { 
            console.log(this.goodsList[i].prodcutTag)
            if(this.goodsList[i].prodcutTag === 'ali') {            
              list.push(this.goodsList[i]);
            }
          }
          this.showList = list;
        }
        if(sortname === 'black') {
          var list = [];
          for(var i=0;i<this.goodsList.length;i++) { 
            console.log(this.goodsList[i].prodcutTag)
            if(this.goodsList[i].prodcutTag === 'black') {            
              list.push(this.goodsList[i]);
            }
          }
          this.showList = list;
        }
      },
      priceSort(sortname) {
        this.priceChecked = sortname;
        this.sortChecked = 'all';
        if(sortname === 'all') {
          this.showList = this.goodsList;
        }else {
          var list = [];
          for(var i=0;i<this.goodsList.length;i++) { 
            if(this.goodsList[i].prodcutPrice<=parseInt(this.priceFilter[sortname].endPrice) && this.goodsList[i].prodcutPrice>=parseInt(this.priceFilter[sortname].startPrice)) {            
              list.push(this.goodsList[i]);
            }
          }
          this.showList = list;
        }
      },
      add() {
        if(this.username === '') {
          alert("请先登录！")
        }else {
          this.shopnum++;
        }      
      },
      loginCheck(username,pwd) {
          //console.log(username,pwd)
          if(username === "admin" && pwd === '123') {
            this.username = username;
            this.pwd  = pwd;
            this.isLogin = ! this.isLogin;
            alert("登陆成功！")
          }else {
            alert("登陆失败！")
          }
      },
      loginout() {
          this.username = '';
          this.pwd  = '';
          this.isLogin = ! this.isLogin;
          this.shopnum = 0;
      }
    } 
  }
</script>

<style scoped>
  #app {
     background-color: #f3f5f7;
  }
  .container-wrapper {
    margin-top: -8px;
  }
  .filter-nav {
    padding-top: 20px ;
    margin-top: -8px;
    margin-bottom: 20px;
    height:180px;
    background-color: #fff;
  }
  .filter-nav .sortby-wrapper{
    display: block;
    border-bottom: 1px solid #eee;
    line-height: 30px;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .filter-nav .sortby-wrapper .sortby {
    font-size: 16px;
    font-weight: 700;
    padding-right: 20px;
  }
  .filter-nav .sortby-wrapper a {
    padding-right: 20px;
    text-decoration: none;
  }
  .filter-nav .sortby-wrapper a:hover  {
    color:#ee7a23;
    font-size: 14px;
    font-weight: 700;
  }
  .cur {
    color:#ee7a23;
    font-size: 14px;
    font-weight: 700;
  }
  .cur-sort {
    margin-bottom:8px;
    font-size: 12px;
  }
  .cur-def {
    color:#ee7a23;
  }

  .goodslist-wrapper {
    padding-top: 20px;
  }

    .goodslist-wrapper .goods {
      float: left;
      margin-right: 20px;
      margin-bottom: 50px;
      display: inline-block;
      border:1.5px solid #ccc;
      width:250px;
      height: 360px;
      overflow: hidden;
    }
    .goodslist-wrapper .goods img {
        width:99.7%;
    }
    .goodslist-wrapper .goods .main .btn-define {
      margin: 5px 0;
      width:80%;
      border:1px solid #d1434a;
      color:#d1434a;
      font-size: 12px;
    }
    .goodslist-wrapper .goods .main .name {
    padding-top:5px;
    height:24px;
    margin-left: 10%;
    width:80%;
    text-align: left;
    font-family: moderat,sans-serif;
    font-weight: 700;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .goodslist-wrapper .goods .main .price {
    height:24px;
    padding-top:5px;
    margin-bottom: 5px;
    padding-left: 10%;
    margin-top: 4px;
    text-align: left;
    color:#d1434a;
    font-size: 14px; 

  }
  .goodslist-wrapper .goods:hover{
    border:2px solid #ee7a23;
  }
  
  
  /*@media only screen and (max-width: 768px) {
    .goodslist-wrapper .goods {
      width:100%;
      height:140px;
      border: 1px solid #ccc;
    }

    .goodslist-wrapper .goods .pic{
      display: inline-block;
      position: relative;
      height: 140px;
      line-height: 140px;
    }
    .goodslist-wrapper .goods img {
      width:25%;
      position: absolute;
      top:0;
      left:0;
      padding-top: 20px;
      padding-left: 10px;

    }
    .goodslist-wrapper .goods .main .btn-define {
      width:30%;
      margin-right: -60%;
      border:1px solid #d1434a;
      color:#d1434a;
      font-size: 10px;
    }
    .goodslist-wrapper .goods .main .name {
      margin-top: -32%;
      margin-left: 32%;
      width:60%;
      font-family: moderat,sans-serif;
      text-align: left;
      font-size: 10px;
      font-weight: 700;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .goodslist-wrapper .goods .main .price {
      padding-top:5px;
      margin-bottom: 5px;
      padding-left: 32%;
      margin-top: 4px;
      text-align: left;
      color:#d1434a;
      font-size: 10px; 

    }
  }*/
  

  
  .goodslist-wrapper .goods .pic {
    width: 100%;
  }
  
  .pricefilter {
    display: inline-block;
  }

</style>
