alert(`bienvenido al primer ejercicio`)
let numbers = [];
for (let i = 0; i < 3; i++){
  numbers[i] = Number (prompt(`Ingrese el número ${(i + 1)}`));
  while(isNaN(numbers[i])) {
    numbers[i] = Number(prompt(`Ingrese el numero ${(i + 1)} De nuevo por favors`));
  }
}

numbers.sort(function(a, b) {
  return a - b;
});

alert(`los numeros que ingreso en orden de menor a mayor son: ${numbers}`);

numbers.sort(function(a, b) {
  return b - a;
});
alert(` Los numeros que ingreso en orden de mayor a menor son: ${numbers}`);

if (numbers[0] == numbers[1] && numbers [1] == numbers[2]){
  alert (`los numeros ${numbers[0]} y ${numbers[1]} son iguales`);
}
//alert("Bienvenid@");
//let num1= parseInt(prompt('ingrese el primer numero entero'));
//let num2= parseInt(prompt('ingrese el segundo numero entero'));
//let num3= parseInt(prompt('ingrese el tercer numero entero'));

//alert("sus numeros digitados son"+num1+","+num2+","+num3);



//if (num1 > num2 && num1 > num3) {
 //   alert("el numero " +num1+ " es mayor que " + num2+ "y "+num3);
 // }
 // else if (num2 > num1 && num2 > num3) {
 //   alert("el numero "+ num2 + " es mayor que " +num1+ "y "+num3);
//  }
//  else if (num3 > num1 && num3> num2) {
 //   alert("el numero "+ num3 + " es mayor que " +num1+ "y "+num2);
  //}
//  else if(num1 === num2 && num1=== num3) {
//    alert("el numero "+nun1+ "es igual que "+num2+" y "+num3);
 // }
