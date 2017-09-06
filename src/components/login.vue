<template>
  <div>
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

</style>
