const day = "monday";
switch (day) {
  case "monday": //day === monday
    console.log("plan course structoure");
    console.log("go to coding meetup");
    break;
  case "tuesday": // day === tuesday
    console.log("prepare theory video");
    break;
  case "wednesday": // day === wednesday
  case "thrusday": // day === thrusday
    console.log("Write code examples");
    break;
  case "friday": // day === friday
    console.log("record videos");
  case "satuday": // day === saturday
  case "sunday": // day === sunday
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("plan course structoure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory video");
} else if (day === "wednesday" || day === "thrusday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("Not a valid day");
}
