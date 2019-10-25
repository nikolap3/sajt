var index = 0;
vrti();

function vrti(){
  var i;
  var x=document.getElementById("navbar").childNodes;
  for(i=0;i<x.length;i++){
	 if(x[i].val().width()<x[i].width())x[i].style.display="none";
  }
  setTimeout(vrti,400);
}
