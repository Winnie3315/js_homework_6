let arr = ['dsad',1,{}, null, [], 12,12,'sda',true]

let str = 0
let num = 0
let others = 0

arr.forEach(el => {
  if (typeof el === 'string') {
    str = str + 1
  } else if (typeof el === 'number') {
    num = num + 1
  }else{
    others = others + 1
  }
})

console.log(str , 'string');
console.log(num , 'number');
console.log(others , 'others' );