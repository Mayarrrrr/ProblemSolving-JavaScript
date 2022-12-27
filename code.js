// <<<< Videos PS with JS Challenge 100 >>>>

{/*
function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
 }

console.log(GetSum(2,5)); */}

{/*
function evenOrOdd (num){
    if (num%2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
    // return num%2 == 0 ? "Even" : "odd";
}

console.log(evenOrOdd(100)); */}

{/*
function positiveNumbers (arr){
    let sum=0;
    for(i =0 ; i < arr.length ; i++){
        if(arr[i] > 0 ){
              sum+=arr[i];  
        }
    }
    return sum;
    //return [...arr].reduce((acc,current)=> acc + current , 0);
}
console.log(positiveNumbers([1,-4,7,12]));*/}

{/* 
//Q: sum array Without first and last index
function sumArrayWithout(array){
    if (array == null) return 0;        //check 2n al array msh empty
    return array
    .sort((a,b)=> a-b)      //sort mn so8yr ll kber
    .slice(1, -1)           // b2ol 2os awl w a5r index b3d al sort
    .reduce((acc, current)=> acc + current , 0 );        //3shan a-sum al array w 2deto al initial value al hygm3 3leh al hwa al zero
}
console.log(sumArrayWithout([1,1,2,3,4,5,6,7,8,9,9]));*/}

{/*
//Q: repeat the input string accord to the input number 
function repeatStr(num,str){
    let res="";
    for (i=0; i < num ; i++){
        res+=str;
    }
    return res;
    //return str.repeat(num);
}
console.log(repeatStr(6, "I"));*/}

{/* 
//Q: convert number to reversed array of digits
function digitize(num){
    return num
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse();
}
console.log(digitize(0));*/}

{/*
//Q: function to count sheeps (true means present sheep)
function countSheep(array){
    let count=0;
    if (array == null) return 0;
    for(i=0; i < array.length ; i++){             //mmkn kona bdl al loop n3ml map fun 
        if (array[i] === true){                  // array.map((m) => { if (m === true) count++; });
            count++;
        }
    }
    return count;
}
console.log(countSheep([true,true,true,false,true]));*/}

{/*function getOpposite(num){
    return num * -1;
}
console.log(getOpposite(15));*/}

{/*function negativity(num){
    return (num <= 0 ) ? num : num*-1 ;  
}
console.log(negativity(-10));*/}

{/*
//Q: Find needle word in the array
function findNeedle(array){
    for(i=0; array.length; i++){
        if (array[i] === "needle")
        return "found the needle at position " + i;
    }
    //mmkn kona nst5dm built in function b al tare2a dii 3la tol
    // return "found the needle at position " + array.indexOf('needle');
}
console.log(findNeedle(['hey','you','I am', 'needle','zeft']));*/}

{/*
//Q: Count positive numbers and sum negative numbers
function countPosSumNeg(array){
    let count=0;
    let sum=0;
    for(i=0; i < array.length ; i++){
        if(array[i] > 0){
            count++;
        }
        else if ( array[i] < 0){
            sum+=array[i];
        }
    }
    return [count,sum];
}
console.log(countPosSumNeg([-5,-4,-3,-2,-1,0,1,2,3,4,5]));*/}
// mmkn yb2a leha tare2a tanya 
{/*function countPosSumNeg(array){
    let positiveArray = array.filter((x) => x > 0).length;      //h2olo hat al length 3shan na 3ayza al count bs
    let sumNegative = array.filter((x) => x < 0).reduce((acc,current)=> acc + current ,0); //y-filter b3den ygm3
    return [positiveArray, sumNegative];
}
console.log(countPosSumNeg([-5,-4,-3,-2,-1,0,1,2,3,4,5]));*/}

{/*function repeatChar(str){
    return str
    .split("")
    .map((m)=> m.repeat(2))
    .join("");
}
console.log(repeatChar("Heyy brother"));*/}

{/*function mathFun(operation, valOne, valTwo){
    return eval(valOne + operation + valTwo);
}
console.log(mathFun("/",10,2));*/}

