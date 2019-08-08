<!-- 여기는 서브메뉴를 만들어 놓은 컴포넌트야! -->
<template>
  <div>
    <div>
      <div style="width: 100%; margin-top: 15px;">
        <img ref="refLogo" v-bind:src='img_logo'>
        <div style="display: inline-block; float: left;">
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
              <div class='gameMenu' @mouseover="viewsubmenu" @mouseleave="nonviewsubmenu">
                <a >치매 예방 게임</a>
              <ul class="submenu" ref="refsumenu">
                <li>
                  <a>같은 그림찾기</a>
                </li>
                <li>
                  <a>파타카라 운동</a>
                </li>
              </ul>
              </div>
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
      link_dire: 'http://localhost:8080/dementia',
      link_test: 'http://localhost:8080/selfDiagnosis',
      link_filla: 'http://localhost:8080/filla',
      link_game: 'http://localhost:8080/game'
    }
  },
  methods: {
    viewsubmenu: function () {
      const submenuObject = this.$refs.refsumenu
      submenuObject.style.display = 'block'
    },
    nonviewsubmenu: function () {
      const submenuObject = this.$refs.refsumenu
      submenuObject.style.display = 'none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div img{
  width: 330px;
  height: 120px;
  float: left;
}

.menu{
  display: inline-block;
  list-style: none;
  text-align: left;
  color: #000000;
  padding: 40px 30px 13px 10px;
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

.submenu{
    display: none;
    margin-right: 0;
    padding-left: 40px;
    list-style: none;
    margin-top: 10px;
}

#user_info{
  margin-right: 3%;
  float: right;
  margin-top: 3%;
}

.gameMenu{
  width: fit-content;
  height: fit-content;
}
</style>
