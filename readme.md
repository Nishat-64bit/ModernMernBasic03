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
    ==================================================================
                 Know About Js Basic - 03 Function <End> 
    ==================================================================