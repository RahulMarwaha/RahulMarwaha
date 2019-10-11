function Angles(){
	var user_angle1= prompt("Enter your first Angle!");
	var user_angle2= prompt("Enter your second Angle!");
	if(180 - user_angle1 -user_angle2 >=0){
		alert(180-user_angle1 - user_angle2)
		
	}
	if(180-user_angle1-user_angle2 <=0){
		alert("This can not be done. Please put two other angles.")
	}
}

function Years(){
	var user_century= prompt("What is the year you want?");
	 if(user_century%1000 ==0){
		alert(user_century/100)
		}
	else if(user_century>=0 && user_century<= 100){
		alert("1");
	}
	else{
		alert(Math.trunc(user_century/100 )+1)
	}
	}
	//Math.trunc was used to take away the decimal numbers created from dividing the users year by 100//
function Numbers(){
for(var i=1; i<=100; i++){
	if(i%4 ===0 && i%10 ===0){
		console.log("TenFour!")
	}
	else if(i%10 ===0){
		console.log("ten")
	}
	else if(i%4 ===0){
		console.log("four")
	}
	else{
		console.log(i);
	}
}
}
//the numbers will be shown in console//