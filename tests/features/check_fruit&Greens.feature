Feature: Check fruit and greens
  As a REST-api endpoint consumer I want to be able to get a list of all fruits and greens 
  and at least one product.

  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario: Get a list of all fruits and greens
    When I visit the endpoint "GET" "/api/c/frukt-och-gront?size=30&page=0&sort=topRated"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And there should be at least 1 product