function long(sentence) {
  let words = sentence.split(" ");
  let longest = words[0];
for(let i=1;i<words.length;i++){
  if(words[i].length>longest.length){
    longest=words[i];
  }
}
return longest;
}
console.log(long("programming in javascript"));


function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = words.reverse().join(" ");

  return reversed;
}
console.log(reverseWords("hello world"));


function largeNumber(val1,val2,val3,val4,val5){
   let numbers = [val1,val2,val3,val4,val5];
   let max = Math.max(...numbers);

   return max;
}
console.log(largeNumber(10,20,30,40,50));


function letterGrade(score){
  if(score >=90) return "A";
  else if(score >= 80) return "B";
  else if(score >= 70) return "C";
  else if(score >= 60) return "D";
  else return "F";
}
console.log(letterGrade(85));




function odd (val){
  for (let i = 0; i <= val; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

odd(10)

function printOdd(n){
  let i = 1;

  while (i<= n){
    if (i % 2 !== 0){
      console.log(i);
    }
    i++;
  }
}
printOdd(10);
