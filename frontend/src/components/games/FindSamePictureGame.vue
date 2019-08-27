
<template>
<div>
    <router-view>
    </router-view>
    <div>
        <table>
            <tr>
                <td><img v-bind:src="img_bull"></td>
                <td><img v-bind:src="img_chick"></td>
                <td><img v-bind:src="img_crab"></td>
                <td><img v-bind:src="img_fox"></td>
            </tr>
            <tr>
                <td><img v-bind:src="img_hedgehog"></td>
                <td><img v-bind:src="img_hippopotamus"></td>
                <td><img v-bind:src="img_koala"></td>
                <td><img v-bind:src="img_lemur"></td>
            </tr>
            <tr>
                <td><img v-bind:src="img_pig"></td>
                <td><img v-bind:src="img_tiger"></td>
                <td><img v-bind:src="img_whale"></td>
                <td><img v-bind:src="img_zebra"></td>
            </tr>
        </table>
    </div>
</div>
</template>
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script>
// 게임 상태
var gameState = ''

// 열린카드 src
var openCardId1 = ''
var openCardId2 = ''

// 난수 생성 함수
function generateRandom (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min
        return ranNum
}

var cards   // 카드 목록
var score = 0   // 점수
var openedCtn = 0    // 맞춘 카드 갯수

// 카드 배치
function setTable() {
    cards = [
        require('../../assets/find_same_picture/bull.png'), require('../../assets/find_same_picture/bull.png'),
        require('../../assets/find_same_picture/chick.png'), require('../../assets/find_same_picture/chick.png'),
        require('../../assets/find_same_picture/crab.png'), require('../../assets/find_same_picture/crab.png'),
        require('../../assets/find_same_picture/fox.png'), require('../../assets/find_same_picture/fox.png'),
        require('../../assets/find_same_picture/hedgehog.png'), require('../../assets/find_same_picture/hedgehog.png'),
        require('../../assets/find_same_picture/hippopotamus.png'), require('../../assets/find_same_picture/hippopotamus.png'),
        require('../../assets/find_same_picture/koala.png'), require('../../assets/find_same_picture/koala.png'),
        require('../../assets/find_same_picture/lemur.png'), require('../../assets/find_same_picture/lemur.png')
    ]
    var cardTableCode = '<tr>'
    for(var i=0; i<16; i++){
        if(i>0 && (i%4 == 0)){
            cardTableCode += '</tr><tr>'
        }
        var idx = generateRandom(0, 15-i)
        var img = cards.splice(idx,1)

        cardTableCode += '<td id="card' + i + '" style="border:solid #9DCEFF; width: 110px; height: 110px;"><img src="'+img+'" style="width: 100px;"><span>?</span></td>'
    }
    cardTableCode += '</tr>'
    $('#cardTable').html(cardTableCode)
}

//카드전체 가리기
function hiddenCards(){
    $('#cardTable td img').hide()
    $('#cardTable td span').show()
}

// 게임 시작
function startGame() {
    var sec = 5

    $('#info').hide()   // 안내 문구 가리기
    scoreInit()    // 점수 초기화
    setTable()  //카드 배치
    $('#cardTable td span').hide()

    // 카운트 다운
    function setText(){
        $('#countDown').text(--sec)
    }
    // 카운트 다운
    var intervalID = setInterval(setText, 1000)
    setTimeout(function(){
        clearInterval(intervalID)
        $('#countDown').text('start')
        hiddenCards()
        gameState = ''
    }, 5000)
}

// 카드 선택시
$(document).on('click','#cardTable td' ,function(){
    if(gameState != '') return // 게임 카운트 다운시 누를경우 return
    if(openCardId2 != '') return   //2개 열려있는데 누른경우 return
    if($(this).hasClass('opened'))  return //열려있는 카드를 또 누른경우 return
    $(this).addClass('opened')  //열려있다는것을 구분하기 위한 class추가
    if(openCardId1 == ''){
        $(this).find('img').show()
        $(this).find('span').hide()
        openCardId1 = this.id
    }else {
        if(openCardId1 == openCardId2)  return // 같은 카드 누른경우 return

        $(this).find('img').show()
        $(this).find('span').hide()

        var openCardSrc1 = $('#'+openCardId1).find('img').attr('src')
        var openCardSrc2 = $(this).find('img').attr('src')
        openCardId2 = this.id

        if(openCardSrc1 == openCardSrc2) {  //일치
            openCardId1 = ''
            openCardId2 = ''
            scorePlus()
            if(++openedCtn == 8){
                alert('성공!! \n'+score+'점 입니다!')
            }
        }else { //불일치
            setTimeout(back, 1000)
            scoreMinus()
        }
    }
})

// 두개의 카드 다시 뒤집기
function back() {
    $('#'+openCardId1).find('img').hide()
    $('#'+openCardId1).find('span').show()
    $('#'+openCardId2).find('img').hide()
    $('#'+openCardId2).find('span').show()
    $('#'+openCardId1).removeClass('opened')
    $('#'+openCardId2).removeClass('opened')
    openCardId1 = ''
    openCardId2 = ''
}

// 점수 초기화
function scoreInit(){
    score = 0
    openedCtn = 0
    $('#score').text(score)
}

// 점수 증가
function scorePlus(){
    score += 10
    $('#score').text(score)
}

// 점수 감소
function scoreMinus(){
    score -= 5
    $('#score').text(score)
}

export default {
  data () {
    return {
      img_bull: require('../../assets/find_same_picture/bull.png'),
      img_chick: require('../../assets/find_same_picture/chick.png'),
      img_crab: require('../../assets/find_same_picture/crab.png'),
      img_fox: require('../../assets/find_same_picture/fox.png'),
      img_hedgehog: require('../../assets/find_same_picture/hedgehog.png'),
      img_hippopotamus: require('../../assets/find_same_picture/hippopotamus.png'),
      img_koala: require('../../assets/find_same_picture/koala.png'),
      img_lemur: require('../../assets/find_same_picture/lemur.png'),
      img_pig: require('../../assets/find_same_picture/pig.png'),
      img_tiger: require('../../assets/find_same_picture/tiger.png'),
      img_whale: require('../../assets/find_same_picture/whale.png'),
      img_zebra: require('../../assets/find_same_picture/zebra.png')
    }
  }
}
</script>
<style scoped>
img{
    width: 100px;
}
</style>
