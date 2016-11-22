
function start(){
  document.getElementById("game").style.visibility = "visible";
  document.getElementById("hideGame").style.visibility="hidden";
}


var ia = Math.floor(Math.random()*100);
console.log(ia);

var ans = document.getElementById("answer");
var ansWin = document.getElementById("pWin");
// ansWin.style.marginLeft="35%";
// ansWin.style.marginTop="10%";
/* choix joueur*/


function gamer(){
  var x = document.getElementById("push");
  var y = Math.abs(ia-x.value);
  console.log(x.value);

  if (x.value == ia){
    document.getElementById("wiin").style.visibility = "visible";
    ansWin.innerHTML="<span class='beyond'>Vous avez gagne !!!</span></br>";

  }
  else if(y<10) {
    ans.innerHTML="<span class='beyond'>Ch<span id='a'>a</span>ud !</span></br>";

  }
  else {
    ans.innerHTML="<span class='beyond'>Fr<span id='o'>o</span>id !</span></br>";

  }
    x.value=" ";
}
function restart (){
  window.location="./index.html";
}
