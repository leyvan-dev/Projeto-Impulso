console.log("===== TABUADA =====");
const num = Number(prompt("digite um número:"));

for(let i = 0; i <= 10; i++){
    console.log(`${num} * ${i} = ` + num * i);
}

console.log("===== DIVISÃO POR 3 =====");
for (let i = 1; i <= 30;i++){
    if(i % 3 === 0){
        console.log(`${i} é divisível por 3`);
    }
}