Feature: Sorting
    Background:
    Given that I am on the domain "http://localhost:4000"
  
  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then there should be at least 10 main categories

    Scenario Outline: Sort By price Cheap-Expensive
    Then The products should be in ascending order according to price in "{categoryUrlPart}"

  Examples:
    | {dynamic: 'categoryUrlParts'} |


  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then there should be at least 10 main categories

  Scenario: Sort By price Expensive-Cheap
    Then The products should be in descending order according to price in "{categoryUrlPart}"
        
  Examples:
    | {dynamic: 'categoryUrlParts'} |

  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then there should be at least 10 main categories

  Scenario: Sort By compareprice Cheap-Expensive
    Then The products should be in ascending order according to compareprice in "{categoryUrlPart}"

     Examples:
    | {dynamic: 'categoryUrlParts'} |

  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then there should be at least 10 main categories

  Scenario: Sort By compareprice Expensive-Cheap
    Then The products should be in descending order according to compareprice in "{categoryUrlPart}"

     Examples:
    | {dynamic: 'categoryUrlParts'} |

  Scenario: Get a list of all categories
   When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then there should be at least 10 main categories

  Scenario: Sort By name ascending
    Then The products should be in ascending order according to name in "{categoryUrlPart}"

     Examples:
    | {dynamic: 'categoryUrlParts'} |

  Scenario: Get a list of all categories
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then there should be at least 10 main categories

  Scenario: Sort By name descending
    Then The products should be in descending order according to name in "{categoryUrlPart}"

    Examples:
    | {dynamic: 'categoryUrlParts'} |

