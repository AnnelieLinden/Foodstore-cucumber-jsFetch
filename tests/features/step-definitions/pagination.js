import {Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Then('There should be at most {int} products visible', async function (amount) {
  expect(this.json.results.length).to.be.at.most(amount)
});
