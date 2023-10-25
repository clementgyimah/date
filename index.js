
// ---------------------------- START ----------------------------------------
const isToday = (dateProp) => {
  const checkingDate = new Date(dateProp).toDateString();
  const currentDate = new Date().toDateString();

  console.log("The checking date: ", checkingDate);
  console.log("The current date: ", currentDate);

  const message = `Checking date is${
    checkingDate === currentDate ? " " : " NOT "
  }today`;

  return message;
};

const theCheckingDate1 = 1698015594228;
console.log(isToday(theCheckingDate1));

console.log("\n\n");

const theCheckingDate2 = 1698054864848;
console.log(isToday(theCheckingDate2));

console.log("\n\n\n");

// ---------------------------- END ----------------------------------------

// ---------------------------- START --------------------------------------

const isThisMonth = (dateProp) => {
  const checkingDate = new Date(dateProp).toDateString();
  console.log(checkingDate);

  const checkingMonth = new Date(dateProp).getMonth();
  const currentMonth = new Date().getMonth();

  const checkingYear = new Date(dateProp).getFullYear();
  const currentYear = new Date().getFullYear();

  let isCurrentMonth = false;
  if (checkingYear === currentYear) {
    checkingMonth === currentMonth && (isCurrentMonth = true);
  }

  const message = `Checking date is${
    isCurrentMonth ? " " : " NOT "
  }part of current month`;

  return message;
};

const theCheckingMonth1 = 1695470874038;
console.log(isThisMonth(theCheckingMonth1));

console.log("\n\n");

const theCheckingMonth2 = 1698062915297;
console.log(isThisMonth(theCheckingMonth2));

console.log("\n\n");

const theCheckingMonth3 = 1700741343749;
console.log(isThisMonth(theCheckingMonth3));

console.log("\n\n\n");

// ---------------------------- END ----------------------------------------

// ---------------------------- START --------------------------------------

const isThisWeek = (dateProp) => {
  const checkingFullDate = new Date(dateProp);
  const currentFullDate = new Date();
  const saturday = 6;
  let isCurrentWeek = false;

  console.log("Checking Date is: ", checkingFullDate.toDateString());

  const saturdayCheckEnd = 8;

  // look for nearest saturday which is the start of the week
  for (let a = 1; a <= saturdayCheckEnd; a++) {
    if (currentFullDate.getDay() === saturday) break;
    currentFullDate.setDate(currentFullDate.getDate() - 1);
  }

  console.log("The first start of week: ", currentFullDate.toDateString());

  const weekDates = [currentFullDate.toDateString()];

  const weekLength = 6;

  for (let b = 1; b <= weekLength; b++) {
    currentFullDate.setDate(currentFullDate.getDate() + 1);
    weekDates.push(currentFullDate.toDateString());
  }

  console.log("The week dates are: ", weekDates);

  if (weekDates.includes(checkingFullDate.toDateString())) {
    isCurrentWeek = true;
  }

  const message = `Checking date is${
    isCurrentWeek ? " " : " NOT "
  }part of current week`;

  return message;
};

const theCheckingDate3 = 1697801994526;
console.log(isThisWeek(theCheckingDate3));

console.log("\n\n");

const theCheckingDate4 = 1697888419481;
console.log(isThisWeek(theCheckingDate4));

console.log("\n\n");

const theCheckingDate5 = 1698061360484;
console.log(isThisWeek(theCheckingDate5));

console.log("\n\n");

const theCheckingDate6 = 1698493493255;
console.log(isThisWeek(theCheckingDate6));

console.log("\n\n\n");

// ---------------------------- END --------------------------------------
