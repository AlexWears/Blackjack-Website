const cards = [
    new Card(11, 'Ace', 'Clubs', 1, 'ace_of_clubs.png'),
    new Card(2, 'Two', 'Clubs', 0, '2_of_clubs.png'),
    new Card(3, 'Three', 'Clubs', 0, '3_of_clubs.png'),
    new Card(4, 'Four', 'Clubs', 0, '4_of_clubs.png'),
    new Card(5, 'Five', 'Clubs', 0, '5_of_clubs.png'),
    new Card(6, 'Six', 'Clubs', 0, '6_of_clubs.png'),
    new Card(7, 'Seven', 'Clubs', 0, '7_of_clubs.png'),
    new Card(8, 'Eight', 'Clubs', 0, '8_of_clubs.png'),
    new Card(9, 'Nine', 'Clubs', 0, '9_of_clubs.png'),
    new Card(10, 'Ten', 'Clubs', 0, '10_of_clubs.png'),
    new Card(10, 'Jack', 'Clubs', 0, 'jack_of_clubs2.png'),
    new Card(10, 'Queen', 'Clubs', 0, 'queen_of_clubs2.png'),
    new Card(10, 'King', 'Clubs', 0, 'king_of_clubs2.png'),
    new Card(11, 'Ace', 'Diamonds', 1, 'ace_of_diamonds.png'),
    new Card(2, 'Two', 'Diamonds', 0, '2_of_diamonds.png'),
    new Card(3, 'Three', 'Diamonds', 0, '3_of_diamonds.png'),
    new Card(4, 'Four', 'Diamonds', 0, '4_of_diamonds.png'),
    new Card(5, 'Five', 'Diamonds', 0, '5_of_diamonds.png'),
    new Card(6, 'Six', 'Diamonds', 0, '6_of_diamonds.png'),
    new Card(7, 'Seven', 'Diamonds', 0, '7_of_diamonds.png'),
    new Card(8, 'Eight', 'Diamonds', 0, '8_of_diamonds.png'),
    new Card(9, 'Nine', 'Diamonds', 0, '9_of_diamonds.png'),
    new Card(10, 'Ten', 'Diamonds', 0, '10_of_diamonds.png'),
    new Card(10, 'Jack', 'Diamonds', 0, 'jack_of_diamonds2.png'),
    new Card(10, 'Queen', 'Diamonds', 0, 'queen_of_diamonds2.png'),
    new Card(10, 'King', 'Diamonds', 0, 'king_of_diamonds2.png'),
    new Card(11, 'Ace', 'Hearts', 1, 'ace_of_hearts.png'),
    new Card(2, 'Two', 'Hearts', 0, '2_of_hearts.png'),
    new Card(3, 'Three', 'Hearts', 0, '3_of_hearts.png'),
    new Card(4, 'Four', 'Hearts', 0, '4_of_hearts.png'),
    new Card(5, 'Five', 'Hearts', 0, '5_of_hearts.png'),
    new Card(6, 'Six', 'Hearts', 0, '6_of_hearts.png'),
    new Card(7, 'Seven', 'Hearts', 0, '7_of_hearts.png'),
    new Card(8, 'Eight', 'Hearts', 0, '8_of_hearts.png'),
    new Card(9, 'Nine', 'Hearts', 0, '9_of_hearts.png'),
    new Card(10, 'Ten', 'Hearts', 0, '10_of_hearts.png'),
    new Card(10, 'Jack', 'Hearts', 0, 'jack_of_hearts2.png'),
    new Card(10, 'Queen', 'Hearts', 0, 'queen_of_hearts2.png'),
    new Card(10, 'King', 'Hearts', 0, 'king_of_hearts2.png'),
    new Card(11, 'Ace', 'Spades', 1, 'ace_of_spades.png'),
    new Card(2, 'Two', 'Spades', 0, '2_of_spades.png'),
    new Card(3, 'Three', 'Spades', 0, '3_of_spades.png'),
    new Card(4, 'Four', 'Spades', 0, '4_of_spades.png'),
    new Card(5, 'Five', 'Spades', 0, '5_of_spades.png'),
    new Card(6, 'Six', 'Spades', 0, '6_of_spades.png'),
    new Card(7, 'Seven', 'Spades', 0, '7_of_spades.png'),
    new Card(8, 'Eight', 'Spades', 0, '8_of_spades.png'),
    new Card(9, 'Nine', 'Spades', 0, '9_of_spades.png'),
    new Card(10, 'Ten', 'Spades', 0, '10_of_spades.png'),
    new Card(10, 'Jack', 'Spades', 0, 'jack_of_spades2.png'),
    new Card(10, 'Queen', 'Spades', 0, 'queen_of_spades2.png'),
    new Card(10, 'King', 'Spades', 0, 'king_of_spades2.png'),
    new Card(-1, 'Back', 'Back', 0, 'card_back.png')
];

