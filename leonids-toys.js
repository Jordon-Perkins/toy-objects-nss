const toys = [
    {
        id: 1,
        name: "Barbie",
        maker: "Mattel, Inc",
        price: 30,
        weight: 2.1,
        sound: false
    },
    
    {
        id: 2,
        name: "Teddy Bear",
        maker: "Build a Bear",
        price: 55,
        weight: 5.6,
        sound: true
    },
    
    {
        id: 3,
        name: "remote controlled car",
        maker: "RC Cars",
        price: 167,
        weight: 8.3,
        sound: true
    }
]

const toy1 = {
    id: 4,
    name: "Legos",
    maker: "Legos Group",
    price: 67,
    weight: 10.6,
    sound: true
}

const toy2 = {
    id: 5,
    name: "Monopoly",
    maker: "Hasbro",
    price: 25,
    weight: 3.3,
    sound: false
}

toys.push(toy1)
toys.push(toy2)
const toyToFind = 5

for(const toy of toys){
    if (toy.id === toyToFind) {
        toy.price = toy.price + 0.05
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
    }
}