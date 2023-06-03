let userNum;
let userOperator;
let total;

function toNumber(){
   
    userNum = Number(accumulatedValue);
    console.log(typeof userNum)
}


function add(){
    total = parseInt(total) + userNum;
    return total;
};

function sub(){
    total = total - userNum;;
    return total;
};

function multi(){
    total = total * userNum;;
    return total;
};

function divide(){
    total = total / userNum;;
    return total;
};

function operate(userOperator){
    userNum = total;
    
    switch(userOperator){
        case '+':
             add();
            break;
        case '-':
             sub();
            break;
        case '*':
             multi();
            break;
        case '/':
             divide();
            break;
        case '=':
          displayTotal()  
            break;
    }
  
    accumulatedValue = total.toString();
}
 
let accumulatedValue = 0;

function display(){
   let changeDisplay = document.getElementById('displaynumber');
    changeDisplay.innerText = '' + accumulatedValue;
}

function displayTotal(){
    accumulatedValue = total.toString(); 
}

function userClickNumber(event) {
    const buttonValue = parseInt(event.target.textContent);
    accumulatedValue += buttonValue;
    console.log(accumulatedValue);
    display()
    toNumber()
    console.log(typeof userNum)
    return accumulatedValue;
}

function userClickOperator(event) {
    const buttonValue = event.target.textContent;
    userOperator = buttonValue
    display()
    operate(userOperator)
    // convert total to string then post in display and concat with next input
    console.log(userOperator)
    return userOperator
}

// select number then when operate is selected save the selected number to a userinput

// button click on '=' deletes current displaynumber and replaces with total


function clickNum(){
    const testbtn = document.getElementsByClassName('num');

    for (let i = 0; i < testbtn.length; i++){
    testbtn[i].addEventListener('click', userClickNumber);
}
}

function clickOperator(){
    const testbtn = document.getElementsByClassName('op');

    for (let i = 0; i < testbtn.length; i++){
    testbtn[i].addEventListener('click', userClickOperator);
}
}
clickOperator();
clickNum();





// function testInput(){
//      userNum1 = prompt();
//      userOperator = prompt();
//      userNum2 = prompt();
    
//     toNumber();
//     operate(userOperator);
// };

// const testbtn = document.getElementById('btn');
// testbtn.addEventListener('click', testInput);

