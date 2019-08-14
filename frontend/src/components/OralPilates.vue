<!-- 오랄 필라테스 컴포넌트 -->
<template>
    <div>
        <router-view>
        </router-view>
        <div class="content">
            <h2 class="title">오랄 필라테스</h2>
            <div class="infoArea">
                <h3>※ 오랄필라테스란?</h3>
                <p> 필라테스는 생리학 요가로 근육발달이 촉진되는 운동법입니다.
                   오랄필라테스는 입술의 힘과 볼의 탄력을 바로 잡아주어 구강주위근육이 발달하고, 줄어드는 타액의 분비를 촉진하여 균형 잡힌 구강을 갖도록 하는 구강운동법입니다.
                   오랄필라테스를 따라하며 뇌가 활성화 되고 이에 따라 뇌건강의 균형을 잡아 치매예방에 큰 도움을 줄 수 있습니다.</p>
            </div>
            <div class="contentArea">
                <div class="pila1" style="margin-bottom: 50px;">
                    <span style="margin-right: 20px;">1. 저작근 강화 운동</span>
                    <input type="button" ref="viewBtn1" v-on:click="onClickViewBtn(1)" value="영상 보기">
                    <p>노인의 경우 몸 전체적으로 근육이 줄어들면서 혀, 저작근, 인두근육에서도 근육량이 감소하고 기능이 저하돼 결국 음식물을 삼키고 넘기는 것까지 약화될 수 있습니다.
                    근감소증을 예방하기 위해선 적절한 근육운동이 필요합니다. 저작근육의 강화를 위해서 이 영상이 도움이 될 것입니다.</p>
                    <div ref="pilatesVideo1" style="display: none;">
                        <video style="border: solid 1px; padding: 5px;" width="300" height="200" controls autoplay></video>
                    </div>
                </div>
                <div class="pila2" style="margin-bottom: 50px;">
                    <span style="margin-right: 20px;">2. 혀 체조</span>
                    <input type="button" ref="viewBtn2" v-on:click="onClickViewBtn(2)" value="영상 보기">
                    <p>노인의 경우 타액의 분비가 줄어드는 구강건조증이 쉽게 발현하게 됩니다. 혀체조는 혀를 움직임으로써 침샘이 자극되고 침의 분비가 촉진되게 하는 운동입니다.
                    그에 따라 저작작용이나 발음을 원활히 하는 윤활유작용, 타액에 들어있는 소화효소에 의한 소화작용 또한 개선됩니다.</p>
                    <div ref="pilatesVideo2" style="display: none;">
                        <video width="300" height="200" controls autoplay></video>
                    </div>
                </div>
                <div class="pila3" style="margin-bottom: 50px;">
                    <a style="margin-right: 20px;">3. 구외 마사지</a>
                    <input type="button" ref="viewBtn3" v-on:click="onClickViewBtn(3)" value="영상 보기">
                    <p>타액분비기능을 증진시키는 구외 마사지를 통해 침과 혈액의 순환에 도움을 줍니다.
                    이 마사지는 기능이 저하 되었던 침샘을 자극 해주는 효과가 있어 구강건조증을 예방하는데 도움을 줍니다.</p>
                    <div ref="pilatesVideo3" style="display: none;">
                        <video width="300" height="200" controls autoplay></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
  methods: {
    onClickViewBtn: function (num) {
      const pilatesVideo1 = this.$refs.pilatesVideo1
      const pilatesVideo2 = this.$refs.pilatesVideo2
      const pilatesVideo3 = this.$refs.pilatesVideo3

      const viewBtn1 = this.$refs.viewBtn1
      const viewBtn2 = this.$refs.viewBtn2
      const viewBtn3 = this.$refs.viewBtn3

      if (num === 1) {
        if (pilatesVideo1.style.display === 'none') {
          pilatesVideo1.style.display = 'block'
          viewBtn1.value = '닫기'
        } else {
          pilatesVideo1.style.display = 'none'
          viewBtn1.value = '영상 보기'
        }
      } else if (num === 2) {
        if (pilatesVideo2.style.display === 'none') {
          pilatesVideo2.style.display = 'block'
          viewBtn2.value = '닫기'
        } else {
          pilatesVideo2.style.display = 'none'
          viewBtn2.value = '영상 보기'
        }
      } else if (num === 3) {
        if (pilatesVideo3.style.display === 'none') {
          pilatesVideo3.style.display = 'block'
          viewBtn3.value = '닫기'
        } else {
          pilatesVideo3.style.display = 'none'
          viewBtn3.value = '영상 보기'
        }
      } else {}
    }
  }
}
</script>

<style>
    router-view {
        width: fit-content;
        height: fit-content;
    }
    .content{
        display: inline-block;
        margin-left: 10%;
        margin-right: 10%;
    }
    .title{
        text-align: left;
        margin-bottom: 40px;
        margin-top: 30px;
    }
    .infoArea{
        border: solid 2px rgb(216, 216, 216);
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 15px;
        width: 90%;
        text-align: left;
    }
    .contentArea{
        margin-top: 30px;
        float: left;
        font-size: 17px;
        text-align: left;
        margin-right: 5%;
    }
</style>
