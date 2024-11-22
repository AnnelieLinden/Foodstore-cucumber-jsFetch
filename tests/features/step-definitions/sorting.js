import { Then } from "@cucumber/cucumber";
import { expect } from "chai";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

Then("The products should be in ascending order according to price in {string}", async function (categoryUrlPart) {
  const json = await getData(`http://localhost:4000/api/c/${categoryUrlPart}?size=30&page=0&sort=price-desc`)
  const ordinaryprices = [];
  const allPrices = []; 

  for (let i = 0; i < json.results.length; i++) {
    var ordinaryPrice = json.results[i].priceValue;
    var promotion = json.results[i].potentialPromotions[0];
    ordinaryprices.push(ordinaryPrice);
    if (promotion !== undefined) {
      var promotionValue = promotion.price.value;
        allPrices.push(promotionValue);
      } else {
        allPrices.push(ordinaryPrice);
      }
      let allPricesSorted = JSON.stringify(
        allPrices.sort((a, b) => a - b));
      let isOrdered = JSON.stringify(allPrices) === allPricesSorted;  
      expect(isOrdered).to.be.true;
    }
  }
);

Then("The products should be in descending order according to price in {string}",  async function (categoryUrlPart) {
  const json = await getData(`http://localhost:4000/api/c/${categoryUrlPart}?size=30&page=0&sort=price-desc`)
  const ordinaryprices = [];
  const allPrices = []; 

    for (let i = 0; i < json.results.length; i++) {
      var ordinaryPrice = json.results[i].priceValue;
      var promotion = json.results[i].potentialPromotions[0];
      ordinaryprices.push(ordinaryPrice);
      if (promotion !== undefined) {
        var promotionValue = promotion.price.value;
        allPrices.push(promotionValue);
      } else {
        allPrices.push(ordinaryPrice);
      }
      let allPricesSorted = JSON.stringify(
        allPrices.sort((a, b) => a - b).reverse());
      let isOrdered = JSON.stringify(allPrices) === allPricesSorted;  
      expect(isOrdered).to.be.true;
    }
  }
);

Then("The products should be in ascending order according to compareprice in {string}",  async function (categoryUrlPart) {
  const json = await getData(`http://localhost:4000/api/c/${categoryUrlPart}?size=30&page=0&sort=compareprice-asc`)
  const ordinaryprices = [];
  const allPrices = []; 

    for (let i = 0; i < json.results.length; i++) {
      var ordinaryPrice = (json.results[i].comparePrice.slice(0,5));
      var promotion = (json.results[i].potentialPromotions[0]);
      const comparePrice = parseFloat(ordinaryprices)
      ordinaryprices.push(comparePrice);
      ordinaryprices.push(ordinaryPrice);
      if (promotion !== undefined) {
        var promotionValue = promotion.price.value;
        allPrices.push(promotionValue);
      } else {
        allPrices.push(ordinaryPrice);
      }
      let allPricesSorted = JSON.stringify(
        allPrices.sort((a, b) => a - b));
      let isOrdered = JSON.stringify(allPrices) === allPricesSorted;  
      expect(isOrdered).to.be.true;
  }
});

Then("The products should be in descending order according to compareprice in {string}",  async function (categoryUrlPart) {
  const json = await getData(`http://localhost:4000/api/c/${categoryUrlPart}?size=30&page=0&sort=compareprice-desc`)
  const ordinaryprices = [];
  const allPrices = []; 

    for (let i = 0; i < json.results.length; i++) {
      var ordinaryPrice = (json.results[i].comparePrice.slice(0,5));
      var promotion = (json.results[i].potentialPromotions[0]);
      const comparePrice = parseFloat(ordinaryprices)
      ordinaryprices.push(comparePrice);
      ordinaryprices.push(ordinaryPrice);
      if (promotion !== undefined) {
        var promotionValue = promotion.price.value;
        allPrices.push(promotionValue);
      } else {
        allPrices.push(ordinaryPrice);
      }
      let allPricesSorted = JSON.stringify(
        allPrices.sort((a, b) => a - b).reverse());
      let isOrdered = JSON.stringify(allPrices) === allPricesSorted;  
      expect(isOrdered).to.be.true;
  }
});

 Then("The products should be in ascending order according to name in {string}",  async function (categoryUrlPart) {
  const json = await getData(`http://localhost:4000/api/c/${categoryUrlPart}?size=30&page=0&sort=name-asc`)
  let original = json.results.map(item => item.name.toLowerCase());
  let ourSort = [...original].toSorted((a, b) => a - b);
  let difference = []
  let isOrdered = JSON.stringify(ourSort) === JSON.stringify(original);
  for(let j=0; j<original.length; j++){
    if (ourSort[j] !== original[j]) {
      difference.push(j, " orginalet: " + original[j], " vår sortering: "+ ourSort[j]);
    }
  }
  if(!isOrdered){
    console.log("endpoint: ", categoryUrlPart)
    console.log(difference)
  }
  expect(isOrdered).to.be.true;
});

Then("The products should be in descending order according to name in {string}",  async function (categoryUrlPart) {
  const json = await getData(`http://localhost:4000/api/c/${categoryUrlPart}?size=30&page=0&sort=name-desc`)
        let original = json.results.map(item => item.name.toLowerCase());
        let ourSort = [...original].toSorted((a, b) => a - b).reverse()
        let isOrdered = JSON.stringify(ourSort) === JSON.stringify(original);
        let difference = []
       
        for(let j=0; j<original.length; j++){
          if (ourSort[j] !== original[j]) {
            difference.push(j, " orginalet: " + original[j], " vår sortering: "+ ourSort[j]);
          }
        }
        if(!isOrdered){
          console.log("endpoint: ", categoryUrlPart)
          console.log(difference)
        }
        expect(isOrdered).to.be.true;

}); 