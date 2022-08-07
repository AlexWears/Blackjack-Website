function changeToText()
{
    var content = document.getElementById("rulesContent");
    
    content.innerHTML = "<h2>The Basic Rules of Blackjack</h2>";
    
    content.innerHTML += "<div class='picOnRight'><div class='imageDivRight'><img class='rulesImageRight' src='rulesImages/firstImage.png' alt='cards'></div><p>The goal of Blackjack is to get a hand that is closer to 21 than the dealer's hand without busting, or going over. Each card is valued at the number shown, except Aces and face cards. Aces are either one or eleven, depending on whether or not the player will bust if its eleven. All face cards are worth ten.</p></div>";
    content.innerHTML += "<div class='picOnLeft'><div class='imageDivLeft'><img class='rulesImageLeft' src='rulesImages/secondImage.png' alt='cards'></div><p>The game starts after you make an initial bet on the table. The dealer will hand you two cards, face up. Don't touch anything on the table at this point, or you'll be asked to leave. The dealer will have one face up card, and one that's face-down.</p></div>";
    content.innerHTML += "<div class='picOnRight'><div class='imageDivRight'><img class='rulesImageRight' src='rulesImages/thirdImage.png' alt='cards'></div><p>At this point you have two basic options: hit or stand. Other, more advanced techniques will be discussed later on in the instructions. If you stand, your current hand value is calculated, and your turn is done. If you hit, the dealer deals one card from the top of the stack and the value of this card is added to your hand. This keeps going until you bust or you stand. If you bust, your chips are taken, even if the dealer also busts, and you are out of the game.</p></div>";
    content.innerHTML += "<div class='picOnLeft'><div class='imageDivLeft'><img class='rulesImageLeft' src='rulesImages/fourthImage.png' alt='cards'></div><p>After the dealer has made their way around the table to the other players, they then reveal their face-down card and deal to themself. While rules vary based on the casino, the dealer typically draws until they have at least a total of 17. They must hit on a soft 17 or higher, meaning that if they have an ace and it is counted as a one and their total is between 17 and 21 they must hit.</p></div>";
    content.innerHTML += "<div class='picOnRight'><div class='imageDivRight'><img class='rulesImageRight' src='rulesImages/fifthImage.png' alt='cards'></div><p>At this point, your hand total is compared to the dealer's hand's total. If yours is higher, you win the amount you bet from the casino. If yours is lower, you lose the amount that you bet. If you tie, your original bet is returned to you. Regardless, the game is over, and you can walk away or bet again for the next game.<p></div>";
    
    content.innerHTML += "<h2>A Few More Advanced Rules<h2>";
    
    content.innerHTML += "<h4>Blackjacks</h4><div class='picOnLeft'><div class='imageDivLeft'><img class='rulesImageLeft' src='rulesImages/sixthImage.png' alt='cards'></div><p>If your first two cards are an ace and a face card or a ten, then you got a blackjack. A blackjack is always worth more than a 21 that is not made up of an Ace and a card valued as a ten. You are done for the round, and, unless the dealer also has a Blackjack, you win your bet times 3/2 immediately. In the event that a dealer has an Ace as their face up card, they check the other card to see if it is valued as a ten. If so, they flip it over immediately and the round is over.</p></div>"
    content.innerHTML += "<h4>Doubling Down</h4><div class='picOnRight'><div class='imageDivRight'><img class='rulesImageRight' src='rulesImages/seventhImage.png' alt='cards'></div><p>If you feel confident in your hand, you can double down. Doing so means that you double the bet you make by placing more chips on the table, and you draw one more card. The starting hand to the right would be good to double down on; the value that you are most likely to get is 10, and there is no possible way to bust.</p></div>"
    content.innerHTML += "<h4>Splitting</h4><div class='picOnLeft'><div class='imageDivLeft'><img class='rulesImageLeft' src='rulesImages/eighthImage.png' alt='cards'></div><p>if you have been dealt two cards of the same value to begin, you can split them. Your original bet is placed on one of the cards, and an equal bet is placed on the other. Each card is then dealt a new card, and you are basically playing with two hands on this game. Each is played the same way that you would normally play, but with two hands. Winning and losing works on a per-hand basis.</p></div>"
    content.innerHTML += "<h4>Insurance</h4><div class='picOnRight'><div class='imageDivRight'><img class='rulesImageRight' src='rulesImages/ninthImage.png' alt='cards'></div><p> Before checking the face-down card if the dealer has an Ace, they will offer insurance. Basically, you bet half of your original bet that the dealer's face-down card is a card valued as a ten. If you are right, you lose your main bet, but get back half of it for winning the insurance bet: a new neutral. If you are wrong, you lose the money you bet on insurance. This is generally considered to never be worth the risk.</p></div>"
    
    "<h4></h4><p></p>"
}

function changeToVideo()
{
    var content = document.getElementById("rulesContent");
    
    content.innerHTML = "<iframe id='blackjackVideo' width='450' height='315' src='https://www.youtube.com/embed/XYgdLMcPspo'></iframe>"
    
    content.innerHTML += "<h3>This is a video produced by BlackjackOnline that details the rules of Blackjack and how to play at a casino</h3>"
}