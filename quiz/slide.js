var img=["../quiz/ny.jpg","../quiz/chicago.jpg","../quiz/la.jpg"];
var index=0;
var x=img.length -1;
function slider(num){
	index=index + num;
	if(index>x){
		index=0;

	}
	if(index<0){
		index=x;
	}
	document.getElementById("image").src=img[index];
}


