function next() {
	//Get current value of card string
	var value = document.getElementById("card").innerHTML;
	//If no reason has been displayed yet, display the first reason
	if (value == "This a website version of the book you made me last year. Click Next or Random for reasons why I love you!") {
		document.getElementById("card").innerHTML = "1. You are direct with me.";
		return 0;
	}
	//Use the number at the beginning of the string as the current card number
	var split = value.split(".");
	var cardNumber = parseInt(split[0]);
	//If the card number is less than 365, increment card number
	if (cardNumber < 365) {
		card(cardNumber + 1);
	}
}

function previous() {
	//Get current value of card string
	var value = document.getElementById("card").innerHTML;
	//Use the number at the beginning of the string as the current card number
	var split = value.split(".");
	var cardNumber = parseInt(split[0]);
	//If the card number is greater than 1, decrement card number
	if (cardNumber > 1) {
		card(cardNumber - 1);
	}
}

function random() {
	//Get a random card number between 1 and 365, inclusive
	var cardNumber = Math.floor(Math.random() * 21) + 1;
	card(cardNumber);
}

function card(cardNumber) {
	//Use the card number to display the corresponding reason why I love Nikki
	switch(cardNumber) {
		case 1:
			document.getElementById("card").innerHTML = "1. You are direct with me.";
			break;
		case 2:
			document.getElementById("card").innerHTML = "2. You are the kindest woman I have ever met.";
			break;
		case 3:
			document.getElementById("card").innerHTML = "3. You have a strong relationship with Jesus.";
			break;
		case 4:
			document.getElementById("card").innerHTML = "4. You work on your flaws to make our life better.";
			break;
		case 5:
			document.getElementById("card").innerHTML = "5. You take care of me when I am sick.";
			break;
		case 6:
			document.getElementById("card").innerHTML = "6. You made me a scavenger hunt for my birthday.";
			break;
		case 7:
			document.getElementById("card").innerHTML = "7. You are an incredible gift-giver.";
			break;
		case 8:
			document.getElementById("card").innerHTML = "8. You don't play mind games.";
			break;
		case 9:
			document.getElementById("card").innerHTML = "9. You have a wonderful sense of humor.";
			break;
		case 10:
			document.getElementById("card").innerHTML = "10. Your body is smoking hot. ;)";
			break;
		case 11:
			document.getElementById("card").innerHTML = "11. Your laugh is adorable and infectious.";
			break;
		case 12:
			document.getElementById("card").innerHTML = "12. You get so loopy when you are tired/drunk.";
			break;
		case 13:
			document.getElementById("card").innerHTML = "13. You try to get to know my friends even though you don't always like socialization.";
			break;
		case 14:
			document.getElementById("card").innerHTML = "14. I can trust you with anything.";
			break;
		case 15:
			document.getElementById("card").innerHTML = "15. You are SO smart!";
			break;
		case 16:
			document.getElementById("card").innerHTML = "16. You are artistic.";
			break;
		case 17:
			document.getElementById("card").innerHTML = "17. You accomplish everything you put your mind to, no matter how difficult it is.";
			break;
		case 18:
			document.getElementById("card").innerHTML = "18. You do featherlight on me. I love that. :)";
			break;
		case 19:
			document.getElementById("card").innerHTML = "19. You like my bubble butt.";
			break;
		case 20:
			document.getElementById("card").innerHTML = "20. You have a gorgeous butt. Seriously. It's SO hot.";
			break;
		case 21:
			document.getElementById("card").innerHTML = "21. We have the same decorating tastes.";
			break;
		default:
			document.getElementById("card").innerHTML = "Reason " + cardNumber + " does not exist yet.";
			break;
	}
}