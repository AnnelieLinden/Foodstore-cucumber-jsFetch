Feature: pagination


  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario Outline: The site should show the right amount of products
    When I visit the endpoint "GET" "/api/c/halsa-och-skonhet?size=<amount>&page=0&sort=topRated"
    Then There should be at most <amount> products visible

Examples:
    | amount |
    |   30   |
    |   60   |
    |   90   |
    |   10   |
    |    5   |
 