var playerAceCount;
var dealerAceCount;

var playerHandTotal;
var dealerHandTotal;
    
var playerCurrentCard = 2;
var dealerCurrentCard = 2;

const playerHand = [];
const dealerHand = [];

var winnings = 0;
var bet;

var resetBet = '<label for="bet">Input your Bet</label><input type="number" id="bet" name="bet" min="1" value="1"><button type="button" form="blackjackForm" value="start" onclick="startBlackjack();return false">Click to Start</button>';

function Card(value, valueName, suit, isAce, cardURL)
{
    this.value = value;
    this.valueName = valueName;
    this.suit = suit;
    this.isAce = isAce;
    this.cardURL = cardURL;
}

function shuffleCards()
{
    for (let i = 0; i < 52; i++)
        {
            var shuffleValue = Math.floor(Math.random() * 52);
            var savedCard = cards[shuffleValue];
            
            cards[shuffleValue] = cards[i];
            cards[i] = savedCard;
        }
    
    playerAceCount = 0;
    dealerAceCount = 0;
    
    for (let i = 0; i < 11; i++)
        {   
            var dealerCardSlot = document.getElementById("dealer" + i);   
            
            dealerHand[i] = cards[i+10];
            
            if (i != 1)
                {
                    dealerCardSlot.style.visibility = "hidden";
                }
            else
                {
                    dealerCardSlot.style.visibility = "visible"
                }
            if (dealerHand[i].isAce == 1 && i <= 1)
                {
                    dealerAceCount++;
                }
            
            dealerCardSlot.setAttribute("src", "blackjackCards/" + dealerHand[i].cardURL);
            
            playerHand[i] = cards[i];
            
            var playerCardSlot = document.getElementById("player" + i);
            
            if (i > 1)
                {
                    playerCardSlot.style.visibility = "hidden";
                }
            else
                {
                    playerCardSlot.style.visibility = "visible"
                }
            if (playerHand[i].isAce == 1 && i <= 1)
                {
                    playerAceCount++;
                }
            
            playerCardSlot.setAttribute("src", "blackjackCards/" + playerHand[i].cardURL);
        }
}

//***********************************
//Start of actual game functions
//***********************************

