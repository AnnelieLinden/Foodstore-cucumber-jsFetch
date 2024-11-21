Feature: Pagination


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
 
 
  Scenario Outline: The site should show the right amount of products
    When I visit the endpoint "GET" "/api/c/<urlPart>?size=30&page=0&sort=topRated"
    Then There should be at most 30 products visible

Examples:
    |   urlPart             | 
    |   vegetariskt         |
    |   dryck               |
    |   barn                |
    |   apotek              |
    |   kiosk               |
    |   fryst               |
    |   skafferi            |
    |   djur                |
    |   fardigmat           |
    |   tobak               |
    |   lotter              |
    |mejeri-ost-och-agg     |
    |fisk-och-skaldjur      |
    |brod-och-kakor         |
    |hem-och-stad           |
    |blommor-och-tradgard   |
    |frukt-och-gront        |
    |kott-chark-och-fagel   |
    |glass-godis-och-snacks |
    |halsa-och-skonhet      |

    