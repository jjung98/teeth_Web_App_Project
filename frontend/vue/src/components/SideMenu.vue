<!-- 여기는 서브메뉴를 만들어 놓은 컴포넌트야! -->
<template>
  <div>
    <div>
      <div style="float: left;">
        <img ref="refLogo" v-bind:src='img_logo'>
        <div style="display: inline-block;">
          <ul class="menu">
            <li>
              <a v-bind:href="link_dire">치매백과사전</a>
            </li>
            <li>
              <a v-bind:href="link_test">치매자가진단</a>
            </li>
            <li>
              <a v-bind:href="link_filla">오랄 필라테스</a>
            </li>
            <li>
              <a>치매 예방 게임</a>
            </li>
          </ul>
          <ul class="submenu"  ref="refsumenu">
            <li>
              <a>같은 그림찾기</a>
            </li>
            <li>
              <a>파타카라 운동</a>
            </li>
          </ul>
        </div>
      </div>
      <router-view ref="refUserInfo" id="user_info">
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'submenu',
  data () {
    return {
      img_logo: require('../assets/teeth_logo.png'),
      link_dire: 'http://localhost:8080/dire',
      link_test: 'http://localhost:8080/test',
      link_filla: 'http://localhost:8080/filla',
      link_game: 'http://localhost:8080/game'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div img{
  width: fit-content;
  height: fit-content;
}

.menu{
  display: inline-block;
  list-style: none;
  text-align: left;
  color: #000000;
  padding: 0px 30px 13px 90px;
  height: 100%;
  font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,Malgun Gothic,맑은 고딕,dotum,돋움,sans-serif;
}

ul li{
  float: left;
  line-height: 200%;
  font-size: 14px;
}
ul li a{
    padding: 0 7px 0 17px;
    color: #6798FD;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
}
ul li a:hover{
  color: #000000;
  text-decoration: underline;
}

ul li ul{
  padding: 0;
  border: none;
  margin-left: 25px;
}

.submenu{
    display: block;
    margin-left: 0;
    padding-left: 40px;
    list-style: none;
}

#user_info{
  margin-right: 3%;
  float: right;
  margin-top: 5%;
}
</style>
