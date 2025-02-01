console.log("nabeelnjlsdjfdosl");
interface total{
  a:number;
  b:number
}
export function Sum ({a , b}:total){
  const sum = a+b;
  return sum;
}
console.log(Sum({a: 8, b: 9}));


function multiply(c:number , d :number){
  const cross = c*d;
  return cross;
}

console.log(multiply(9,3))

  