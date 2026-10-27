let age = prompt("what's your age");
let parentWithYou = prompt("do u have parent with u (yes/no)");
let haveTicket = prompt("do u have a ticket (yes/no)");
let late = prompt("are u late (yes/no)");
if (age >= 18 && haveTicket == "yes" && late == "no") {
  alert("can enter jave a good watch");
} else if (age < 18 && parentWithYou == "yes" && haveTicket == "yes") {
  alert("u can enter jave a good watch");
} else if (late == "yes" || haveTicket == "no") {
  alert("cant go in");
} else {
  alert("u cant go in");
}
