let num = 266219;
num = String(num);
let res = num[0];
for(let i = 0; i < (num.length - 1); i++){
    res *= num[(i + 1)];
}
console.log(res);
res **= 3;
res = String(res);
console.log(res.substring(0, 2));