{/*function squareOrSquareRoot (array){
    return array.map((num)=>        //mezt al map btrg3lna array 
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num**2);  //isInteger bt-check al natg lw int wla laa f lw true rag3lii al srt bta3o lw false hat al sqr bta3o
    
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]));*/}

{/*function numbers(x,n){      //fun btrg3 madrob al arqam mn awl al x l7d al n 
    let newArray = [];
    for(i=1 ; i <= n ; i++){
        newArray.push(x*i);
    }
    return newArray;
}
console.log(numbers(2,5));*/}

{/*function noSpaces(str){
    return str.split(" ").join("");
}
console.log(noSpaces("H E L L O"));*/}

{/*function invert(array){
    return array.map((m)=> m * -1);
}
console.log(invert([1,-2,-3,4,5]));*/}

{/*function reverseString (str){
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("Hello My Fav Mahmoud"));*/}

{/*function liters(time){
    return Math.floor(time/2);      //3shan t2rbha l as8ar number
}
console.log(liters(9));*/}

{/*function calAverage(array){
    if (array == null) return 0;
    return array.reduce((acc,current)=> acc + current ,0)/array.length;
}
console.log(calAverage([1,2,3,4,5]));*/}

{/*function smash(array){
    return array.join(" ");
}
console.log(smash(['Hello','My','Fav','Man']));*/}

{/*function switchUp(num){
    let numbers = {
        1 : "one",
        2 : "Two",
        3: "Three",
        4: "Four",
        5 : "Five",
    }
    return numbers.hasOwnProperty(num) ? numbers[num] : "This number : *"+ num + "* not in the list" ;
}
console.log(switchUp(2));*/}

{/*function calBonus(salary,bonus){
 return bonus ? salary*10 : salary;
}
console.log(calBonus(5000,false));*/}

{/*function removeExcalamationMark(str){
    let arr = str.split("");
    return arr[arr.length - 1] === '!' ? arr.slice(0,-1).join("") : arr.join("") ;
    //mmkn ast5dm al regular expression b al tare2a dii
    // return str.replace(/!$/,"");         >> kda b2olo shel 3lamt al ! mn a5r al string w replace it b wla 7aga
}
console.log(removeExcalamationMark("Mayar!!!"));*/}

{/*function playingBanjo(name){
    let letters = name.split("");
    return letters[0] === "R" || letters[0] === "r" ? "play banjo" : "does not play banjo";
    //mmkn ast5dm al regular expression b al tare2a dii
    // return (/^r/i).test(name) ? "play banjo" : "does not play banjo";
}
console.log(playingBanjo("Rowan"));*/}

{/*function removingElements(elements){
    let newArray= [];
    for(i=0 ; i < elements.length ; i++)        //aw i+=2
    {
      if ( i %2 == 0) { newArray.push(elements[i]);}
    }
    return newArray;
    //mmkn ast5dm filter fe al return 3la tol
    // return elements.filter((a,i)=> i%2 == 0);    b2olo al a dii kol element fe al array w al i dii al index f 2deto al cond 3al index 3la tol
}
console.log(removingElements([1,2,3,4,5,6,7,8]));*/}

{/*function rentCars(days){
    let price = 40 * days;
    if (days < 3) return price;
    return days > 7 ? price - 50 : price - 20 ;
}
console.log(rentCars(5));*/}

{/*function xor(a,b){          //function t5ly lw ay wa7d mn al atnen true yrg3 true lakn lw al atnen true aw al atnen false yrg3 false (di bdl or) 
    return a == b ? false : true;
}
console.log(xor(true, false));*/}

{/*function nonConecutiveNum(array){
    for(i = 1 ; i < array.length ; i++){
        if (array[i] - 1 !== array[i-1]) return array[i];
    }
    return null;
}
console.log(nonConecutiveNum([1,2,3,4,6,7,8,9]));*/}

{/*class Kata{
    static getVolumeOfCube(length, width, height){
        return length * width * height;
    }
}
console.log(Kata.getVolumeOfCube(10,10,10));*/}        //al far2 2n lma yb2a 3ndii class lazm anady 3leha 3shan a-access al fun al gwaha

