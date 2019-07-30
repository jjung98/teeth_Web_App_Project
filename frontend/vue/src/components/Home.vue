<template>
  <div class="home">
    <div>
      <img :src = "Dementia_diagnostic_test_img">
      <p>치매 진단 테스트</p>
    </div>
    <div>
      <img :src = "Dementia_Prevention_Game_img">
      <p>치매 예방 게임</p>
    </div>
    <div>
      <img :src = "Oral_Pilates_Video_img">
      <p>오랄 필라테스 영상</p>
    </div>
    <div>
      <img :src = "My_info_img">
      <p>내정보</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      Dementia_diagnostic_test_img: require('../assets/test.jpg'),
      Dementia_Prevention_Game_img: require('../assets/game.jpg'),
      Oral_Pilates_Video_img: require('../assets/video.jpg'),
      My_info_img: require('../assets/my_info.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    margin-top: 10%;
  }

  .home div{
    width: fit-content;
    display: inline-block;
    margin-right: 1%;
    margin-left: 1%;
  }
</style>
