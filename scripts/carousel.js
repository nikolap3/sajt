var index = 0;
vrti();

function vrti(){
  var i;
  var x=document.getElementsByClassName("SlideShow");
  for(i=0;i<x.length;i++){
     x[i].style.display="none";
  }
  index++;
  if(index>x.length){index=1}
  x[index-1].style.display = "block";
  setTimeout(vrti,3000);
}
