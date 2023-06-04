let userNum = null;
let userOperator;
let total = 0;
let accumulatedValue = '0';

function toNumber(){
    userNum = Number(accumulatedValue);
}


function add(){
    total = total + userNum;
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
    
    switch(userOperator){
        case '+':
            total = add();
            break;
        case '-':
            total = sub();
            break;
        case '*':
            total = multi();
            break;
        case '/':
            total = divide();
            break;
            default:
                console.log('Unkown operator' + userOperator);
    }
    userNum = 0
    accumulatedValue = total.toString();
    display()
}


 
function display(){
   let changeDisplay = document.getElementById('displaynumber');
    changeDisplay.innerText = '' + accumulatedValue;
}


function userClickNumber(event) {
    const buttonValue = event.target.textContent;
    accumulatedValue = accumulatedValue === '0' ? buttonValue : accumulatedValue + buttonValue;
    display()
    toNumber()
}

function userClickOperator(event) {
    const buttonValue = event.target.textContent;
    toNumber()
    if (total == 0){
        total = userNum
    } else if (userOperator){
        operate(userOperator);
        display()
    }
    userOperator = buttonValue;
    accumulatedValue = '0'
}

function userClickEquals() {
    toNumber();
    if (userOperator && userNum !==null) {
        operate(userOperator);
        userOperator = null;
        display();
    }
}

function userClickClear(){
    let changeDisplay = document.getElementById('displaynumber');
    userNum = null;
     userOperator;
     total = 0;
     accumulatedValue = '0';
     changeDisplay.innerText = ''
}

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

function clickEquals(){
    const testbtn = document.getElementsByClassName('eq');

    for (let i = 0; i < testbtn.length; i++){
    testbtn[i].addEventListener('click', userClickEquals);
}
}

function clickClear(){
    const testbtn = document.getElementsByClassName('ac');

    for (let i = 0; i < testbtn.length; i++){
    testbtn[i].addEventListener('click', userClickClear);
}
}

clickOperator();
clickNum();
clickEquals();
clickClear()
