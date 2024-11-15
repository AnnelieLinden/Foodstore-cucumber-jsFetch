
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Then('there should be at least {float} product', async function(a){
  expect(this.json.results.length).to.be.at.least(a);
});