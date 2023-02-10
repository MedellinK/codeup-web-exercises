 "use strict";



let userFavColor = prompt(`What is your favorite color?`);

console.log(`Great, I love ${userFavColor} too!!`);

let littleMermaid = prompt(`How many days did you rent the movie "The little mermaid"?`);
let brotherBear = prompt(`How many days did you rent "Brother Bear"?`);
let hercules = prompt(`How many days did you rent the movie "Hercules"?`);
let pricePerDay = 3

let total = (littleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay);
alert(`Your total will be $${total}`);

let googlePay = prompt(`How much do you make hourly at Google?`);
let googleHours = prompt(`How many hours did you work at Google?`);
let amazonPay = prompt(`How much do you make hourly at Amazon?`);
let amazonHours = prompt(`How many hours did you work at Amazon`);
let facebookPay = prompt(`How much do you make hourly at Facebook?`);
let facebookHours = prompt(`How many hours did you work at Facebook`);

let totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);

alert(`Your payment for this week will be $${totalPay}`);

let conflicting = confirm(`Pres "OK" if this class does NOT interfere with your current schedule `);
let classCap = parseInt(prompt(`What is the class capacity?`));
let classSize = parseInt(prompt(`How many students are in the class currently?`));

let canEnroll = conflicting && classCap > classSize;

 if(canEnroll){
     alert(`You can enroll!`)
 } else {
     alert(`No you cannot enroll.`)
 }


let cartSize = confirm(`Press "OK" if you are buying more than 2 items`);
 let premium = confirm(`Press "OK" if you are one of our valued Premium Members?`);
let offer = confirm(`Press "OK" if the offer is still available`) ;

let canOffer = ((premium || cartSize) && offer);

 if (canOffer){
     alert(`Discount Applied!`)
 } else {
     alert(`Sorry! The offer is not available!`)
 }