function startBlackjack()
{
    shuffleCards();
    
    bet = document.getElementById("bet").value;
    
    document.getElementById("betMessage").innerHTML = "<p>Current Bet: " + bet + "</p>";
    
    var playerHandTotal = playerHand[0].value + playerHand[1].value;
    var dealerHandTotal = dealerHand[0].value + dealerHand[1].value
    
    var playerCurrentCard = 2;
    var dealerCurrentCard = 2;
    
    var options = document.getElementById("blackjackForm");
    options.innerHTML = "";
    
    var message = document.getElementById("gameMessage");
    message.innerHTML = "";
    
    var doubleDownCount = 0;
    
    
    let hit = document.createElement("button");
    hit.innerHTML = "Hit"
    hit.onclick = function hitChoice()
    {   
        if (dealerHandTotal == 21 && dealerCurrentCard == 2)
            {
                calculateTotal(playerHandTotal, dealerHandTotal, playerCurrentCard);
                options.innerHTML = resetBet;
                return false;
            }
        
        seeCard = document.getElementById("player" + playerCurrentCard);
        seeCard.style.visibility = "visible";
        playerHandTotal += playerHand[playerCurrentCard].value;
        
        if (playerHand[playerCurrentCard].isAce == 1)
            {
                playerAceCount++;
            }
        
        if (playerHandTotal > 21 && playerAceCount >= 1)
            {
                playerHandTotal = playerHandTotal-10;
                playerAceCount--;
            }
        
        playerCurrentCard++;
        
        if (playerHandTotal > 21)
            {
                calculateTotal(playerHandTotal, dealerHandTotal, playerCurrentCard)
                options.innerHTML = resetBet;
                return false;
            }
        
        return false;
    };
    options.appendChild(hit);
    
    let stand = document.createElement("button");
    stand.innerHTML = "Stand";
    stand.onclick = function standChoice()
    {  
        document.getElementById("dealer0").style.visibility = "visible";
        
        if (playerHandTotal == 21 && playerCurrentCard == 2)
        {
            calculateTotal(playerHandTotal, dealerHandTotal, playerCurrentCard);
            console.log("Butt fart");
            options.innerHTML = resetBet;
            return false;
        }
        
        while (dealerHandTotal < 17 && dealerHandTotal < 21)
            {
                seeCard = document.getElementById("dealer" + dealerCurrentCard);
                seeCard.style.visibility = "visible";

                dealerHandTotal += dealerHand[dealerCurrentCard].value;

                if (dealerHand[playerCurrentCard].isAce == 1)
                    {
                        dealerAceCount++;
                    }

                if (dealerHandTotal > 21 && dealerAceCount >= 1)
                    {
                        dealerHandTotal = dealerHandTotal-10;
                        dealerAceCount--;
                    }

                dealerCurrentCard++;
            }
        
        console.log("Dealer total: " + dealerHandTotal);
        console.log("Player total: " + playerHandTotal);
        
        calculateTotal(playerHandTotal, dealerHandTotal, playerCurrentCard);
        
        options.innerHTML = resetBet;
        return false;
    };
    options.appendChild(stand);
    
    let doubleDown = document.createElement("button");
    doubleDown.innerHTML = "Double Down";
    doubleDown.onclick = function doubleDownChoice()
    {
        bet *= 2;
        document.getElementById("betMessage").innerHTML = "<p>Current Bet: " + bet + "</p>";
        
        seeCard = document.getElementById("player" + playerCurrentCard);
        seeCard.style.visibility = "visible";
        playerHandTotal += playerHand[playerCurrentCard].value;
        if (playerHand[playerCurrentCard].isAce == 1)
            {
                playerAceCount++;
            }
        
        if (playerHandTotal > 21 && playerAceCount >= 1)
            {
                playerHandTotal = playerHandTotal-10;
                playerAceCount--;
            }
        playerCurrentCard++;
        
        document.getElementById("dealer0").style.visibility = "visible";
        
        while (dealerHandTotal < 17 && dealerHandTotal < 21)
            {
                seeCard = document.getElementById("dealer" + dealerCurrentCard);
                seeCard.style.visibility = "visible";

                dealerHandTotal += dealerHand[dealerCurrentCard].value;

                if (dealerHand[playerCurrentCard].isAce == 1)
                    {
                        dealerAceCount++;
                    }

                if (dealerHandTotal > 21 && dealerAceCount >= 1)
                    {
                        dealerHandTotal = dealerHandTotal-10;
                        dealerAceCount--;
                    }

                dealerCurrentCard++;
            }
        
        console.log("Dealer total: " + dealerHandTotal);
        console.log("Player total: " + playerHandTotal);
        
        calculateTotal(playerHandTotal, dealerHandTotal, playerCurrentCard);
        
        options.innerHTML = resetBet;
        return false;
    };
    options.appendChild(doubleDown);
    
    let insurance = document.createElement("button");
    insurance.innerHTML = "Bet Insurance";
    insurance.onclick = function insuranceChoice()
    {
        if (dealerHand[1].value != 11)
            {
                alert("You can only bet insurance if the dealer has a face-up ace");
                return false;
            }
        else if (dealerHand[0].value == 10)
            {
                alert("Wow, insurance ACTUALLY paid off! You didn't lose any money!");
                options.innerHTML = resetBet;
                return false;
            }
        else
            {
                alert("The dealer does not have a card valued as a ten");
                return false;
            }
        
        return false;
    };
    options.appendChild(insurance);
    
    return false;
}



function calculateTotal(playerHandTotal, dealerHandTotal, playerHandSize)
{
    var message = document.getElementById("gameMessage");
    
    bet = parseInt(bet);
    
    if (playerHandTotal > 21)
        {
            message.innerHTML = "Dang, you busted! You lost your bet";
            winnings -= bet;
            document.getElementById("winningsMessage").innerHTML = "Current Winnings: " + winnings;
            return;
        }
    
    if (dealerHandTotal == playerHandTotal && playerHandSize != 2 && dealerCurrentCard != 2)
        {
            message.innerHTML = "You and the dealer tied! You did not win any money";
            return;
        }
    
    if (playerHandTotal == 21 && playerHandSize == 2)
        {
            message.innerHTML = "Wow, you got a blackjack! You win your bet times 3/2!";
            winnings += Math.ceil(bet * 1.5);
            document.getElementById("winningsMessage").innerHTML = "Current Winnings: " + winnings;
            return;
        }
    
    if (playerHandTotal > dealerHandTotal || dealerHandTotal > 21)
        {
            message.innerHTML = "You Won!";
            winnings += bet;
            document.getElementById("winningsMessage").innerHTML = "Current Winnings: " + winnings;
            return;
        }
    
    if (dealerHandTotal > playerHandTotal)
        {
            document.getElementById("dealer0").style.visibility = "visible";
            message.innerHTML = "The dealer had a higher hand!";
            winnings -= bet;
            document.getElementById("winningsMessage").innerHTML = "Current Winnings: " + winnings;
            return;
        }
    
    
    options.innerHTML = resetBet;
    return false;
}