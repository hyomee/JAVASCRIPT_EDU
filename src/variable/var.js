console.log("전역 변수 a = " + a);                  // undefined
var a = 10;
var b = 5;
var c = 2;
function fVarExample(){
    var a = 1;
    var b;
    if (true) {
        var a = 2;
        var d = 2;
        b = b + 1;
        c = c + 1;
        console.log("if 지역 변수 a = " + a);          // 2
    }
    b = b + 3;
    c = c + 3;
    console.log("fVarExample 지역 변수 a = " + a);     // 2
    console.log("fVarExample 지역 변수 b = " + b);     // NaN
    console.log("전역 변수 c = " + c);                 // 6
    console.log("d = " + d);                 // 6
}


fVarExample();

console.log("전역 변수 a = " + a);         // 10
console.log("전역 변수 b = " + b);         // 5     
console.log("전역 변수 c = " + c);         // 6