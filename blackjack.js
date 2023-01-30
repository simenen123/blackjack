let user_points = 0

users_cards = []

dealer_cards = []

kort = [1,1,1,1, 2,2,2,2, 3,3,3,3, 4,4,4,4,]

types = ["C", "D", "H", "S"]

let deck_length =  kort.length;
     
let type_lenght = types.length

console.log("hello", user_points)

let i = 0
while (i < 2) {
    random_card_index = Math.floor(Math.random() * deck_length);
    vårt_kort = kort[random_card_index]
    random_type = types[Math.floor(Math.random() * deck_length)]

    random_type_index = Math.floor(Math.random() * type_lenght)
    type = types[random_type_index]


    console.log(vårt_kort)


    kort.splice(random_card_index,1)
    users_cards.push(vårt_kort + "-" + type )
    console.log(users_cards)
    i++;
  }

  console.log(kort)
  
// Running the for loop
for (let i = 0; i < users_cards.length; i++) {
    user_points += users_cards[i];
}
