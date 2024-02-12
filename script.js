let item = prompt("Enter the name that the item");
let basePrice = parseFloat(prompt(" What is the base price of the item?"));
console.log(basePrice);
let blackFridayDescount = 0;
let searchEnginePrice = 0;
let webReducePrice = 0;
// BLACK FRIDAY
let blackFriday = prompt("Is today Black Friday?").toLowerCase();
if( blackFriday === "yes") {
    alert("Since it's Black Friday, we will reduce the price by 25%.")
  blackFridayDescount =  basePrice * 0.25;
    
    // basePrice * 0.75;
  
    console.log(`The black friday discount is ${blackFridayDescount.toFixed(1)}`)
}else if( blackFriday === "no"){
    // alert("It's not Black Friday, so the price didn't change for that. ")
    console.log("It's not Black Friday, so the price didn't change for that. ")
} else {
    alert("Please enter a valid value")
    console.log("Please enter a valid value")
}

// SEARCH ENGINE.

let searchEngine = prompt("Did the purchaser find the product through a search engine?").toLowerCase();
if(searchEngine === "yes") {
    searchEnginePrice = basePrice * 0.01;
    alert("We will increase the price by 1% to pay the search engine. ")
    console.log(`The increase price for search Engine is ${searchEnginePrice}`)
}else if(searchEngine === "no"){
    console.log("The customer didn't use a search engine, so the price didn't change for that.")
} else{ 
    alert("Please enter a valid value")
    console.log("Please enter a valid value")
}

// comparison-shopping site

let comparisonWeb = prompt("Did the purchaser visit a comparison-shopping site?");
if(comparisonWeb === "yes") {
    alert("Since the customer visited a comparison-shopping site, we will reduce the price by 10%. ")
    webReducePrice = basePrice * 0.10;
    console.log(`The comparison-shopping site discount is ${webReducePrice}`)
}else if(comparisonWeb === "no"){
    console.log("The customer didn't visit a comparison-shopping site, so the price didn't change for that. ")
} else{
    alert("Please enter a valid value") 
    // console.log("Please enter a valid value")

}
let finalPrice = basePrice - blackFridayDescount + searchEnginePrice + webReducePrice;

let finalMessage = `The base price for the ${item} is ${basePrice}. Since it's Black Friday, we will reduce the price by 25%. We will increase the price by 1% to pay the search engine. Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is ${finalPrice}.`
console.log(finalMessage);





if(blackFriday ==="yes" && searchEngine === "yes" && comparisonWeb === "yes"){
    document.getElementById("message").innerText = finalMessage;
  console.log(finalMessage);
}  else if (blackFriday === "yes" && searchEngine === "yes") {
    document.getElementById("message1").innerText =  `The final price is ${(basePrice + searchEnginePrice) - blackFridayDescount}`
    console.log(`The final price is ${(basePrice + searchEnginePrice) - blackFridayDescount}`);
} else if (blackFriday === "yes" && comparisonWeb === "yes") {
    document.getElementById("message2").innerText = `The final price is ${(basePrice - blackFridayDescount) - webReducePrice}`;
    console.log(`The final price is ${(basePrice - blackFridayDescount) - webReducePrice}`);
} else if (searchEngine === "yes" && comparisonWeb === "yes") {
    document.getElementById("message3").innerText = `The final price is ${(basePrice - blackFridayDescount) - webReducePrice}`;
    console.log(`The final price is ${(basePrice - blackFridayDescount) - webReducePrice}`);
}
//  else if (blackFriday === "yes") {
//     document.getElementById("message4").innerText = finalMessage;
//     console.log(`The final price is ${basePrice - blackFridayDescount}`);
// } else if (searchEngine === "yes") {
//     document.getElementById("message5").innerText = finalMessage;
//     console.log(`The final price is ${(basePrice + searchEnginePrice)}`);
// } else if (comparisonWeb === "yes") {
//     document.getElementById("message6").innerText = finalMessage;
//     console.log(`The final price is ${(basePrice - webReducePrice)  }`);
// 
 else {
    document.getElementById("message7").innerText = `Your final price is ${basePrice}`;
    console.log(`Your final price is ${basePrice}`)
   
}
// if(blackFriday === "yes" && searchEngine ==="yes")





