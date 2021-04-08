<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">SingUp</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0;
  background: #fafafa;
}
body,h1,h2,p,a,input{
  color: #555;
  font-family: Consolas, Arial;
  text-decoration: none;
}
ul{
  margin: 0;
  padding: 0;
}
header{
  width: 100%;
  padding: 20px;
  text-align: right;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}
header a{
  margin-left: 10px;
  border-bottom: 2px solid black;
  padding: 4px;
  cursor: pointer;
}
header a:hover{
  background: gray;
  color: white;
}
</style>
