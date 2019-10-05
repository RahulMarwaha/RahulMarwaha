function Angles(){
	var user_angle1= prompt("Enter your first Angle!");
	var user_angle2= prompt("Enter your second Angle!");
	if(180 - user_angle1 -user_angle2 >=0){
		alert(180-user_angle1 - user_angle2)
		
	}

}
function Angle(){
		firstangle = document.getElementById("firstangle").value;
		secondangle = document.getElementById("secondangle"). value;
		document.getElementById("result").innerHTML = 180-firstangle-secondangle
	if (180-firstangle-secondangle <=0) {
		 var result = alert("NaN")
	}
}