


//讓使用者設定一個亂數值
//將使用者的亂數值存入到numRand當中
//這邊為了防止使用者輸入小數點，利用Math.floor自動將所有數取小於numRand的最大整數
let numRand = Math.floor(parseFloat(window.prompt("1-100請猜一個數字")))
let max = 100
let min = 0


  //防呆1  numRand是否為數字
   //先用isNaN判斷numRand是否為NaN ，如果是則進入while迴圈
    //進入while 將numRand的值取出如果並轉為字串判斷是否符合 字串"NaN"如果是的話就 跳出視窗告訴使用者必須輸入數字，並重新再輸入一次
    //接著在判斷一次鋼鋼所輸入的是否符合 字串"NaN" 如果不符合"NaN"的話，代表使用者輸入的是數值，並告訴使用者遊戲開始，並跳出while迴圈



noNaN(numRand);

function noNaN() {

    while (parseFloat(numRand).toString() == "NaN" || numRand < min || numRand > max ) { //numRand等於字串NaN時 或者 numRand 小於最小值 或者 numRand大於最大值時

        if (parseFloat(numRand).toString() == "NaN") {  //numRand等於字串NaN時

            while (parseFloat(numRand).toString() == "NaN") {  //執行迴圈：如果numRand符合NaN

                alert("請輸入數字，否則遊戲無法開始唷");      //告訴使用者"請輸入數字，否則遊戲無法開始唷"
                Math.floor( numRand = parseFloat(window.prompt("1-100請猜一個數字")));  //再ㄧ次重新輸入

                if (numRand != "NaN") {     //如果numRand不等於"NaN"時

                    if (numRand < min || numRand > max) {  //則，如果 numRand小於最小值 或者是 numRand大於最大值時

                        alert("數字超過範圍了，範圍必須在1-100之間哦");  //告訴使用者"數字超過範圍了，範圍必須在1-100之間哦"
                        Math.floor( numRand = parseFloat(window.prompt("1-100請猜一個數字"))); //再ㄧ次重新輸入

                    } //如果不是則無任何動作
                } //如果不是則無任何動作
            } //如果不成立的話則停止迴圈

        } else {  //否則numRand不等於字串NaN時

            while (numRand < min || numRand > max) { //則進入迴圈：當numRand小於最小值 或者是 numRand大於最大值時其中一個符合時

                alert("數字超過範圍了，範圍必須在1-100之間哦");  //告訴使用者"數字超過範圍了，範圍必須在1-100之間哦"
                Math.floor( numRand = parseFloat(window.prompt("1-100請猜一個數字"))); //再ㄧ次重新輸入

            }

        }

    }
}

console.log(numRand);




function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
}

let randge = getRandom(min,max);
console.log(randge);



    while (randge != numRand) {


        console.log( "可惜答錯了，再猜ㄧ次" +randge );


        if (randge == numRand) {


            console.log( "恭喜答對!!!!!!!!!!!!!!!!" +randge);


        }

    }


