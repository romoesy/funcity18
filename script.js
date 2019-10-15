




//**********初始值設定區***********

//讓使用者設定一個亂數值
//將使用者的亂數值存入到numRand當中
//這邊為了防止使用者輸入小數點，利用Math.floor自動將所有數取小於numRand的最大整數
let numUser = Math.floor(parseFloat(window.prompt("1-100請猜一個數字")));
let max = 100; //範圍初始最大值
let min = 1; //範圍初始最小值
let pcRand = 0;  //設定一個變數用來存放亂數
let arryRand = []; //設定一個陣列用來儲存產生過的陣列，最後會用來判斷是否有相同的亂數



//************邏輯程式判定區***********

pcRand = testRandom(min,max); //先產生一個變數放pcRand當中，並存陣列當中，以便到確認
noNaN(numUser); //防呆確認開始
chenkRand(numUser) ;//變數與使用者確認開始


//***********設定function區域************

//開始確認亂數與使用者給數值
function chenkRand(x) {
    let i = 0; //計算總共猜了幾次
    console.log('使用者的數字：' + x);
    while (pcRand != x) {  //pcRand不等於numUser成立時執行程序
        if (arryRand.includes(pcRand)) { //找尋在arryRand的陣列當中，是否包含(includes)跟pcRand亂數一樣的東西，如果有則開始執行以下程式
            pcRand = testRandom(min,max); //重新產生亂數存入pcRand當中
        } else { //如果沒有包含跟pcRand一樣的亂數則執行以下程式

            if (pcRand > x) {  //當pcRand大於numUser時
                arryRand.push(pcRand); //將變數存入到陣列當中，方便下次確認是否有相同的
                i++;
                console.log('第' + '[' + i + ']' + '次： ' + '數字太大了，答錯!!!' + ' 電腦所猜的數字為：  ' + pcRand ); //告訴使用者；數字太大了，答錯!!!
                max = pcRand;  //並且改變最大值
                pcRand = testRandom(min, max); //重新變更pcRand的變數值，此作用在讓亂數的最大範圍變更
                console.log('範圍變為：' + min + '到' + max + '之間')

            } else if (pcRand < x) {  //當pcRand小於numUser時
                arryRand.push(pcRand);//將變數存入到陣列當中，方便下次確認是否有相同的
                i++;
                console.log('第' + '[' + i + ']' + '次： ' + '數字太小了，答錯!!!' + ' 電腦所猜的數字為：  ' + pcRand );  //告訴使用者；數字太小了，答錯!!!
                min = pcRand; //並且改變最小值數值 =
                console.log('範圍變為：' + min + '到' + max + '之間')
                pcRand = testRandom(min, max); //重新變更pcRand的變數值，此作用在讓亂數的最小範圍變更
            }
        }

        if (pcRand == x) {  //如果pcRand 等於numUser 符合時
            i++;
            console.log('第' + '[' + i + ']' + '次： ' + '終於答對了!!!' + ' 電腦的數值 = ' + '[' + pcRand + ']' + ' 與 使用者的' + '[' + numUser + ']' + ' 答案結果一樣');//告訴使用者；恭喜答對了!!
        }
    }
}


//防呆(判斷是否為數字，判斷是否在範圍內)
function noNaN() {
    //防呆1  numRand是否為數字
    //先用isNaN判斷numRand是否為NaN ，如果是則進入while迴圈
    //進入while 將numRand的值取出如果並轉為字串判斷是否符合 字串"NaN"如果是的話就 跳出視窗告訴使用者必須輸入數字，並重新再輸入一次
    //接著在判斷一次鋼鋼所輸入的是否符合 字串"NaN" 如果不符合"NaN"的話，代表使用者輸入的是數值，並告訴使用者遊戲開始，並跳出while迴圈
    while (parseFloat(numUser).toString() == "NaN" || numUser < min || numUser > max ) { //numRand等於字串NaN時 或者 numRand 小於最小值 或者 numRand大於最大值時
        if (numUser.toString() == "NaN") {  //numRand等於字串NaN時
            while (numUser.toString() == "NaN") {  //執行迴圈：如果numRand符合NaN
                alert("請輸入數字，否則遊戲無法開始唷");      //告訴使用者"請輸入數字，否則遊戲無法開始唷"
                Math.floor( numUser = parseFloat(window.prompt("1-100請猜一個數字")));  //再ㄧ次重新輸入
                if (numUser != "NaN") {     //如果numRand不等於"NaN"時
                    if (numUser < min || numUser > max) {  //則，如果 numRand小於最小值 或者是 numRand大於最大值時
                        alert("數字超過範圍了，範圍必須在1-100之間哦");  //告訴使用者"數字超過範圍了，範圍必須在1-100之間哦"
                        Math.floor( numUser = parseFloat(window.prompt("1-100請猜一個數字"))); //再ㄧ次重新輸入
                    } //如果不是則無任何動作
                } //如果不是則無任何動作
            } //如果不成立的話則停止迴圈
        } else {  //否則numRand不等於字串NaN時
            while (numUser < min || numUser > max) { //則進入迴圈：當numRand小於最小值 或者是 numRand大於最大值時其中一個符合時
                alert("數字超過範圍了，範圍必須在1-100之間哦");  //告訴使用者"數字超過範圍了，範圍必須在1-100之間哦"
                Math.floor( numUser = parseFloat(window.prompt("1-100請猜一個數字"))); //再ㄧ次重新輸入
            }
        }
    }
}


//有問題的亂數
function getRandom(y,x){
    return Math.floor(Math.random()*x)+y;
    //取某個數值之間的亂數，x為亂數範圍數量，y為亂數的最小值也就是範圍的起始，比如我設x=5，y=10代表亂數會從10 11 12 13 14 (剛好五個數值)之間取值
    //但實際上如果我的最小值是   7  最大值是 10 ，也就是亂數取的數量是7各數   7 8 9 10 11 12 13實際上已經超過我的最大值，所以此方法還是會有問題所在
}



//設定亂數，主要設定亂數產生的範圍，並依照max、min去變更亂數範圍
function testRandom(y,x) {
    return Math.floor(Math.random()*(x-y+1))+y;
    //因為一開始Math.random()出來*x時，範圍變成0~99，但現在x-y在+1 就變成100 也就是範圍變成了 0~100了，而外圍的y則一樣是起始值也就是 從0開始
}
// console.log(testRandom(0,1));




