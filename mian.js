// Q1)
// var x=window.prompt("Enter the Nmuber");
// console.log(x);
// -------------------------------------------------
// Q2)
// var num=window.prompt("Enter The Number");
// if(num%4==0){
//     console.log("output Yes");
// }
// else{
//     console.log("outputNo");
// }
// --------------------------------------------------------------
// Q3)
// var num1=window.prompt("Enter First Number");
// var num2=window.prompt("Enter Second Number");
// if(num1>num2){
//     console.log(num1);
// }
// else {
//     console.log(num2);
// }
// ---------------------------------------------------------------------
// Q4
// var num=window.prompt("Enter The Number");
// if(num<0){
//     console.log("Output negative");
// }
// else{
//     console.log("Outputpositive");
// }
// --------------------------------------------------------
// Q5)
// var num1 = window.prompt("Enter the First Number");
// var num2 = window.prompt("Enter the Second Number");
// var num3 = window.prompt("Enter the Third Number");
// var maxNum;
// var minNum;

// if (num1 > num2 && num1 > num3) {
//     maxNum = num1;
// } else if (num2 > num1 && num2 > num3) {
//     maxNum = num2;
// } else {
//     maxNum = num3;
// }
// if (num1 < num2 && num1 < num3) {
//     minNum = num1;
// } else if (num2 < num1 && num2 < num3) {
//     minNum = num2;
// } else {
//     minNum = num3;
// }

// console.log("Max element = " + maxNum);
// console.log("Min element = " + minNum);
// -------------------------------------------
// Q6-7)
// var num1 = window.prompt("Enter the First Number");
// if (num1%2==0){
//     console.log("Even");
// }
// else{
//     console.log("OOD");
// }
// ----------------------------------------------
// Q8
// var char = window.prompt("Enter the char");
// if (char == 'a' || char == 'A' || char == 'o' || char == 'O' || char == 'i' || char == 'I' || char == 'u' || char == 'U' || char == 'e' || char == 'E'){
//     console.log("vowel");
// }
// else{
//     console.log("Consonant");
// }
// ---------------------------------------------------------------
// Q9
// var num1 = window.prompt("Enter the First Number");
// for(var i=1;i<num1;i++){
//     console.log(i);
// }
// -------------------------------------
// Q10
// var num1 = window.prompt("Enter the First Number");
// var reselt=1;
// for(var i=0;i<12;i++){
//     var result = num1 * i;
//     console.log(result);
// }
// ---------------------------------------------
// Q11
// var num1 = window.prompt("Enter the First Number");
// for (var i = 0; i < num1; i++) {
//     if(i%2==0){
//         console.log(i);
//     }
    
// }
//----------------------------------------------
// َ12
// var result = 1;
// var num1 = parseInt(window.prompt("Enter the base:"));
// var num2 = parseInt(window.prompt("Enter the exponent:"));
// for(var i=0;i<num2;i++){
//     result *= num1;
// }
// console.log(result);
//---------------------------------------------
// Q12
// var sum = 0;
// var avg=0;
// for (var i = 0; i < 5; i++) {
//     var num1 = window.prompt("Enter a number:");
//         sum += parseInt(num1);
//         avg=sum/5;
// }

// console.log("Sum: " + sum);
// console.log("avg: " + avg);
// ---------------------------------------------------
// Q13
// var num = window.prompt("Month Number:");
// if (num==1){
//     console.log("Days in Month: 31")
// }else if (num==2){
//     console.log("Days in Month: 28")
// }else if (num==3){
//     console.log("Days in Month: 30")
// }
// else if (num==4){
//     console.log("Days in Month: 30")
// }else if (num==5){
//     console.log("Days in Month: 31")
// }else if (num==6){
//     console.log("Days in Month: 30")
// }else if (num==7){
//     console.log("Days in Month: 30")
// }else if (num==8){
//     console.log("Days in Month: 30")
// }
// else if (num==9){
//     console.log("Days in Month: 30")
// }else if (num==10){
//     console.log("Days in Month: 31 ")
// }
// else if (num==11){
//     console.log("Days in Month: 30 ")
// }else if (num==12){
//     console.log("Days in Month: 31 ")
// }
// ---------------------------------------------------
// Q14
// var physics = parseInt(window.prompt("Enter Physics marks:"));
// var chemistry = parseInt(window.prompt("Enter Chemistry marks:"));
// var biology = parseInt(window.prompt("Enter Biology marks:"));
// var mathematics = parseInt(window.prompt("Enter Mathematics marks:"));
// var computer = parseInt(window.prompt("Enter Computer marks:"));
//     var totalMarks = physics + chemistry + biology + mathematics + computer;
//     var percentage = (totalMarks / 500) * 100;
//     if (percentage >= 90) {
//         console.log("Grade: A");
//     } else if (percentage >= 80) {
//         console.log("Grade: B");
//     } else if (percentage >= 70) {
//         console.log("Grade: C");
//     } else if (percentage >= 60) {
//         console.log("Grade: D");
//     } else if (percentage >= 40) {
//         console.log("Grade: E");
//     } else {
//         console.log("Grade: F");
//     }
// -------------------------------------------------------
// Q15
// var num = parseInt(window.prompt("Month Number:"));
// switch (num) {
//     case 1:
//         console.log("Days in Month: 31");
//         break;
//     case 2:
//         console.log("Days in Month: 28");
//         break;
//     case 3:
//         console.log("Days in Month: 31");
//         break;
//     case 4:
//         console.log("Days in Month: 30");
//         break;
//     case 5:
//         console.log("Days in Month: 31");
//         break;
//     case 6:
//         console.log("Days in Month: 30");
//         break;
//     default:
//         console.log("Invalid month number");
// }
// ----------------------------------------------
// Q16
// var char = window.prompt("Enter the char");
// switch (char){
//     case 'a':
//     console.log("vowel");
//     break;
//     case 'o':
//     console.log("vowel");
//     break;
//     case 'u':
//     console.log("vowel");
//     break;
//     case  'e':
//     console.log("vowel");
//     break;
//     case 'i':
//     console.log("vowel");
//     break;
//     default:
//         console.log("Consonant");    
// }  
// -----------------------------------------------------------
// Q17
// var num1 = parseFloat(window.prompt("Enter the first number:"));
// var num2 = parseFloat(window.prompt("Enter the second number:"));

// var result;

// switch (true) {
//     case num1 > num2:
//         result = num1;
//         break;
//     case num2 > num1:
//         result = num2;
//         break;
//     default:
//         console.log("Both numbers are equal.");
//         break;
// }
// console.log("Maximum number is: " + result); 
// ------------------------------------------------------
// 18
// var number = parseInt(window.prompt("Enter a number:"));

// switch (number % 2) {
//     case 0:
//         console.log(number + " is even.");
//         break;
//     case 1:
//         console.log(number + " is odd.");
//         break;
//     default:
//         console.log("Invalid input. Please enter a valid number.");
// }
// ---------------------------------------------
// Q19
// var number = parseInt(window.prompt("Enter a number:"));

// switch (true) {
//     case number<0:
//         console.log( " negative");
//         break;
//     case number>0:
//         console.log(" positve");
//         break;
//     default:
//         console.log("Invalid input. Please enter a valid number.");
// }
// -----------------------------------------
// Q20
var num1 = parseFloat(window.prompt("Enter the first number:"));
var num2 = parseFloat(window.prompt("Enter the second number:"));
var operator = window.prompt("Enter the operator (+, -, *, /):");

switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error: Division by zero.");
        }
        break;
    default:
        console.log("Invalid operator. Please enter a valid operator (+, -, *, /).");
}


