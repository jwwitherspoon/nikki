function next() {
	//Get current value of card string
	var value = document.getElementById("card").innerHTML;
	//If no reason has been displayed yet, display the first reason
	if (value == "This a website version of the book you made me last year. Click Next or Random for reasons why I love you!") {
		card(1);
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
	var cardNumber = Math.floor(Math.random() * 365) + 1;
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
		case 22:
			document.getElementById("card").innerHTML = "22. You support me in my decisions even when you don't agree with them.";
			break;
		case 23:
			document.getElementById("card").innerHTML = "23. You are so good at playing piano!";
			break;
		case 24:
			document.getElementById("card").innerHTML = "24. You write songs with me.";
			break;
		case 25:
			document.getElementById("card").innerHTML = "25. You play music with me.";
			break;
		case 26:
			document.getElementById("card").innerHTML = "26. You give me words of affirmation even when you don't necessarily know how to.";
			break;
		case 27:
			document.getElementById("card").innerHTML = "27. You make up weird lyrics to songs.";
			break;
		case 28:
			document.getElementById("card").innerHTML = "28. You go on double dates with my friends.";
			break;
		case 29:
			document.getElementById("card").innerHTML = "29. You push me to do things that make me uncomfortable.";
			break;
		case 30:
			document.getElementById("card").innerHTML = "30. You are adventurous in the bedroom.";
			break;
		case 31:
			document.getElementById("card").innerHTML = "31. You are a good mother to Cleo.";
			break;
		case 32:
			document.getElementById("card").innerHTML = "32. You are going to be an amazing mother to our children.";
			break;
		case 33:
			document.getElementById("card").innerHTML = "33. You are learning healthy ways to deal with your feelings.";
			break;
		case 34:
			document.getElementById("card").innerHTML = "34. You go on dates with me even when you're tired.";
			break;
		case 35:
			document.getElementById("card").innerHTML = "35. You make dinner for me.";
			break;
		case 36:
			document.getElementById("card").innerHTML = "36. You like cooking with me.";
			break;
		case 37:
			document.getElementById("card").innerHTML = "37. You are organized.";
			break;
		case 38:
			document.getElementById("card").innerHTML = "38. You are good at planning.";
			break;
		case 39:
			document.getElementById("card").innerHTML = "39. You are a saver. I need that in my life.";
			break;
		case 40:
			document.getElementById("card").innerHTML = "40. You dress well. Everything you wear looks so good on you.";
			break;
		case 41:
			document.getElementById("card").innerHTML = "41. We have so much in common.";
			break;
		case 42:
			document.getElementById("card").innerHTML = "42. You like sex a lot. ;)";
			break;
		case 43:
			document.getElementById("card").innerHTML = "43. You push me to push myself.";
			break;
		case 44:
			document.getElementById("card").innerHTML = "44. You have amazing boobs. They're the perfect size!";
			break;
		case 45:
			document.getElementById("card").innerHTML = "45. Your curly hair is so beautiful.";
			break;
		case 46:
			document.getElementById("card").innerHTML = "46. You make weird faces.";
			break;
		case 47:
			document.getElementById("card").innerHTML = "47. You tease me about my grammar mistakes.";
			break;
		case 48:
			document.getElementById("card").innerHTML = "48. You point me back to Jesus when I need it.";
			break;
		case 49:
			document.getElementById("card").innerHTML = "49. You keep me grounded when I freak out about things or have silly impulses.";
			break;
		case 50:
			document.getElementById("card").innerHTML = "50. You believe in me.";
			break;
		case 51:
			document.getElementById("card").innerHTML = "51. You did SO well at planning our wedding!";
			break;
		case 52:
			document.getElementById("card").innerHTML = "52. You have been supportive of my recovery journey.";
			break;
		case 53:
			document.getElementById("card").innerHTML = "53. You have put so much time and effort into overcoming your binge eating.";
			break;
		case 54:
			document.getElementById("card").innerHTML = "54. You laugh at your own jokes.";
			break;
		case 55:
			document.getElementById("card").innerHTML = "55. Your eyes are so pretty.";
			break;
		case 56:
			document.getElementById("card").innerHTML = "56. You make dirty jokes with me.";
			break;
		case 57:
			document.getElementById("card").innerHTML = "57. You don't mind me cursing now and then, but you keep me from doing it too much.";
			break;
		case 58:
			document.getElementById("card").innerHTML = "58. You let me introduce you to new music.";
			break;
		case 59:
			document.getElementById("card").innerHTML = "59. You enjoy cuddles as much as I do.";
			break;
		case 60:
			document.getElementById("card").innerHTML = "60. You take an interest in the things I like even when you don't understand them.";
			break;
		case 61:
			document.getElementById("card").innerHTML = "61. You introduce me to new movies.";
			break;
		case 62:
			document.getElementById("card").innerHTML = "62. You trust me.";
			break;
		case 63:
			document.getElementById("card").innerHTML = "63. You have a beautiful singing voice.";
			break;
		case 64:
			document.getElementById("card").innerHTML = "64. You tell me to breathe when I'm freaking out.";
			break;
		case 65:
			document.getElementById("card").innerHTML = "65. You never give me ultimatums.";
			break;
		case 66:
			document.getElementById("card").innerHTML = "66. &quot;I'm a leech!&quot;";
			break;
		case 67:
			document.getElementById("card").innerHTML = "67. Your voice goes up when you end a sentence with the word &quot;me.&quot;";
			break;
		case 68:
			document.getElementById("card").innerHTML = "68. You look so cute in beanies.";
			break;
		case 69:
			document.getElementById("card").innerHTML = "69. You are kind.";
			break;
		case 70:
			document.getElementById("card").innerHTML = "70. You are compassionate.";
			break;
		default:
			document.getElementById("card").innerHTML = "Reason " + cardNumber + " does not exist yet.";
			break;
	}
}
