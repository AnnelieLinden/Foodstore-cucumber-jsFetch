Feature: Sort by Price

    
    Background:
    Given that I am on the domain "http://localhost:4000"

    Scenario Outline: Sort By price Cheap-Expensive
    When I visit the endpoint "GET" "/api/c/{categoryUrlPart}?size=30&page=0&sort=price-asc"
    Then The products should be in ascending order according to price
  
  Examples:
    | {dynamic: 'categoryUrlParts'} |

    Scenario Outline: Sort By price Expensive-Cheap
    When I visit the endpoint "GET" "/api/c/{categoryUrlPart}?size=30&page=0&sort=price-desc"
    Then The products should be in descending order according to price
        
  Examples:
    | {dynamic: 'categoryUrlParts'} |