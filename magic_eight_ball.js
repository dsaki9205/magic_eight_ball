//creating username variable
var userName = "";
//creating ternary functiong for greeting
userName ? console.log(`Hello ${userName}!.`): console.log("Hello!");
//creating userQuestion variable
let userQuestion = 'When will the COVID will go away?';
console.log(`${userName} ${userQuestion}`);
const randomNumber = Math.floor(Math.random()* 8);
let eightBall = '';
//Using switch method to get a retun for eight ball
switch(randomNumber){
case 0:
eightBall = 'It is certain';
break;
case 1:
eightBall = 'It is decidedly so';
break;
case 2:
eightBall = 'Replay hazy try again';
break;
case 3:
eightBall = 'Cannot predict now';
break;
case 4:
eightBall = 'Do not count on it';
break;
case 5:
eightBall = 'My sources say no';
break;
case 6:
eightBall = 'Outlook not so good';
break;
case 7:
eightBall = 'signs points to yes';
break;
}
console.log(eightBall);
