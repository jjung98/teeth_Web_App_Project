<template>
    <div class="login">
        <div class="loginbox">
            <p>지금 바로 로그인 하세요.</p>
            <div class="login_input_box">
                <div class="inp_text">
                    <input type="text" id="loginId" name="loginId" placeholder="ID">
                </div>
                <div>
                    <input type="text" id="loginPw" name="loginPw" placeholder="Password">
                </div>
           </div>
            <div class="inp_button">
                <input type="button" id="login_btn" name="login_btn" value="로그인">
            </div>
            <div class="login_func">
                <div class="auto_login_div">
                    <input type="checkbox" id="auto_login" name="auto_login">
                    <span>로그인 상태 유지 </span>
                </div>
                <div class="search_login">
                    <a v-bind:href="link_search_id">아이디 찾기</a>
                    <span>/</span>
                    <a v-bind:href="link_search_pw">비밀번호찾기</a>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {
      link_search_id: 'http://localhost:8080/search_id',
      link_search_pw: 'http://localhost:8080/search_pw'
    }
  }
}
</script>
<style scoped>
    .loginbox{
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: fit-content;
        height: fit-content;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        margin-top: 8%;
        font-family: Noto Sans DemiLight,AppleSDGothicNeo-Regular,Malgun Gothic,맑은 고딕,dotum,돋움,sans-serif;
    }
    .loginbox p{
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
    }
    .login_input_box{
        border: solid 1px #C4DEFF;
    }
    .loginbox input[type=text]{
        padding: 15px;
        width: 300px;
        height: 35px;
        font-size: 13px;
        font-weight: 400;
        border: none;
    }

    .inp_text{
        border-bottom: solid 1px #C4DEFF;
    }

    .inp_button{
        margin-top: 20px;
        width: fit-content;
    }
    .inp_button input{
        width: 335px;
        padding: 15px;
        font-size: 16px;
        border: none;
        background-color: #4374D9;
        font-weight: 400;
        color: #FFFFFF;
    }
    .inp_button input:hover{
        background-color: #6798FD;
        color: #000000;
    }

    .login_func{
        width: 100%;
        height: fit-content;
        margin-top: 20px;
    }
    .login_func .auto_login_div{
        display: inline-block;
        left: 0px;
        position: absolute;
    }
    .login_func span, a{
        font-size: 13px;
    }
    .login_func .search_login{
        width: fit-content;
        height: fit-content;
        right: 0px;
        position: absolute;
    }
    .search_login a{
        color: black;
        text-decoration: none;
    }
</style>
