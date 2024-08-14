"use strict";

/* TODO */

const min = parseInt(prompt('coloque el numero menor posible'));
const max = parseInt(prompt('coloque el numero mayor posible'));

const num = parseInt(prompt('coloque un numero a cuestionar'));

if(min < num && num < max){
    if(num % 2 == 0){
        alert('es par');
    }

}else{
    if(num % 2 == 1){
        alert('Es impar')
    }
}
