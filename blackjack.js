
window.onload

let user_points = 0

users_cards = []

dealer_cards = []

kort = [1,1,1,1, 2,2,2,2, 3,3,3,3, 4,4,4,4, 5,5,5,5, 6,6,6,6, 7,7,7,7, 8,8,8,8]

types = ["C", "D", "H", "S"]

window.onload = function() {
  startGame();
}


let i = 0
while (i < 2) {
  //velger kort
    let deck_length =  kort.length;
    let type_lenght = types.length
    random_card_index_player = Math.floor(Math.random() * deck_length);
    vårt_kort = kort[random_card_index_player]
    //velger type
    random_type = types[Math.floor(Math.random() * deck_length)]
    random_type_index = Math.floor(Math.random() * type_lenght)
    type = types[random_type_index]
  
    //fjerner fra dekket og legg til i hånd
    users_cards.push(vårt_kort + "-" + type )
    kort.splice(random_card_index_player,1)
    i++;
    }
  console.log(users_cards)

  //while løkke for dealer
  //Fikse dealer sine kort nestegang.
  let j = 0
  while (j < 2){
    //velger kort
    let deck_length =  kort.length;
    let type_lenght = types.length
    random_card_index_dealer = Math.floor(Math.random() * deck_length);
    dealer_card = kort[random_card_index_dealer]

    //velger type
    random_type = types[Math.floor(Math.random() * deck_length)]
    random_type_index = Math.floor(Math.random() * type_lenght)
    type = types[random_type_index]

    dealer_cards.push(dealer_card + "-" + type )
    kort.splice(random_card_index_dealer,1)
    j++
  }


// Running the for loop
for (let i = 0; i < users_cards.length; i++) {
    user_points += users_cards[i];
}

function startGame() {
  let cardImg = document.createElement("img");
  cardImg.src = "./cards/" + users_cards[0] + ".png";
  document.getElementById("dealer-cards").append(cardImg);
  }