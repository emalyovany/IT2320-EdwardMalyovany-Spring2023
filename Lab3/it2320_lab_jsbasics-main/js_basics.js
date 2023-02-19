/* ============ */
/* Examples     */
/* ============ */

function addExample() {
  alert(5 + 7);
}

function multiplyExample() {
  alert(5 * 7);
}

function makeVariables() {
  var spam = "Spam in a can";
  alert(spam);
}

function simpleIf() {
  var temp = 72;

  if (temp > 85) {
    alert("It's hot outside!");
  } else if (temp > 65) {
    alert("It's warm outside!");
  } else if (temp > 50) {
    alert("It's cool outside!");
  } else {
    alert("It's cold outside!");
  }
}

function switchStatements() {
  var temp = 72;

  switch (temp) {
    case 90:
      alert("It's hot outside!");
      break;
    case 72:
      alert("It's warm outside!");
      break;
    default:
      alert("It's some temperature outside!");
  }
}

function threeLoops() {
  var count = 1;

  while (count <= 10) {
    if (count == 5) {
      alert("Hello! First time.");
    }
    count = count + 1;
  }

  count = 1;

  do {
    if (count == 5) {
      alert("Hello! Second time.");
    }
    count = count + 1;
  } while (count <= 10);

  for (var count = 1; count <= 10; count++) {
    if (count == 5) {
      alert("Hello! Third time.");
    }
  }
}

/* ============ */
/* Lab Problems */
/* ============ */

// Problem #1
function problem01() {
  var result = 5 - 7;
  alert("The result is: " + result);
}

// Problem #2
function problem02() {
  var result = 7 / 5;
  alert("The result is: " + result);
}

// Problem #3
function problem03() {
  var eggs = 42;
  alert("The value of eggs is: " + eggs);
}

// Problem #4
function problem04() {
  var grade = 97;
  if (grade > 90) {
    alert("Letter grade is A");
  } else if (grade > 80) {
    alert("Letter grade is B");
  } else if (grade > 70) {
    alert("Letter grade is C");
  } else if (grade > 60) {
    alert("Letter grade is D");
  } else {
    alert("Letter grade is F");
  }
}

// Problem #5
function problem05() {
  for (var i = 0; i < 100; i++) {
    if (i === 42) {
      alert("42!");
      break;
    }
  }
}
