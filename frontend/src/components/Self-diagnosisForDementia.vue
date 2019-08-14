<!-- 치매 자가진단 컴포넌트 -->
<template>
    <div>
        <router-view>
        </router-view>
        <div class="content">
            <h2 class="title">치매 자가진단</h2>
            <div class="titleArea" ref="firstScreen">
                <p>※ 스스로 진단하는지, 보호자가 대신 진단하는지를 선택해주세요.</p>
                <div class="optionArea">
                    <label class="radio">
                        <input name="option" type="radio" v-on:click="onClickOption"> 스스로 검사
                    </label>
                    <label class="radio">
                        <input name="option" type="radio" v-on:click="onClickOption"> 보호자 검사
                    </label>
                </div>
                <div class="infoArea">
                    <p>이 진단은 본인의 치매의 단계를 확인하기 위함이고 단계별 상태는 문제없음, 경도의 치매, 알츠하이머 치매 총 세단계로 진단됩니다.<br>
                    또한 본 진단은 간이진단이므로 환자의 임상적 상태에 따라 검사를 하는 방식이기 때문에 검사의 시기, 검사당시 환자의 상태에 따라 점수는 달라질 수 있습니다.<br>정확한 진단을 위해서는 병원에 내원하셔서 정밀한 검사를 받는 것이 좋습니다.</p>
                </div>
                <div class="startBtnArea">
                    <button id="startBtn" ref="startBtn" v-on:click="onClickStartBtn" disabled>진단 시작하기</button>
                </div>
            </div>
            <div class="contentArea" ref="secondScreen">
                <p>1. 건망증이 있습니까?
                    <label class="radio">
                        <input name="q1" v-model="ans1" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q1" v-model="ans1" type="radio" value="No">아니오
                    </label>
                </p>
                <p>2. 건망증이 있다면 몇 년 전보다 더 악화되었습니까?
                    <label class="radio">
                        <input name="q2" v-model="ans2" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q2" v-model="ans2" type="radio" value="No">아니오
                    </label>
                </p>
                <p>3. 약속을 잘 잊어버립니까?
                    <label class="radio">
                        <input name="q3" v-model="ans3" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q3" v-model="ans3" type="radio" value="No">아니오
                    </label>
                </p>
                <p>4. 물건을 엉뚱한 곳에 놓는 일이 한 달에 한 번 이상 있습니까?
                    <label class="radio">
                        <input name="q4" v-model="ans4" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q4" v-model="ans4" type="radio" value="No">아니오
                    </label>
                </p>
                <p>5. 그 물건을 찾지 못할 때 다른 사람이 감추었거나 훔쳤다고 의심하는 경우가 있습니까?
                    <label class="radio">
                        <input name="q5" v-model="ans5" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q5" v-model="ans5" type="radio" value="No">아니오
                    </label>
                </p>
                <p>6. 낯선 장소에서 방향감각을 잃습니까?
                    <label class="radio">
                        <input name="q6" v-model="ans6" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q6" v-model="ans6" type="radio" value="No">아니오
                    </label>
                </p>
                <p>7. 집에 있지 않거나 여행을 갔을 때 당황합니까?
                    <label class="radio">
                        <input name="q7" v-model="ans7" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q7" v-model="ans7" type="radio" value="No">아니오
                    </label>
                </p>
                <p>8. 잔돈을 계산하거나 팁을 줄 때 등 돈을 제대로 지불하지 못하는 경우가 있습니까?
                    <label class="radio">
                        <input name="q8" v-model="ans8" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q8" v-model="ans8" type="radio" value="No">아니오
                    </label>
                </p>
                <p>9. 약을 먹어야 할 때를 기억 못하거나 약을 먹었는지 아닌지를 모를 때가 있습니까?
                    <label class="radio">
                        <input name="q9" v-model="ans9" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q9" v-model="ans9" type="radio" value="No">아니오
                    </label>
                </p>
                <p>10. 운전을 잘 못하거나 옆에서 보기에 운전이 걱정스러운 경우가 있습니까?
                    <label class="radio">
                        <input name="q10" v-model="ans10" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q10" v-model="ans10" type="radio" value="No">아니오
                    </label>
                </p>
                <p>11. 스토브, 전화기, 리모컨, 전자레인지 같은 가정용품 사용에 문제가 있습니까?
                    <label class="radio">
                        <input name="q11" v-model="ans11" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q11" v-model="ans11" type="radio" value="No">아니오
                    </label>
                </p>
                <p>12. 집에서 수리해야 할 곳을 제대로 수리 못하거나 집안일을 제대로 하지 못하는 경우가 있습니까?
                    <label class="radio">
                        <input name="q12" v-model="ans12" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q12" v-model="ans12" type="radio" value="No">아니오
                    </label>
                </p>
                <p>13. 골프, 댄싱, 운동, 수예 같은 취미활동을 줄이거나 그만두었습니까?
                    <label class="radio">
                        <input name="q13" v-model="ans13" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q13" v-model="ans13" type="radio" value="No">아니오
                    </label>
                </p>
                <p>14. 방향감각이 저하되고 있습니까?
                    <label class="radio">
                        <input name="q14" v-model="ans14" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q14" v-model="ans14" type="radio" value="No">아니오
                    </label>
                </p>
                <p>15. 이름 말고 다른 단어를 잘 기억해내지 못합니까?
                    <label class="radio">
                        <input name="q15" v-model="ans15" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q15" v-model="ans15" type="radio" value="No">아니오
                    </label>
                </p>
                <p>16. 하루에 했던 이야기나 질문을 여러 번 반복합니까?
                    <label class="radio">
                        <input name="q16" v-model="ans16" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q16" v-model="ans16" type="radio" value="No">아니오
                    </label>
                </p>
                <p>17. 요일, 날짜, 월, 연도, 때를 자주 잊거나 날짜를 하루 한번이상 확인하는 경우가 있습니까?
                    <label class="radio">
                        <input name="q17" v-model="ans17" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q17" v-model="ans17" type="radio" value="No">아니오
                    </label>
                </p>
                <p>18. 청구서를 지불하거나 돈을 결제할 때 잘 못하는 경우가 있습니까?
                    <label class="radio">
                        <input name="q18" v-model="ans18" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q18" v-model="ans18" type="radio" value="No">아니오
                    </label>
                </p>
                <p>19. 살고 있는 동네처럼 낯익은 환경에서 길을 잃은 적이 있습니까?
                    <label class="radio">
                        <input name="q19" v-model="ans19" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q19" v-model="ans19" type="radio" value="No">아니오
                    </label>
                </p>
                <p>20. 가족이나 친구의 이름을 혼동하는 경우가 있습니까?
                    <label class="radio">
                        <input name="q20" v-model="ans20" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q20" v-model="ans20" type="radio" value="No">아니오
                    </label>
                </p>
                <p>21. 낯익은 사람을 잘 알아보지 못합니까?
                    <label class="radio">
                        <input name="q21" v-model="ans21" type="radio" value="Yes">예
                    </label>
                    <label class="radio">
                        <input name="q21" v-model="ans21" type="radio" value="No">아니오
                    </label>
                </p>
                <br>
                <input type="button" v-on:click="onClickSubmitBtn" value="결과 제출하기">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      option: '',
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
      ans5: '',
      ans6: '',
      ans7: '',
      ans8: '',
      ans9: '',
      ans10: '',
      ans11: '',
      ans12: '',
      ans13: '',
      ans14: '',
      ans15: '',
      ans16: '',
      ans17: '',
      ans18: '',
      ans19: '',
      ans20: '',
      ans21: ''
    }
  },
  methods: {
    onClickStartBtn: function () {
      const firstScreen = this.$refs.firstScreen
      const secondScreen = this.$refs.secondScreen

      firstScreen.style.display = 'none'
      secondScreen.style.display = 'block'
    },
    onClickOption: function () {
      this.$refs.startBtn.disabled = false
    },
    onClickSubmitBtn: function () {
      // 모든 문항 선택 했는지 확인하고 제출하게씀니까 물어보고 제출되도록-
      alert('제출하시게쓴니까?ㅎㅁㅎ')
    }
  }
}
</script>

<style scoped>
    router-view {
        width: fit-content;
        height: fit-content;
    }
    .content{
        display: inline-block;
        margin-top: 5px;
    }
    .optionArea{
        margin-bottom: 20px;
    }
    .infoArea{
        border: solid 1px;
        margin-bottom: 30px;
        padding: 5px;
    }
    .contentArea{
        border: solid 1px;
        padding-top: 15px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
        display: none;
        text-align: left;
    }
    .startBtn{
        float: center;
    }
    .title{
        text-align: left;
    }
</style>
