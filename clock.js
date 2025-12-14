const clock=document.getElementById('clock')

setInterval(function(){
  let date = new Date();
  clock.innerHTML=(date.toLocaleTimeString());

},1000)//1000milisecond=1second
//ever second it will run