<template>
    <div class="signUp">
        <div class="logo">
            <a v-bind:href="link_main">
                <img ref="refLogo" v-bind:src='img_logo'>
            </a>
        </div>
        <div class="signUpBox">
            <p>간편하게 회원가입하세요!</p>
            <div class="info_input_box">
                <div id='idRow'>
                    <input type="text" id="idBox" placeholder="아이디">
                    <input type="button" id="checkIdBtn" value="중복확인" v-on:click="onClickButton()">
                    <p id='idLabel'>{{isPossible}}</p>
                </div>
            </div>
            <div class="info_input_box">
                <div class='inputBox' id="info_box">
                    <input type="password" id="passwordBox" placeholder="비밀번호">
                </div>
                <div>
                    <input type="text" id="nameBox" placeholder="이름">
                </div>
                <div>
                    <input type="text" id="telBox" placeholder="전화번호">
                </div>
            </div>
            <div>
                <button id='signUpBtn'>회원가입</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      img_logo: require('../assets/teeth_logo.png'),
      link_main: 'http://localhost:8080/main',
      result: 'OK', // 여기는 데이터베이스에서 이미 있는 아이디값인지 비교해서 OK/NO값 넣기!
      isPossible: ''
    }
  },
  methods: {
    onClickButton () {
      console.log(this)
      if (this.result === 'OK') {
        document.getElementById('idLabel').style.color = '#0000ff'
        this.isPossible = '사용가능한 아이디입니다.'
      } else if (this.result === 'NO') {
        document.getElementById('idLabel').style.color = '#ff0000'
        this.isPossible = '이미 사용중인 아이디입니다.'
      } else {
        this.isPossible = ''
      }
    }
  }
}
</script>

<style scoped>
    .signUp logo, div img{
        width: 260px;
        height: 90px;
        margin: 15px;
        margin-top: 60px;
    }

    .signUpBox{
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: fit-content;
        height: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2%;
        font-family: Noto Sans DemiLight, AppleSDGothicNeo-Regular, Malgun Gothic, 맑은 고딕, dotum, 돋움, sans-serif;
    }
    .signUpBox p{
        font-size: 28px;
        font-weight: 400;
        text-align: left;
        margin-bottom: 20px;
        margin-left: 50px;
    }
    .info_input_box{
        width: fit-content;
        height: fit-content;
    }
    #idBox{
        border: solid 1px #C4DEFF;
        margin: 5px;
    }
    .signUpBox input[type=text], .signUpBox input[type=password]{
        padding: 15px;
        width: 300px;
        height: 20px;
        font-size: 13px;
        font-weight: 400;
        border: none;
    }
    #info_box div{
        float: left;
    }
    #passwordBox, #nameBox, #telBox{
        border: solid 1px #C4DEFF;
        margin: 5px;
        width: 380px;
    }
    #checkIdBtn{
        width: 70px;
        height: 40px;
    }
    #idLabel{
        font-size: 15px;
        color: blue;
        margin: 5px;
        margin-left: 20px;
        margin-bottom: 10px;
    }
    #signUpBtn{
        width: 100px;
        height: 45px;
        margin-top: 20px;
    }
</style>
