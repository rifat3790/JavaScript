const phones = [
    {
        name: 'Samsung',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'silver'
    },
    {
        name: 'Walton',
        camera: 8,
        storage: '16gb',
        price: 26000,
        color: 'silver'
    },
    {
        name: 'iphone',
        camera: 10,
        storage: '128gb',
        price: 136000,
        color: 'Gold'
    },

    {
        name: 'xaomi',
        camera: 48,
        storage: '54gb',
        price: 14000,
        color: 'purpal'
    },

    {
        name: 'oppo',
        camera: 64,
        storage: '32gb',
        price: 36167,
        color: 'Black'
    },

    {
        name: 'Nokia',
        camera: 10,
        storage: '32gb',
        price: 36000,
        color: 'silver'
    }
]

function cheapsetPhone(phones){
    let cheapset = phones[0];
    for(let i=0;i<phones.length;i++){
        const phone = phones[i];
        if(phone.price< cheapset.price){
            cheapset = phone;
        }
    }
    return cheapset;
}

const mySelestion = cheapsetPhone(phones);

console.log(mySelestion);