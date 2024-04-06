/**
 * 
 * todo : function Type : normal function , arrow function , annonimus function , IIFE function
 */

// function expression (interview Question)
//------------------------------------
function juicemaker(num1, num2){ // num1, num2 holo parameter/variable
    // parameter/variable 
    // num1 = 20
    // num2 = 2
    // excution body
    console.log(num1+ num2); // 20 +2
}
// calling function 
juicemaker(20,2)  // argument pass kora , mane juicemake ki niya kaj korbe 

// function kaj korbe tokon e jokon call korben tar name dore //
// then se bitore dokce and pacce console.log e print leke se seta ke print kore dicce
// juice maker e ki input dite caw seta holo argument passing
// sei input ke newwar jonno jei varibale use hoi ta ke bole parameter jemon num1,num2
//------------------------------------

function sum(num1,num2) {
    let total = num1 + num2 // functionality
console.log("sum is ",total);
    
}sum(50,20) 

// output : sum is  70


//------------------------------------ most important return mechanism  ---------------------------

// Ex-1
function addition(num3,num4){
let mott = num3 + num4
return mott // kono value ver korte hole use koren return 
}
// console.log(returnMott); 51

function division(num3) {
    // num3 = returnmott = 51
    let divide = num3 / 100
    console.log(divide); // 51/100 =0.51
}

let returnMott = addition(25,26) // aekon aei return mott er value ver holo , kintu sei thakbe kothai ekon ? // se thakbe argument er vitore  // aekon aegument ke soman arrekta varible dore log korelei peaJabe
division(returnMott)




//----------------------------------------------------------------
// Ex-2
/**
 * gon kora value ke divide korba 
 * gon er function
 * gonFunction result use kore divide function console
 */
//------------------------------------------
function GonFunction(num5,num6) {
    let multifly = num5 * num6;
    return multifly
}

function divideFunction(num5) {
    // num5 = ReturnMultifly = 500
    let dividde = num5 / 6;
    console.log(dividde); // 500/6
}


let ReturnMultifly = GonFunction(100,5) // 1st argument 
divideFunction(ReturnMultifly) // 2nd argument

//------------------------------------------



//----------------------------------------------------------------


//----------------------------------------------------------------
// Ex-2
/**
 * gon kora value ke divide korba 
 * gon er function
 * gonFunction result use kore divide function console
 * ekon apni chan divide kora function ke o ber korte ? use return
 */
//------------------------------------------
function GonFunction(num5,num6) {
    let multifly = num5 * num6;
    return multifly
}

function divideFunction(num5) {
    // num5 = ReturnMultifly = 500
    let dividde = num5 / 6;
    return dividde // 500/6 = // 83.33333333
}


let ReturnMultifly = GonFunction(100,5) // 1st argument 
let returndividde = divideFunction(ReturnMultifly) // 2nd argument
console.log(returndividde); // 83.33333333

//------------------------------------------



//----------------------------------------------------------------