import inquirer from "inquirer";

const lotteryNumber = Math.floor(100000 + Math.random() * 900000).toString();
let history: { number: string; bet: number; prize: number }[] = [];

//ถ้าอยากให้เลขรางวัลแสดงตั้งแต่เริ่มรันโปรแกรมให้ลบคอมเมนต์ออก
// (If you want the lottery number to be displayed as soon as the program starts, remove the comment.)
//console.log(`🎉 Start! Victory number is (Hidden): ${lotteryNumber}`);

const calculatePrize = (betNumber: string, betAmount: number): number => {
  let matchingDigits = 0;

  for (let i = 1; i <= betNumber.length; i++) {
    if (betNumber.slice(-i) === lotteryNumber.slice(-i)) {
      matchingDigits = i;
    } else {
      break;
    }
  }

  const prizeMultipliers = [0, 10, 100, 1000, 10000, 100000, 1000000];
  return betAmount * prizeMultipliers[matchingDigits];
};

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: ["Buy", "History", "Exit"],
    },
  ]);

  if (action === "Buy") {
    await buyTicket();
  } else if (action === "History") {
    viewHistory();
  } else {
    console.log("👋 Thank You! and See you again");
    process.exit();
  }
};

const buyTicket = async () => {
  const { betNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "betNumber",
      message: "Please enter a number (up to 6 digits):",
      validate: (input) => {
        if (!/^\d{1,6}$/.test(input)) {
          return "The number must contain 1 to 6 digits only!";
        }
        return true;
      },
    },
  ]);

  const completedNumber =
  betNumber.length < 6
    ? Array.from({ length: 6 - betNumber.length }, () =>
        Math.floor(Math.random() * 10)
      ).join("") + betNumber
    : betNumber;

  console.log(`Your completed number is: ${completedNumber}`);

  const { betAmount } = await inquirer.prompt([
    {
      type: "input",
      name: "betAmount",
      message: `Please enter the amount you want to bet for the number ${completedNumber}:`,
      validate: (input) => {
        const number = Number(input);
        return number > 0 ? true : "The amount must be greater than 0!";
      },
      filter: (input) => Number(input),
    },
  ]);

  const prize = calculatePrize(completedNumber, betAmount);
  history.push({ number: completedNumber, bet: betAmount, prize });

  if (prize > 0) {
    console.log(`🎉 Congratulations! You won with the number ${completedNumber} and received a prize of ${prize.toLocaleString()} baht`);
  } else {
    console.log(`😢 Sorry, you did not win with the number ${completedNumber}`);
  }

  await mainMenu();
};

const viewHistory = () => {
  console.log("\n📜 Prize History:");
  let totalPrize = 0;

  if (history.length === 0) {
    console.log("There is no prize history yet.");
  } else {
    history.forEach((entry, index) => {
      console.log(
        `${index + 1}. Purchased Number: ${entry.number}, Bet Amount: ${entry.bet} baht, Prize Amount: ${entry.prize.toLocaleString()} baht`
      );
      totalPrize += entry.prize;
    });
    console.log(`\n💰 Total Prize Amount: ${totalPrize.toLocaleString()} baht`);
  }

  console.log("\n");
  mainMenu();
};

mainMenu();
