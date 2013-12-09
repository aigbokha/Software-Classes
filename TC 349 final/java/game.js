//story array
 
var imagesList =[];
imagesList[0] = "images/Story0.jpg";
imagesList[1] = "images/story1.jpg";
imagesList[2] = "images/story2.jpg";
imagesList[3] = "images/story3.jpg";
imagesList[4] = "images/story4.jpg";
imagesList[5] = "images/story5.jpg";
imagesList[6] = "images/story6.jpg";
imagesList[7] = "images/story7.jpg";
imagesList[8] = "images/story8.jpg";
imagesList[9] = "images/story9.jpg";
imagesList[10] = "images/story10.jpg";
imagesList[11] = "images/story11.jpg";
imagesList[12] = "images/story12.jpg";
imagesList[13] = "images/story13.jpg";
imagesList[14] = "images/story14.jpg";
imagesList[15] = "images/story15.jpg";

var textColorsList = [];
textColorsList [0] = "##0000A0";  //red
textColorsList [1] = "#00FF00";  //green
textColorsList [2] = "#0000FF";  //blue

var page = 0;
var story =[];
story[0] = new Object();
story[0].text ="Press Button to Start.";
story[0].buttonA = "Continue";
story[0].buttonB = "Continue";
story[0].DestinationA = 1;
story[0].DestinationB = 1;
story[0].isHiddenA = true;
story[0].isHiddenB = false;
story[0].image = imagesList[0];
story[0].textColor = textColorsList[0];

story[1] = new Object();
story[1].text ="Injured,Scury contemplates as gets in the Championship Round to box.";
story[1].buttonA = "Continue";
story[1].DestinationA = 2;
story[1].DestinationB = 2;
story[1].isHiddenA = false;
story[1].isHiddenB = true;
story[1].image = imagesList[0];
story[1].textColor = textColorsList[0];


story[2] = new Object();
story[2].text="Should he quit?";
story[2].buttonA = "Yes";
story[2].buttonB = "No";
story[2].DestinationA = 3;
story[2].DestinationB = 4;
story[2].isHiddenA = false;
story[2].isHiddenB = false;
story[2].image = imagesList[1];
story[2].textColor = textColorsList[1];


story[3] = new Object();
story[3].text="Are you sure? Quitting means forfeiting his belt.";
story[3].buttonA = "Yes.";
story[3].buttonB = "No.";
story[3].DestinationA = 14;
story[3].DestinationB = 4;
story[3].isHiddenA = false;
story[3].isHiddenB = false;
story[3].image = imagesList[2];
story[3].textColor = textColorsList[1]; 

story[4] = new Object();
story[4].text="Scury Proceeds into the last round. He could either fight to please the fans or take advantage of his scorecard lead.";
story[4].buttonA = "Continue.";
story[4].buttonB = "Continue.";
story[4].DestinationA = 6;
story[4].DestinationB = 6;
story[4].isHiddenA = false;
story[4].isHiddenB = true;
story[4].image = imagesList[3];
story[4].textColor = textColorsList[0];

story[5] = new Object();
story[5].text="He decides to fight to please the fans. He can either box mid rage or In-box.";
story[5].buttonA = "Continue.";
story[5].buttonB = "Continue.";
story[5].DestinationA = 7;
story[5].DestinationB = 7;
story[5].isHiddenA = true;
story[5].isHiddenB = false;
story[5].image = imagesList[4];
story[5].textColor = textColorsList[0];

story[6] = new Object();
story[6].text="Should he take advantage  of the scorecard lead?";
story[6].buttonA = "Yes.";
story[6].buttonB = "No.";
story[6].DestinationA = 13;
story[6].DestinationB = 5;
story[6].isHiddenA = false;
story[6].isHiddenB = false;
story[6].image = imagesList[5];
story[6].textColor = textColorsList[1];

story[7] = new Object();
story[7].text="Should he In-box?";
story[7].buttonA = "Yes.";
story[7].buttonB = "No.";
story[7].DestinationA = 10;
story[7].DestinationB = 8;
story[7].isHiddenA = false;
story[7].isHiddenB = false;
story[7].image = imagesList[6];
story[7].textColor = textColorsList[1];

story[8] = new Object();
story[8].text="He decides to fight mid range. He hits the opponet with a combination and the opponent seems to stagger.";
story[8].buttonA = "Continue.";
story[8].buttonB = "Continue.";
story[8].DestinationA = 9;
story[8].DestinationB = 9;
story[8].isHiddenA = true;
story[8].isHiddenB = false;
story[8].image = imagesList[7];
story[8].textColor = textColorsList[0];

