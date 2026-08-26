# Login Test Cases

| Test Case ID | Test Plan ID | Test Scenario | Test Data | Test Steps | Expected Result |
| ------------ | ------------ | ------------- | --------- | ---------- | --------------- |
| TC-001 | LP-001 | Login with valid credentials | Valid username and password | 1. Open the Login page.<br>2. Enter a valid username.<br>3. Enter a valid password.<br>4. Click Login.<br>5. Verify the result. | User is logged in successfully and the dashboard is displayed. |
| TC-002 | LP-002 | Login with invalid credentials | Invalid username and password | 1. Open the Login page.<br>2. Enter invalid credentials.<br>3. Click Login.<br>4. Verify the result. | Login fails and an appropriate error message is displayed. |
| TC-003 | LP-003 | Logout after successful login | Valid username and password | 1. Open the Login page.<br>2. Enter valid credentials.<br>3. Click Login.<br>4. Open the user menu.<br>5. Click Logout.<br>6. Verify the result. | User is logged out successfully and returned to the Login page. |

Test Plan Scenarios: 3  
Test Cases Created: 3  
Missing Test Cases: 0
