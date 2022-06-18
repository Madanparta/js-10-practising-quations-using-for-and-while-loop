// FOR AND WHILE LOOP USING SOME QUATIONS..


let a = process.argv[2];   //Input Taking..

//1.NATURAL NUMBERS..
// ANSWER..
// for(let i = 1; i<=a; i++){
//     console.log(i);
// }

// >>USING WHILE LOOP.

// let i = 1;
// while(i<=a){
//     console.log(i);
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//2.PRINT THE EVEN NUMBER INCLUDING 'N'.
// ANSWER..
// for(let i = 1; i<=a; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// >>USING WHILE LOOP.
// let i = 1;
// while(i<=a){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//3.PRINT REVERSE NUMBERS.
// ANSWER.
// for(let i = a; i>=0; i--){
//     console.log(i);
// }

// >>USING WHILE LOOP.
// let i = a;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//4.FACTORIAL NUMBERS.
// ANSWER.
// let p = 1;
// for(let i = 1; i <= a; i++){
//     p*=i;
//     console.log(p);
// }

// >>USING WHILE LOOP.
// let p = 1;
// let i = 1;
// while(i<=a){
//     p*=i;
//     console.log(p);
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//5.PRINT ALL DIGITS OF THE NUMBERS.
// ANSWER.
// for(let i = a; i>0;  i/=10){
//     console.log(Math.floor(i%10));
// }

// >>USING WHILE LOOP.
// let i = a;
// while(i>0){
//     console.log(Math.floor(i%10));
//     i/=10;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//6.PRINT THE FIBONACCI SERIES NUMBERS.
// ANSWER.
// let p = 1;
// let c = 1;
// let b = 1;
// for(let i = 1; i<=a; i++){
//     console.log(c);
//     p+=c;
//     c=b;
//     b=p;
// }

// >>USING WHILE LOOP.
// let p = 1;
// let c = 1;
// let b = 1;
// let i = 1;
// while(i<=a){
//     console.log(c);
//     p+=c;
//     c=b;
//     c=p;
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//7.CHECK THE NUMBER PRIME OR NOT.
// ANSWER.
// for(let i = a; i>0; i++){
//     for(let j = 2; j<i; j++){
//         if(i%j==0){
//             break;
//         }
//     }
//     if(j==i){
//         console.log("PRIME NUMBER");
//     }else(
//         console.log("NOT A PRIME NUMBER.")
//     )
// }

// >>USING WHILE LOOP.
// let check = true
// let i = 2;
// while(i<a){
//     if(i%2==0){
//         check = false
//     }
//     i++;
// }
// if(check == true){
//     console.log("prime");
// }else{
//     console.log("not a prime");
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//8. IF THE NUMBER/3 PRINT 'HELLO', IF NUMBER/5 PRINT 'WORLD'. IF NUMBER/15 PRINT 'HELLOWORLD'.
// ANSWER.
// for(let i = a; (i>0 && i<100); i++){
//     if(a%3==0){
//         console.log("Hello");
//         break;
//     }
//     if(a%5==0){
//         console.log("World");
//         break;
//     }
//     if(a%15==0){
//         console.log("HelloWorld");
//         break;
//     }
// }

// >>USING WHILE LOOP.
// let i = a;
// while(i>0 && i<=100){
//     if(a%3==0){
//         console.log("Hello");
//     }
//     if(a%5==0){
//         console.log("World");
//         break;
//     }
//     if(a%15==0){
//         console.log("HelloWorld");
//         break;
//     }
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//9.CHECK PALINDROME OR NOT
// ANSWER.
// let len = a.length;
// for(let i = 0; i < len/2; i++){
//     if(a[i] !== a[len - 1 - i]){
//         console.log("it is not a palindrome.")
//     }else(
//         console.log("palindrome.")
//     )
// }

// >>USING WHILE LOOP.
// let i = 0;
// let len = a.length;
// while(i<(len/2)){
//     if(a[i] !== a[len - 1 - i]){
//         console.log("it is not a palindrome.")
//     }else(
//         console.log("palindrome.")
//     )
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//10.PRINT THE PERFECT NUMBERS.
// ANSWER.
// let sum = 0;
// for(let i =1 ; i<a/2; i++){
//     if(a%i==0){
//         sum = sum +i;
//     }
// }
// if(sum == a){
//     console.log("perfect number.")
// }
// else{
//     console.log("not perfect number.")
// }

// >>USING WHILE LOOP.
// let sum = 0;
// let i = 1;
// while(i < a/2){
//     if(a%i==0){
//         sum = sum +i;
//     }
//     i++;
// }
// if(sum == a){
//     console.log("perfect number.")
// }
// else{
//     console.log("not perfect number.")
// }