story[9] = new Object();
story[9].text="Should he go in for the kill?";
story[9].buttonA = "Yes.";
story[9].buttonB = "No.";
story[9].DestinationA = 12;
story[9].DestinationB = 11;
story[9].isHiddenA = false;
story[9].isHiddenB = false;
story[9].image = imagesList[8];
story[9].textColor = textColorsList[1];

story[10] = new Object();
story[10].text="He gets hit by a cross counter and gets knocked out.";
story[10].buttonA = "Continue.";
story[10].buttonB = "Continue.";
story[10].DestinationA = 14;
story[10].DestinationB = 14;
story[10].isHiddenA = true;
story[10].isHiddenB = false;
story[10].image = imagesList[9];
story[10].textColor = textColorsList[0];


story[11] = new Object();
story[11].text="He decides to be cautious, the opponent recovers and knocks him out.";
story[11].buttonA = "Continue.";
story[11].buttonB = "Continue.";
story[11].DestinationA = 14;
story[11].DestinationB = 14;
story[11].isHiddenA = true;
story[11].isHiddenB = false;
story[11].image = imagesList[10];
story[11].textColor = textColorsList[0];

story[12] = new Object();
story[12].text="He Knocks the opponent out.";
story[12].buttonA = "Continue.";
story[12].buttonB = "Continue.";
story[12].DestinationA = 13;
story[12].DestinationB = 13;
story[12].isHiddenA = true;
story[12].isHiddenB = false;
story[12].image = imagesList[11];
story[12].textColor = textColorsList[0];


story[13] = new Object();
story[13].text="He Wins.";
story[13].buttonA = "Continue.";
story[13].buttonB = "Continue.";
story[13].DestinationA = 15;
story[13].DestinationB = 15;
story[13].isHiddenA = true;
story[13].isHiddenB = false;
story[13].image = imagesList[12];
story[13].textColor = textColorsList[0];

story[14] = new Object();
story[14].text="He Loses.";
story[14].buttonA = "Continue.";
story[14].buttonB = "Continue.";
story[14].DestinationA = 15;
story[14].DestinationB = 15;
story[14].isHiddenA = true;
story[14].isHiddenB = false;
story[14].image = imagesList[13];
story[14].textColor = textColorsList[0];

story[15] = new Object();
story[15].text="The End.";
story[15].buttonA = "Continue.";
story[15].buttonB = "Continue.";
story[15].DestinationA = 16;
story[15].DestinationB = 16;
story[15].isHiddenA = true;
story[15].isHiddenB = false;
story[15].image = imagesList[14];
story[15].textColor = textColorsList[3];

story[16] = new Object();
story[16].text="Would you like to try again?";
story[16].buttonA = "Yes";
story[16].buttonB = "No.";
story[16].DestinationA = 0;
story[16].DestinationB = 17;
story[16].isHiddenA = false;
story[16].isHiddenB = false;
story[16].image = imagesList[14];
story[16].textColor = textColorsList[3];

story[17] = new Object();
story[17].text="*****GOODBYE*****";
story[17].buttonA = "Yes";
story[17].buttonB = "No.";
story[17].DestinationA = 17;
story[17].DestinationB = 17;
story[17].isHiddenA = true;
story[17].isHiddenB = true;
story[17].image = imagesList[15];
story[17].textColor = textColorsList[3];





 


 
 
//functions

function OnPress(buttonPressed)
{
	if (buttonPressed === 'A')
	{
		page = story[page].DestinationA;
		document.getElementsByName('NavGameA')[0].value = story[page].buttonA;
		document.getElementsByName('NavGameB')[0].value = story[page].buttonB;
		document.getElementsByName('NavGameA')[0].hidden = story[page].isHiddenA;
		document.getElementsByName('NavGameB')[0].hidden = story[page].isHiddenB;
	}
	else if (buttonPressed === 'B')
	{
		page = story[page].DestinationB;
		document.getElementsByName('NavGameA')[0].value = story[page].buttonA;
		document.getElementsByName('NavGameB')[0].value = story[page].buttonB;
		document.getElementsByName('NavGameA')[0].hidden = story[page].isHiddenA;
		document.getElementsByName('NavGameB')[0].hidden = story[page].isHiddenB;
	}
		
		
	document.getElementById("story").innerHTML = story[page].text;
	document.getElementById("image").src =story[page].image;
	document.getElementById("story").style.color = "#FF0000";
				
 
 
 
}