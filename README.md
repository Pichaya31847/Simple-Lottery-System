## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx run dev
   ```

## How To Play
1. When the program starts, there will be two commands for you to choose from.
2. Choose the buy option to enter a 6-digit number you want to bet on, and enter the amount of money you want to bet.
3. The program will check if the number you entered matches the lottery number and display the prize amount you won.
4. Choose the history option to view the prize history and the total amount of money you have won.

**Ticket Payout Calculation:**

- 1 digit = 10 times of bet example customer buy number 6 for 100 baht and the result is 123456 then the prize is 1000 baht
- 2 digit = 100 times of bet example customer buy number 56 for 100 baht and the result is 123456 then the prize is 10000 baht
- 3 digit = 1000 times of bet example customer buy number 456 for 100 baht and the result is 123456 then the prize is 100000 baht
- 4 digit = 10000 times of bet example customer buy number 3456 for 100 baht and the result is 123456 then the prize is 1000000 baht
- 5 digit = 100000 times of bet example customer buy number 23456 for 100 baht and the result is 123456 then the prize is 10000000 baht
- 6 digit = 1000000 times of bet example customer buy number 123456 for 100 baht and the result is 123456 then the prize is 100000000 baht

## Assumptions Made During Development

| **Name**                          | **Description**                                                                                                                                                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| **Lottery Number (6 digits)**                       | The system will randomly generate a 6-digit lottery number within the range of 000000 to 999999. |
| **Bet Amount**                       | The system will prompt the user to enter the bet amount and ensure that it is a positive value. |
| **Prize Calculation**                       | The prize will be calculated based on the number of digits that match the lottery number (from 1 to 6 digits). |
| **Winning History**                       | The system will store the user's winning history. |