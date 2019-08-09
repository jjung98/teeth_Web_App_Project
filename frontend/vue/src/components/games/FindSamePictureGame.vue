
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

<script>
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
