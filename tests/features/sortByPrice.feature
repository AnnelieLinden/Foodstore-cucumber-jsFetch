Feature: Sort by Price


  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And there should be at least 10 main categories

  Scenario Outline: Sort By price Cheap-Expensive
    When I visit the endpoint "GET" "/api/c/{categoryUrlPart}?size=30&page=0&sort=price-asc"
    Then The products should be in ascending order according to price

    Examples:
      | {dynamic: 'categoryUrlParts'} |

  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And there should be at least 10 main categories

  Scenario Outline: Sort By price Expensive-Cheap
    When I visit the endpoint "GET" "/api/c/{categoryUrlPart}?size=30&page=0&sort=price-desc"
    Then The products should be in descending order according to price

    Examples:
      | {dynamic: 'categoryUrlParts'} |