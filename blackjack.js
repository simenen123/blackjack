let user_points = 0

users_cards = []

kort = [1,1,1,1, 2,2,2,2, 3,3,3,3, 4,4,4,4,]

let length =  kort.length;


let i = 0
while (i < 2) {
    random_card_index = Math.floor(Math.random() * length);
    vårt_kort = kort[random_card_index]
    console.log(vårt_kort)
    users_cards.push(vårt_kort)
    i++;
  }
  console.log(users_cards)