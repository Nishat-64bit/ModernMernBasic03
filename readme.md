    ==================================================================
                 Know About Js Basic - 03 array <Start> 
    ==================================================================
    // todo : non primitive data type
    // todo : array , function

    // array declaration

    let arr = [1, 2, 5, 7, "nishat", "frontEnd"]; // w3 school not certified // programer friendly
    console.log(arr);

    let arr2 = new Array("Mahmudur", "Nishat", `FrontEnd`, 25, 52); // not faster
    console.log(arr2);

    let arr3 = [25, 24, 26, 35, 12];
    arr3[3] = 356; //
    console.log(arr3); ///
    // just aemne korlam
    console.log(arr3[4]);

    // array traversing : one by one array element show korte loop use korte hoi
    // array update
    // array select kora one by one
    let arr4 = [25, 29, 35, 45, 48, 49];
    for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]); // check korbe , array te jabe print korbe , // dynamic hoi gese //
    }
    /**output:
    * 12
    25
    29
    35
    45
    48
    49
    */
    //========================================
    // loop er modde  element change korbo kemne ? condition use koro
    //----------------------------
    let arr5 = [25, 29, 36, 24, 26];
    for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] === 36) {
        arr5[i] = "Nishat";
    }
    console.log(arr5[i]);
    }
    // loop er modde  element change korbo kemne ? condition use koro
    // aekon apni chan koto number index e Nishat ase ta dekte
    //----------------------------
    let arr6 = [25, 29, 36, 24, 36];
    for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] === 36) {
        arr6[i] = "Nishat";
        console.log(i, arr6[i]);
    }
    // console.log(arr6[i]);
    }
    /** output // 2 & 4 number index e nishat ase
    * 2 Nishat 
    4 Nishat
    */

    //========================================================
    // khali array te kibabe data diben
    // index dea element proves korano jai
    // othoba push , unshift , dea o kora jai

    let arr7 = [];
    arr7[0] = 25;
    arr7[1] = "taufik sir";
    arr7[2] = "Nishat";
    // arr[3] = value dea nea , tai console korle undefinde dekabe , tobe ekstae korle empty string leka thakbe
    arr7[5] = "Mahmudur";
    arr7[6] = '' // empty value
    arr7[7] = "2";
    console.log(arr7);
    // output : [ 25, 'taufik sir', 'Nishat', <2 empty items>, 'Mahmudur', '', '2' ]
    // ================ sum up ==================
    // array index dekte >>> arryname[indexnumber]
    // array length dekte >>> arryname.length
    // array index dekte >>> arryname[indexnumber]

    ==================================================================
                 Know About Js Basic - 03 array <End> 
    ==================================================================
    ==================================================================
                 Know About Js Basic - 03 Function <start> 
    ==================================================================
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


    ==================================================================
                 Know About Js Basic - 03 Function <End> 
    ==================================================================