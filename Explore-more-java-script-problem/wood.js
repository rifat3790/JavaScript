/*
1. chair --> 3 cft
2. table --> 10cft
3. bed ---> 50cft


vary: Quantity
*/ 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood= chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 0, 0);

console.log('Total wood required: ',totalWood);