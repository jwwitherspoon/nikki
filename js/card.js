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
			document.getElementById("card").innerHTML = "29. You push me to do things I need to do when those things make me uncomfortable.";
			break;
		case 30:
			document.getElementById("card").innerHTML = "30. You are adventurous.";
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
		case 71:
			document.getElementById("card").innerHTML = "71. You bring me coffee from Starbucks.";
			break;
		case 72:
			document.getElementById("card").innerHTML = "72. You send me encouraging texts when I'm down.";
			break;
		case 73:
			document.getElementById("card").innerHTML = "73. You balance me out.";
			break;
		case 74:
			document.getElementById("card").innerHTML = "74. You did premarital counseling with me.";
			break;
		case 75:
			document.getElementById("card").innerHTML = "75. You get along with my family.";
			break;
		case 76:
			document.getElementById("card").innerHTML = "76. You are fiercely loyal.";
			break;
		case 77:
			document.getElementById("card").innerHTML = "77. You educate me in the area of musical theater.";
			break;
		case 78:
			document.getElementById("card").innerHTML = "78. &quot;Come baaaaaaack!&quot;";
			break;
		case 79:
			document.getElementById("card").innerHTML = "79. You still give me butterflies sometimes.";
			break;
		case 80:
			document.getElementById("card").innerHTML = "80. You make weird kissing noises with me.";
			break;
		case 81:
			document.getElementById("card").innerHTML = "81. You love your family even though they often let you down.";
			break;
		case 82:
			document.getElementById("card").innerHTML = "82. You write me beautiful poems.";
			break;
		case 83:
			document.getElementById("card").innerHTML = "83. You let me read What You Don't Know before you finished it.";
			break;
		case 84:
			document.getElementById("card").innerHTML = "84. You let me open the car door for you.";
			break;
		case 85:
			document.getElementById("card").innerHTML = "85. You don't push me to break my convictions.";
			break;
		case 86:
			document.getElementById("card").innerHTML = "86. I enjoy your presence.";
			break;
		case 87:
			document.getElementById("card").innerHTML = "87. Your kisses are amazing.";
			break;
		case 88:
			document.getElementById("card").innerHTML = "88. You can admit when you're wrong.";
			break;
		case 89:
			document.getElementById("card").innerHTML = "89. You're silly :)";
			break;
		case 90:
			document.getElementById("card").innerHTML = "90. You think I'm handsome.";
			break;
		case 91:
			document.getElementById("card").innerHTML = "91. You pray with me.";
			break;
		case 92:
			document.getElementById("card").innerHTML = "92. You make an effort to understand me even when you want to fight.";
			break;
		case 93:
			document.getElementById("card").innerHTML = "93. You look so good in the dresses you pick :3";
			break;
		case 94:
			document.getElementById("card").innerHTML = "94. There is not a materialistic bone in your body.";
			break;
		case 95:
			document.getElementById("card").innerHTML = "95. You cuddle with me often.";
			break;
		case 96:
			document.getElementById("card").innerHTML = "96. You burned your ex's stuff with me.";
			break;
		case 97:
			document.getElementById("card").innerHTML = "97. You're willing to try new video games with me, even when you hate them :)";
			break;
		case 98:
			document.getElementById("card").innerHTML = "98. Your hugs are my favorite in the world.";
			break;
		case 99:
			document.getElementById("card").innerHTML = "99. You go on ice cream/froyo dates with me.";
			break;
		case 100:
			document.getElementById("card").innerHTML = "100. You let me spend time with my friends.";
			break;
		case 101:
			document.getElementById("card").innerHTML = "101. You suggest that we spend time with my dad without me suggesting it first.";
			break;
		case 102:
			document.getElementById("card").innerHTML = "102. You offer me gum all the time.";
			break;
		case 103:
			document.getElementById("card").innerHTML = "103. I don't have to give you bright sides; you find them yourself.";
			break;
		case 104:
			document.getElementById("card").innerHTML = "104. You are willing to talk about difficult topics with me.";
			break;
		case 105:
			document.getElementById("card").innerHTML = "105. You appreciate the beauty of sunsets.";
			break;
		case 106:
			document.getElementById("card").innerHTML = "106. You are willing to split costs with me so I don't go broke.";
			break;
		case 107:
			document.getElementById("card").innerHTML = "107. You helped me pack up my apartment.";
			break;
		case 108:
			document.getElementById("card").innerHTML = "108. You eat at the table with me even when you want to watch TV.";
			break;
		case 109:
			document.getElementById("card").innerHTML = "109. You watch shows with me that you have no interest in.";
			break;
		case 110:
			document.getElementById("card").innerHTML = "110. You have study sessions with me.";
			break;
		case 111:
			document.getElementById("card").innerHTML = "111. You let me cry on your shoulder.";
			break;
		case 112:
			document.getElementById("card").innerHTML = "112. You go on walks with me.";
			break;
		case 113:
			document.getElementById("card").innerHTML = "113. You let me serve you.";
			break;
		case 114:
			document.getElementById("card").innerHTML = "114. You respect me.";
			break;
		case 115:
			document.getElementById("card").innerHTML = "115. You prioritize telling me that I am right.";
			break;
		case 116:
			document.getElementById("card").innerHTML = "116. You take an interest in my coding projects.";
			break;
		case 117:
			document.getElementById("card").innerHTML = "117. You let me show off when I am proud of something.";
			break;
		case 118:
			document.getElementById("card").innerHTML = "118. You dig wax out of my ears even though it grosses you out.";
			break;
		case 119:
			document.getElementById("card").innerHTML = "119. You are honest with me.";
			break;
		case 120:
			document.getElementById("card").innerHTML = "120. You encourage me to go to SA meetings.";
			break;
		case 121:
			document.getElementById("card").innerHTML = "121. You play Talos Priniciple even though it frustrates you to no end :P";
			break;
		case 122:
			document.getElementById("card").innerHTML = "122. You introduced me to the Punch Brothers. They're SO good.";
			break;
		case 123:
			document.getElementById("card").innerHTML = "123. You buy me pizza.";
			break;
		case 124:
			document.getElementById("card").innerHTML = "124. You love me when I'm difficult to love.";
			break;
		case 125:
			document.getElementById("card").innerHTML = "125. You put up with Starbucks because you know it is the best option.";
			break;
		case 126:
			document.getElementById("card").innerHTML = "126. You take naps with me.";
			break;
		case 127:
			document.getElementById("card").innerHTML = "127. You love me and you like me :)";
			break;
		case 128:
			document.getElementById("card").innerHTML = "128. You help me even when it means sacrificing your own needs.";
			break;
		case 129:
			document.getElementById("card").innerHTML = "129. You encouraged me to go to counseling when I needed it.";
			break;
		case 130:
			document.getElementById("card").innerHTML = "130. You get cute with me.";
			break;
		case 131:
			document.getElementById("card").innerHTML = "131. You taught me how to waltz.";
			break;
		case 132:
			document.getElementById("card").innerHTML = "132. You let me share your drinks.";
			break;
		case 133:
			document.getElementById("card").innerHTML = "133. You play Heads Up with me.";
			break;
		case 134:
			document.getElementById("card").innerHTML = "134. You watch new TV shows with me even when we have five others going on.";
			break;
		case 135:
			document.getElementById("card").innerHTML = "135. You know how to comfort me.";
			break;
		case 136:
			document.getElementById("card").innerHTML = "136. You tolerate my foppery.";
			break;
		case 137:
			document.getElementById("card").innerHTML = "137. You are quick to forgive me.";
			break;
		case 138:
			document.getElementById("card").innerHTML = "138. You talk to me regularly when we are apart.";
			break;
		case 139:
			document.getElementById("card").innerHTML = "139. You stay up with me so I can see Tired Nikki.";
			break;
		case 140:
			document.getElementById("card").innerHTML = "140. I can always count on you.";
			break;
		case 141:
			document.getElementById("card").innerHTML = "141. You are protective of those you love.";
			break;
		case 142:
			document.getElementById("card").innerHTML = "142. You stick your tongue out when you put effort into something. It's super cute.";
			break;
		case 143:
			document.getElementById("card").innerHTML = "143. You are trying to work on being a sore loser so we can enjoy games together.";
			break;
		case 144:
			document.getElementById("card").innerHTML = "144. You are my greatest blessing.";
			break;
		case 145:
			document.getElementById("card").innerHTML = "145. You hate the cold.";
			break;
		case 146:
			document.getElementById("card").innerHTML = "146. You think tiny things are adorable.";
			break;
		case 147:
			document.getElementById("card").innerHTML = "147. &quot;It's a really freaking big dog!&quot;";
			break;
		case 148:
			document.getElementById("card").innerHTML = "148. You exaggerate your measurements of time.";
			break;
		case 149:
			document.getElementById("card").innerHTML = "149. You are clumsy.";
			break;
		case 150:
			document.getElementById("card").innerHTML = "150. You are cute when you get nervous.";
			break;
		case 151:
			document.getElementById("card").innerHTML = "151. You let me open doors for you.";
			break;
		case 152:
			document.getElementById("card").innerHTML = "152. You love worshipping God through music.";
			break;
		case 153:
			document.getElementById("card").innerHTML = "153. You wash my dishes for me.";
			break;
		case 154:
			document.getElementById("card").innerHTML = "154. You are talented with makeup.";
			break;
		case 155:
			document.getElementById("card").innerHTML = "155. You introduced me to charcoal masks.";
			break;
		case 156:
			document.getElementById("card").innerHTML = "156. You love peanut butter and cheese.";
			break;
		case 157:
			document.getElementById("card").innerHTML = "157. You share pizza with me.";
			break;
		case 158:
			document.getElementById("card").innerHTML = "158. You play Heads Up with me.";
			break;
		case 159:
			document.getElementById("card").innerHTML = "159. You keep me accountable for my finances.";
			break;
		case 160:
			document.getElementById("card").innerHTML = "160. You are VERY good at salsa dancing ;)";
			break;
		default:
			document.getElementById("card").innerHTML = cardNumber + ". Reason does not exist yet.";
			break;
	}
}
