<template>
  <div class="home">
    <h1>앗 여기는!!!</h1>
    <h1>아직 개발중...ㅎ</h1>
    <button id="return" v-on:click="btn_return">홈으로 돌아가기</button>
  </div>
</template>
<script>
export default {
  name: 'home',
  // 메소드는 methods 객체 안에 정의
  methods: {
    btn_return: function (event) {
      this.$router.push('/main')
    }
  }
}
</script>
<style scoped>
  .home{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    font-size: 100%;
  }

  #return{
    margin-top: 10%;
    padding: 15px 25px;
    background-color: #4374D9;
    border: none;
    color: #FFFF;
  }
  #return:hover{
    color: #000000;
  }
</style>
