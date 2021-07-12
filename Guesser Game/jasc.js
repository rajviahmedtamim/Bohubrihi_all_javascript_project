 let low = 1;
 let high = 10;
 var numb = 0;
 for (var i = 1; i <= 3; i++) {
     let guessNumber = parseInt(prompt("Enter a number from 1 to 10: "));
     let correcr_ans = Math.floor(Math.random() * (low, high)) + 1;

     if (guessNumber < correcr_ans) {
         alert('Correct answer is greater!');
         numb++;
     } else if (guessNumber > correcr_ans) {
         alert('Correct answer is smaller!');
         numb++;
     } else {
         alert('You Win');
         break;
     }
 }
 if (numb == 3) {
     alert("You Lose!");
 }