{/*function twoDecimalNum(num){
    return Number(num.toFixed(2));
}
console.log(twoDecimalNum(12.56897));*/}

{/*
//Q: sum arqam included fe string
function quOne(str){   
    let array = str.split("");
    let filtered = [];
    for (i=0 ; i< array.length; i++){
        if (isFinite(array[i])){
            filtered.push(array[i])
        }
    }
    return filtered.reduce((acc,current)=> Number(acc) + Number(current) , 0);
    //mmkn yt3ml one line kda
   // return [...str].filter((m)=> isFinite(m)).reduce((acc,current)=> Number(acc) + Number(current),0);
}
console.log(quOne("5abdallah3yasser2gaber"));*/}

{/*
//a5ly al lower yb2a upper w al 3aks
function quTwo(str){
    let array=str.split("");
    for(i=0 ; i< array.length; i++){
    if(array[i] === array[i].toUpperCase()){
        array[i] = array[i].toLowerCase();
    }
    else{
        array[i] = array[i].toUpperCase();
    }
    }
    return array.join(""); 
    return [...str].map((letter)=> letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join("");      //lazm a2fl al map b3d al 2 cond
}
console.log(quTwo("MycHaR"));*/}

{/*function formatMoney(amount){
    return "$"+ amount.toFixed(2);
}
console.log(formatMoney(15.5168));*/}

{/*function loveFun(f1,f2){
    return f1%2 === f2%2 ? "They aren't in love" : "They are in love";
}
console.log(loveFun(5,9));*/}

{/*function noBoringZero(num){
    let array= String(num).split("");
    for(i = array.length -1 ; i > -1 ; i--){
        if(array[i] !== "0"){
            return array.slice(0,i+1).join("");
        }
    }
}
console.log(noBoringZero(152000));*/}

{/*function capitalVowel(str){
    let array= ['a','e','o','i','u'];
    return [...str].map((m)=> array.includes(m) ? m.toUpperCase(): m).join("");
}
console.log(capitalVowel("my name is mayora"));*/}

{/*function marks(array){
    return Math.floor(array.reduce((acc,current)=> acc+current,0)/array.length);
}
console.log(marks([1,2,3,4,5]));*/}

//  <<<< Videos PS with JS >>>>

{/*
//Q: 
function commaAndUnderScore(num){
   //convert to string bs ast5dm toLocaleString() >> dii ht5lii kol 3 arqam y3ml comma >> 123,456
   let result = num.toLocaleString();
   //convert to array
   result = result.split("");
   //Update the last comma with underscore
    result[result.length - 4] = "_";
    //convert to string
    return result.join("");
}
console.log(commaAndUnderScore(123456789));*/}

{/*function longestWord(str){
    let array = str.split("");
    let lenArray = [];
    let count=0;
    for(i=0; i < array.length; i++){
        if(array[i] !== ' '){
            count++
        }
        else{
            lenArray.push(count);
        }
    }
    let result = lenArray.indexOf(Math.max(...lenArray));       //lazm al 3 no2at 34an dii al bt5leha tlf 3al array
    let words = str.split(" ");
    return words[result];
}
console.log(longestWord("In Programming we love the academy toooooooooooooooo much"));*/}

{/*
//Q: Find longest Word in the  string
function longestWordIn(str){
    return str.split(" ").reduce((longest, current)=> current.length > longest.length ? current : longest);
    // kda byqarn al current b al longest y4of men fehom length akbr , byqarn kol atnen b b3d l7d ma yla2y akbr klma
}
console.log(longestWordIn("In Programming we love the academy toooooooooooooooo much"));*/}

{/*
//Q: Find Missing Letter
function findMissingLetter(sentence){
    let alpha = "abcdefghijklmn";
    let start = alpha.indexOf(sentence[0]);
    for(i = 0 ; i < sentence.length ; i++){
    if (sentence[i] !== alpha[start+i]){
        return alpha[start+i];
    }}
}
console.log(findMissingLetter("abcdefhij"));*/}

