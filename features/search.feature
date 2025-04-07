Feature: Shopping cart management

  Scenario: Add and remove product from cart
    Given the user is on the homepage
    And the user selects the "iPhone 16 Pro Max" product
    And the user adds the product to the cart
    And the user opens the cart
    Then the cart should contain "iPhone 16 Pro Max" item
    
    And the user removes the "iPhone 16 Pro Max" product from the cart