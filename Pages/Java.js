function Angles(){
	var user_angle1= prompt("Enter your first Angle!");
	var user_angle2= prompt("Enter your second Angle!");
	if(180 - user_angle1 -user_angle2 >=0){
		alert(180-user_angle1 - user_angle2)
		
	}

}
	function maths(){
			var firstangle,text;
			firstangle
			=document.getElementById("user_angle1"). value;
		if (firstangle<0 && firstangle>180){
			var secondangle, text;
			secondangle
			=document.getElementById("user_angle2").value;}
		if(secondangle<0 && secondangle>180){
			alert("NaN")
		}		
		else(true)
			document.getElementById("result").text;
		
		}
function Years(){
	var user_century= prompt("What is the year you want?");
	if(user_century%1000 ==0){
		alert(user_century/100)
		}
	else{
		alert(Math.round(user_century / 100 + 1 ))
		}
	}