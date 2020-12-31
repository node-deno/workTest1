let CryptoJS = require("crypto-js");
console.log(CryptoJS.SHA256("Messawdewqsdadasdsadasdsaasdaxacsage").toString());

//第一个箱子
//编号：1
//时间戳：尝试打开箱子的时间戳
//上一个宝箱的HASH值：0
//HASH值

while (1){
    let nowDate=Date.parse(new Date())
    console.log(CryptoJS.SHA256('1'+nowDate+'0').toString())
}