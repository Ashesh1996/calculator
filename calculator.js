// function one(){
// 	document.getElementById('cal').value += '1';
// 	// var one=document.getElementById('one');
// 	// alert('1');
// }
// function to(){
// 	document.getElementById('cal').value +='2';

// }
// function thre(){
// 	document.getElementById('cal').value +='3';

// }
// function four(){
// 	document.getElementById('cal').value +='4';

// }
// function five(){
// 	document.getElementById('cal').value +='5';

// }
// function six(){
// 	document.getElementById('cal').value +='6';

// }
// function seven(){
// 	document.getElementById('cal').value +='7';

// }
// function eight(){
// 	document.getElementById('cal').value +='8';

// }
// function nine(){
// 	document.getElementById('cal').value +='9';

// }
// function zeo(){
// 	document.getElementById('cal').value +='0';

// }
function displayvalue(num){
	document.getElementById('cal').value +=num;
}

function totalvalue(){
	// alert();
	if(document.getElementById('cal').value!=""){
		document.getElementById('cal').value =eval(document.getElementById('cal').value);
	}
	
}
function clea(){
	document.getElementById('cal').value="";
}
function squareroot(){
	document.getElementById('cal').value=Math.sqrt(document.getElementById('cal').value);
}
function square(){
	document.getElementById('cal').value=Math.pow((document.getElementById('cal').value),2);
}
function cube(){
	document.getElementById('cal').value=Math.pow((document.getElementById('cal').value),3);
}
function pie(){
	document.getElementById('cal').value=Math.PI;
}
function logten(){
	document.getElementById('cal').value=Math.log(document.getElementById('cal').value);
}