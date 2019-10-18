//**********初始值設定區***********

//讓使用者設定一個亂數值
//將使用者的亂數值存入到numRand當中
//這邊為了防止使用者輸入小數點，利用Math.floor自動將所有數取小於numRand的最大整數
let numUser =window.prompt("1-100請猜一個數字");
let chenknull = 0; //最後判定使用者是否取消遊戲用
let max = 100; //範圍初始最大值
let min = 1; //範圍初始最小值
let pcRand = 0;  //設定一個變數用來存放亂數
let arryRand = []; //設定一個陣列用來儲存產生過的陣列，最後會用來判斷是否有相同的亂數


//************邏輯程式判定區***********

pcRand = testRandom(min,max); //先產生一個變數放pcRand當中，並存陣列當中，以便到確認
// noNaN(numUser); //防呆確認開始
chenkInput(numUser);//新防呆確認開始

if (chenknull == 0) {
    chenkRand(numUser);
}

//***********設定function區域************

//設定亂數，主要設定亂數產生的範圍，並依照max、min去變更亂數範圍
function testRandom(y,x) {
    return Math.floor(Math.random()*(x-y+1))+y;
    //因為一開始Math.random()出來*x時，範圍變成0~99，但現在x-y在+1 就變成100 也就是範圍變成了 0~100了，而外圍的y則一樣是起始值也就是 從0開始
}

//新防呆用(可以判定當使用者按下取消後，停止遊戲
// 解決先前方法只要不輸入數字或是範圍內的數字就會無限迴圈的問題
function chenkInput(i) {
//按下"確定"如果i有輸入值的話 顯示i的值
    if (i) {  //當按下確定時，如果有i值內是有值的則顯示出來
            while (parseFloat(i).toString() == "NaN" || i < min || i > max ) {  //在經過parseFloat的判定後索回傳的i值轉為字串後，如果跟字串"NaN相同則執行迴圈
                console.log("請輸入數字，以及範圍否則無法開始遊戲唷");
                i =  window.prompt(" ");  // 讓使用者重新輸入
                if ( i == null){    //當使用者按下取消時，遊戲停止
                    alert("遊戲停止");
                    console.log("取消");
                    chenknull = 1;
                    break;   //停止迴圈
                }
            }
        console.log(i);
        chenknull = 0;

//按下"確定"如果i沒輸入任何值按下確定的話 則顯示為空值
    } else if (i == "") { //當按下確定時，如果i值為空值時，則顯示"不能為空值"
        console.log("不能為空");
        i =  window.prompt(""); //讓使用者重新輸入 ，並再次判定
        while ( parseFloat(i).toString() == "NaN" || i <min || i > max) {  //在經過parseFloat的判定後索回傳的i值轉為字串後，如果跟字串"NaN相同則執行迴圈
            console.log("重來");
            i =  window.prompt(" ");
            if ( i == null) { //當使用者按下取消時，遊戲停止
                alert("遊戲停止");
                console.log("取消");
                chenknull = 1;
                break;  //停止迴圈
            }
        }
        console.log(i);
        chenknull = 0;

//按下"取消"如果直接按取消的話，則顯示取消 ，並取消迴圈
    } else if (i == null) { //當按下取消時，如果 i值為空值則 ，顯示取消
        alert("遊戲停止");
        console.log("取消");
        chenknull = 1;
    }
    console.log("遊戲開始");
}

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
                console.log('範圍變為：' + min + '到' + max + '之間');

            } else if (pcRand < x) {  //當pcRand小於numUser時
                arryRand.push(pcRand);//將變數存入到陣列當中，方便下次確認是否有相同的
                i++;
                console.log('第' + '[' + i + ']' + '次： ' + '數字太小了，答錯!!!' + ' 電腦所猜的數字為：  ' + pcRand );  //告訴使用者；數字太小了，答錯!!!
                min = pcRand; //並且改變最小值數值 =
                console.log('範圍變為：' + min + '到' + max + '之間');
                pcRand = testRandom(min, max); //重新變更pcRand的變數值，此作用在讓亂數的最小範圍變更
            }
        }
        if (pcRand == x) {  //如果pcRand 等於numUser 符合時
            i++;
            console.log('第' + '[' + i + ']' + '次： ' + '終於答對了!!!' + ' 電腦的數值 = ' + '[' + pcRand + ']' + ' 與 使用者的' + '[' + x + ']' + ' 答案結果一樣');//告訴使用者；恭喜答對了!!
            alert("我猜出來囉，答案是：" + x );
        }
    }
}













