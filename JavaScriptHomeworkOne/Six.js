function validateCards(cards, bannedPrefs)
{
   let checkedCards = Array();
 
   for(var card in cards)
   {
      let isAllowed = true;
      for(var pref in bannedPrefs)
      {
         //console.log(cards[card].substring(0, bannedPrefs[pref].length) + "==" + bannedPrefs[pref]);
         if(cards[card].substring(0, bannedPrefs[pref].length) == bannedPrefs[pref])
         {
            isAllowed = false;
         }
      }
      
      let cardNums = cards[card].slice(0, cards[card].length - 1).split("")
      let checksum = 0;
      for(var num in cardNums)
      {
         checksum += cardNums[num] * 2;
      }
      
      let isValid;
      if(checksum % 10 == cards[card].charAt(cards[card].length - 1))
      {
         isValid = true;
      }
      else
      {
         isValid = false;
      }
      
      //console.log("Card: " + cards[card] + " isValid: " + isValid + " isAllowed: " + isAllowed);
      let checkedCard = {card: cards[card], isValid: isValid, isAllowed: isAllowed};
      //checkedCards.push(JSON.stringify(checkedCard));
      checkedCards.push(checkedCard);
   }
   return checkedCards = JSON.stringify(checkedCards);
}

let cardArray = ['6724843711060148', '6724843711060147', '1124843711060147'];
let bannedPrefixArray = ['11', '3434', '67453', '9'];

let checkedCards = validateCards(cardArray, bannedPrefixArray);

console.log(checkedCards);

/* for(var card in checkedCards)
{
   console.log(checkedCards[card]);
} */