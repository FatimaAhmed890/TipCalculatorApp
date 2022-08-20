/*🌟 App: Tip Calculator

These are the 3 functions you must use 👇

======================================

calculateBill()
increasePeople()
decreasePeople()

Functions are hardcoded in HTML so their names cannot be changed.

Div id's that are needed to be accessed 👇

======================================

#1 👉 'billTotalInput' = user input for total bill
#2 👉 'tipInput' = user input for tip
#3 👉 'numberOfPeople = current number of people that you are splitting the bill with
#4 👉 'perPersonTotal' = total dollar value owed per person
*/

//Get global access to all inputs/divs here 😏
//bill input, tip input, number of people div and per person total div
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

//Get number of people from number of people div and typecast it to number because you get inputs in strings 😎
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

//** Calculate total bill per person **
const calculateBill=()=>{
    //get bill input from user and convert it to string
    const bill = Number(billInput.value);

    //get tip from user and convert it to percentage
    const tipPercent = Number(tipInput.value)/100;

    //get total tip amount
    const tipAmount = bill*tipPercent;

    //get the total bill amount
    const total= bill + tipAmount;

    //calculate the per person total
    const perPersonTotal = total/numberOfPeople;
    
    //update it on the DOM and show it to the user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

//** Splits the bill between more people **
const increasePeople=()=>{
    //increment the amount of the people
    numberOfPeople ++;

    //update the DOM with the new number of people
    numberOfPeople.innerText = numberOfPeople;

    //calculate the bill based on the new number of people
    calculateBill();
};

//** Splits bill between fewer people
const decreasePeople=()=>{
    //guard the clause
    //if amount is 1 or less simply return
    //(a.k.a. you can't decrease people to 0 or less)
    if(numberOfPeople <= 1){
        return;
    }

    //decrement the amount of people
    numberOfPeople --;

    //update the DOM with the new number of people
    numberOfPeople.innerText = numberOfPeople;

    //calculate the bill based on the new number of people
    calculateBill();
};