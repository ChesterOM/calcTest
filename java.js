let userNum1;
let userNum2; 
let userOperator;
let total = 0;

function toNumber(){
    if (userNum1 || userNum2 == typeof 'string'){
        userNum1 = Number(userNum1); 
        userNum2 = Number(userNum2);
    }
};

function add(){
    total = userNum1 + userNum2;
    console.log(total);
    return total;
};

function sub(){
    total = userNum1 - userNum2;
    console.log(total);
    return total;
};

function multi(){
    total = userNum1 * userNum2;
    console.log(total);
    return total;
};

function divide(){
    total = userNum1 / userNum2;
    console.log(total);
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
    }
}

function testInput(){
     userNum1 = prompt();
     userOperator = prompt();
     userNum2 = prompt();
    
    toNumber();
    operate(userOperator);
};

const testbtn = document.getElementById('btn');
testbtn.addEventListener('click', testInput);

