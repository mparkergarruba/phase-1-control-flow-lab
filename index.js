function scuberGreetingForFeet(distanceInFeet){
  if (distanceInFeet <= 400) {
    return "This one is on me!"
  } else if (distanceInFeet <= 2000) {
    return "That will be twenty bucks."
  } else if (distanceInFeet <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (distanceInFeet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(cityName){
  let reply
  cityName === ('NYC') ? (reply = "Ok, sounds good.") : (reply = "No go.")
  return reply
}

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
    case "generous" :
      return "Thank you so much."
    case "not as generous" :
      return "Thank you."
    default : return "Bye."
  }
}