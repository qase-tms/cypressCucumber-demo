Feature: Tests with QaseID

  @QaseID(123)
  Scenario: test with single Qase ID
    Given I am on the homepage
    When I click on the first link
    Then I should see the first link

  @QaseID(124,126)
  Scenario: test with multiple Qase ID
    Given I am on the homepage
    When I click on the first link
    Then I should see the first link
