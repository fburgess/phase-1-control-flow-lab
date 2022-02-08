//If statment 
function scuberGreetingForFeet(number) {
  if (number <= 400){
    return 'This one is on me!';
  }
  if (number >= 2001 && number < 2500) {
    return 'I will gladly take your thirty bucks.' ;
  }
  if (number >= 2501) {
    return 'No can do.';
  }
}

//Ternary Method
function ternaryCheckCity(city) {
  const result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
  return result;
}

//Switch Method 
function switchOnCharmFromTip(tip){
  let goodTip, regTip;
  switch (tip) {
    case tip = 'generous':
      return goodTip = "Thank you so much."
    case tip = 'not as generous':
      return regTip = "Thank you."
    default: 
    return 'Bye.'
  }
}

