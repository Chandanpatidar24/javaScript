//syntax of swtich case
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}


// lets check day by swtich case
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number!");
}


//Mini Quiz : make daily planner swtich cases with default 
let dailyPlanner = "Monday"; 

switch(dailyPlanner) {
  case "Monday":
    console.log('Go to Gym');
    break;

  case "Tuesday":
    console.log("Attend coding class");
    break;

  case "Wednesday":
    console.log("Work on project");
    break;

  case "Thursday":
    console.log("Meet friends");
    break;

  case "Friday":
    console.log("Watch a movie");
    break;

  case "Saturday":
    console.log("Relax at home");
    break;

  case "Sunday":
    console.log("Family time");
    break;

  default:
    console.log("Invalid day!");
}
