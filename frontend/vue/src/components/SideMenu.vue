<template>
  <div id="submenu">
    <div>
      <img ref="refLogo" v-bind:src='img_logo'>
    </div>
    <div class="menu">
      <ul ref="reful">
        <li>
          <a>&ndash; 치매백과사전</a>
        </li>
        <li>
          <a>&ndash; 치매자가진단</a>
        </li>
        <li>
          <a>&ndash; 오랄 필라테스</a>
        </li>
        <li>
          <a>&ndash; 치매 예방 게임</a>
          <ul>
            <li>
              <a>&rsaquo; 파타카라 운동</a>
            </li>
            <li>
              <a>&rsaquo; 같은 그림 찾기</a>
            </li>
          </ul>
        </li>
        <li>
          <a>&ndash; 내 정보</a>
        </li>
      </ul>
    </div>
    <div ref="refcreater" class="creater">
      <p>만든사람들</p>
      <p>강준희 곽승민 김세훈</p>
      <p>송지연 장유정 허승연</p>
    </div>
    <div ref="refUserInfo" id="user_info">
      <div>
        <a v-bind:href="link_login">로그인</a>
        <a v-bind:href="link_sign">회원가입</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'submenu',
  data () {
    return {
      img_logo: require('../assets/teeth_logo.png'),
      link_login: 'http://localhost:8080/login',
      link_sign: 'http://localhost:8080/sign'
    }
  },
  created () {
    const imgLogWidth = this.$refs.refLogo.width
    const imgLogHeight = this.$refs.refLogo.height

    const ulObject = this.$refs.reful
    const createrObject = this.$refs.refcreater
    const userinfoObject = this.$refs.refUserInfo

    ulObject.style.width = (imgLogWidth - 60) + 'px'
    ulObject.style.marginTop = imgLogHeight + 'px'
    createrObject.style.width = (imgLogWidth - imgLogWidth / 5) + 'px'
    createrObject.style.marginLeft = (imgLogWidth / 5) / 2 + 'px'
    userinfoObject.style.height = imgLogHeight + 'px'
  },
  mounted () {
    const imgLogWidth = this.$refs.refLogo.width
    const imgLogHeight = this.$refs.refLogo.height

    const ulObject = this.$refs.reful
    const createrObject = this.$refs.refcreater
    const userinfoObject = this.$refs.refUserInfo

    ulObject.style.width = (imgLogWidth - 60) + 'px'
    ulObject.style.marginTop = imgLogHeight + 'px'
    createrObject.style.width = (imgLogWidth - imgLogWidth / 5) + 'px'
    createrObject.style.marginLeft = (imgLogWidth / 5) / 2 + 'px'
    userinfoObject.style.height = imgLogHeight + 'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width: fit-content;
    height: fit-content;
    float: left;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
}

.menu{
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: fit-content;
  height: 100%;
}

ul{
  list-style: none;
  text-align: left;
  color: #000000;
  padding: 50px 29px 30px 30px;
  border-right: #C4DEFF solid 1px;
  height: 100%;
}

ul li{
  line-height: 200%;
  font-size: 14px;
}
ul li:hover{
  color: #4374D9;
}

ul li ul{
  padding: 0;
  border: none;
  margin-left: 25px;
}

.creater{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: fit-content;
  height: fit-content;
  padding: 30px 0;
  border: 1px dashed #C4DEFF;
  margin-bottom: 20px;
}
.creater p{
  margin: 0;
  line-height: 200%;
  font-size: 12px;
}

#user_info{
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  margin-right: 3%;
}
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
