function Angles(){
	var user_angle1= prompt("Enter your first Angle!");
	var user_angle2= prompt("Enter your second Angle!");
	if(180 - user_angle1 -user_angle2 >=0){
		alert(180-user_angle1 - user_angle2)
		//Here it would take both angles and find the third unkown angle//
	}
	if(180-user_angle1-user_angle2 <=0){
		alert("This can not be done. Please put two other angles.")
		//THis is made if the user have given angles that were not able to become a traingle//
	}
}

function Years(){
	var user_century= prompt("What is the year you want?");
	 if(user_century%1000 ==0){
		alert("Your are in the " + user_century/100 + " Centrey!")
		}
	else if(user_century>=0 && user_century<= 100){
		alert("You are in the 1st Centrey!");
	}
	else{

		alert("You are in the " + Math.floor(user_century / 100 + 1 ) + " Centrey!")
		}
	}
//Math.floor is used to round the number created down//
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
