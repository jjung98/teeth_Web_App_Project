<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <center>
      <h1 id="title">{{title}}</h1>
      <div class="icon" style="float: right; width: fit-content">
       <p>Login</p>
       <p>Sign</p>
      </div>
    </center>
    <router-view class="view-one" name="a"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: '치매예방 구강재활'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#title {
    font-weight: bold;
    font-size: 30px;
    width: fit-content;
    display: inline-block;
}

.icon p{
  text-align: right;
  width: fit-content;
  display: inline-block;
  font-weight: bold;
}
</style>
