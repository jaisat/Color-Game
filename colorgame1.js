var numSquares=6;
var colors=  generateRandomColors(numSquares);
var squares=document.querySelectorAll( ".square");
var pickedColor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
  hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
numSquares=3;
colors=generateRandomColors(numSquares);
pickedColor=pickcolor();
colordisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
  if(colors[i]){
    squares[i].style.background=colors[i];
  }
  else{
    squares[i].style.display="none";
  }
}
})
hardbtn.addEventListener("click",function(){
  easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
numSquares=6;
colors=generateRandomColors(numSquares);
pickedColor=pickcolor();
colordisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].style.display="block";
}

})

resetbutton.addEventListener("click",function(){
  colors=generateRandomColors(numSquares);
  pickedColor=pickcolor();
  colordisplay.textContent=pickedColor;
  this.textContent="New Color";    
  messagedisplay.textContent="";
  for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
  }
  h1.style.background=steelblue;
})

colordisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
  squares[i].style.background=colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor=this.style.background;

  if(clickedColor===pickedColor){
      messagedisplay.textContent="Correct!";
      resetbutton.textContent="Play Again?";
      changecolor(clickedColor);
      h1.style.background=clickedColor;
    }else {
      this.style.background="#232323";
      messagedisplay.textContent="Try Again"
    }
  });
}

function changecolor(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.background=color;
  }
}

function pickcolor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr=[]
  for(var i=0;i<num;i++){
    arr.push(randomcolor());
  }
  return arr;
}
function randomcolor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";

}