{/*
//Q: Remove duplicate Word
function removeDuplicateWord(str){
    let wordsList = str.split(" ");
    let result = [];
    for(i=0; i < wordsList.length ; i++){
        if (result.indexOf(wordsList[i]) === -1 ){          
            //h3ml check 3la kol klma fe al wordslist dii fe al list al gdeda bta3t al result lw al nateg -1 y3nii msh mwgod yb2a push it in the new array w kda al array dii htb2a al unique words bs 
            result.push(wordsList[i]);
        }
    }
    return result.join(" ");
    // advanced answer
    // return [... new Set(str.split(" "))].join(" ");

}
console.log(removeDuplicateWord("Hello Hello from the other other side"));*/}


    // www.codewars.com/kata
{/*
//Q: Reverse words
function reverseWords(str){
    let arr = str.split("");
    let newArray = [];
    let word = "";
    let start = 0;
    for(i=0 ; i < arr.length ; i++){
        if ( arr[i] === " " || i == arr.length-1){
        if (i == arr.length-1)  {
          newArray.push(arr.slice(start,i+1).reverse().join("")); 
        }
        else {
        newArray.push( arr.slice(start,i).reverse().join(""));
        newArray.push(" ");
        }
        word = "";
        start=i+1;
        }
    }
     return newArray.join("");
     //mmkn fe one line kda 
     //return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}
console.log(reverseWords("Hello Bae"));*/}

{/*
//Q: Bit Counting
function countBits(n) {
    let arr= n.toString(2).split("");
    let count = 0;
    arr.map((m)=> m == 1 ? count++ : null);
    return count;
    // mmkn one line kde
    // return n.toString(2).split('0').join('').length;
  }
console.log(countBits(1234));*/}

{/*
//Q: Does my number look big in this?
function narcissistic(value) {
    let digit= value.toString();
    let d = [...digit].map((m) => Number(m) ** digit.length).reduce((acc,current)=> acc + current , 0);     
    return (d == value) ? true : false ;            //b3ml check al raqm by-equal al sqr bta3o or not
}
console.log(narcissistic(153));*/}

{/* 
//Q: Equal Sides Of An Array
function findEvenIndex(arr){
   let leftSum = 0;
    let rightSum = 0;
    
    for(i = -1 ; i < arr.length ; i++){
        if ( i != -1 ) leftSum+= arr[i];       
        for(j=i+2 ; j < arr.length ; j++){
            rightSum+=arr[j];
        } 
       if ( leftSum == rightSum ){
            return i+1;
        }
        else {
            rightSum=0;
        } 
    }
  return -1 ; 

  //mmkn fe one line kda            al slice lma ta5od raqam bt2t3 mn awl al raqam dh           byrg3 al index al by7a22 al cond dh 
  //return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((acc,current)=> acc + current ,0) == a.slice(i+1).reduce((acc,current)=> acc + current ,0));
  // al findIndex bta5od 3 parms element , index , array
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35])); */}

{/*
//Q: Consecutive strings
function longestConsec(strarr, k) {
    let newArray = [];
    let element = "";
    if (strarr.length == 0 || k > strarr.length || k <= 0 ) return '';
    if (k == 1) return strarr.reduce((longest,current)=> current.length > longest.length ? current : longest);
    for(i=0; i < strarr.length-1 ; i++){
        for(j= i ; j < k+i && j < strarr.length ; j++){
            element+=strarr[j];
        }
        newArray.push(element);
        element = "";
    }
    return newArray.reduce((longest,current)=> current.length > longest.length ? current : longest); 
    // mmkn one line kda
    return strarr
    .map((value, index) => (strarr.slice(index, index+k).join('')))        
     //kda b2olo b al map rg3ha 3la 4akl array bs kol index feha 3bara 3n join l slice mn al array al 2dema tol al slice 7sab al k 
    .reduce((longest, current) => current.length > longest.length ? current : longest);
}
console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); */}

{/*
//Q: Extract the domain name from a URL
function domainName(url){
    return url.replace('http://', '')
              .replace('https://', '')
              .replace('www.', '')
              .split('.')[0];
    }
console.log(domainName("http://google.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://google.co.jp"));*/}


