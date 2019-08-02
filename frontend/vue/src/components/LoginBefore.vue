<!-- 여기는 로그인이 되지않을때 로그인과 회원가입 버튼(?)을 출력해주는 컴포넌트야! -->
<template>
    <div ref="refUserInfo" id="user_info">
        <a v-bind:href="link_login">로그인</a>
        <a v-bind:href="link_sign">회원가입</a>
    </div>
</template>
<script>
export default {
  data () {
    return {
      img_logo: require('../assets/teeth_logo.png'),
      link_login: 'http://localhost:8080/login',
      link_sign: 'http://localhost:8080/sign'
    }
  }
}
</script>
<style scoped>
#user_info div{
  margin-top: 50%;
}
#user_info a{
  color: black;
  text-decoration: none;
  font-size: 13px;
  padding-right: 5px;
  padding-left: 5px;
}
</style>
