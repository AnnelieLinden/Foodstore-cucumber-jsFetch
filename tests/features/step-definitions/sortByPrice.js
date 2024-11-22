import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

function getAllCategories(children, categoryUrls = []) {
  for (let child of children) {
    categoryUrls.push(child.url);

    if (child.children.length === 0) {
      continue;
    }
    getAllCategories(child.children, categoryUrls);

  }

  return categoryUrls;
}

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

Then(
  "The products should be in ascending order according to price",
  async function () {
    /*  let json = pm.response.json();
 
     let categories = getAllCategories(json.children);
 
     for (let i = 0; i < categories.length; i++) {
       let json = response.json();
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
       }
 
       let allPricesSorted = JSON.stringify(allPrices.sort((a, b) => a - b));
       let isOrdered = JSON.stringify(allPrices) === allPricesSorted;
       let orderedProducts = JSON.stringify(
         ordinaryprices.sort((a, b) => a - b)
       );
       let ordinaryOrdered = JSON.stringify(ordinaryprices) === orderedProducts;
 
       expect(isOrdered).to.be.true;
     }*/
  }
);

Then("The products should be in descending order according to price", async function () {
  let json = await getData("http://localhost:4000/api/leftMenu/categorytree")
  let categories = getAllCategories(json.children);

  for (let i = 0; i < categories.length; i++) {
    let json2 = await getData(`http://localhost:4000/api/c/${categories[i]}?size=30&page=0&sort=price-desc`)
    const ordinaryprices = [];
    const allPrices = [];
    console.log(json2.results.length);

    for (let i = 0; i < json2.results.length; i++) {
      var ordinaryPrice = json2.results[i].priceValue;
      var promotion = json2.results[i].potentialPromotions[0];
      ordinaryprices.push(ordinaryPrice);

      if (promotion !== undefined) {
        var promotionValue = promotion.price.value;
        allPrices.push(promotionValue);
      } else {
        allPrices.push(ordinaryPrice);
      }
    }

    let allPricesSorted = JSON.stringify(
      allPrices.sort((a, b) => a - b).reverse()
    );
    let isOrdered = JSON.stringify(allPrices) === allPricesSorted;
    //let orderedProducts = JSON.stringify(
    /*   ordinaryprices.sort((a, b) => a - b).reverse()
    ); */
    //let ordinaryOrdered = JSON.stringify(ordinaryprices) === orderedProducts;

    expect(isOrdered).to.be.true;
  }
}
);
