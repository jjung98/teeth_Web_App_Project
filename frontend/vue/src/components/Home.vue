<template>
  <div class="home">
    <h1>당신의 뇌,</h1>
    <h1>지금 바로 확인하세요!</h1>
    <button id="confirm" v-on:click="btn_confirm">확인하기</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  // 메소드는 methods 객체 안에 정의
  methods: {
    btn_confirm: function (event) {
      alert('Hello ' + this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  #confirm{
    margin-top: 10%;
    padding: 15px 25px;
    background-color: #4374D9;
    border: none;
    color: #FFFF;
  }
  #confirm:hover{
    color: #000000;
  }
</style>
