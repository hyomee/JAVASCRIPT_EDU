const a = 10;

if (true) {
    // a = 30; // TypeError: Assignment to constant variable.
    let a = 30;  
    console.log("if block a : " + a);
}
console.log("a : " + a);

const name = "현대";
const car = {
    company: "현대자동차",
    name: "소나타"
}

car.company = "기아자동차";
car.name = "소렌토";

