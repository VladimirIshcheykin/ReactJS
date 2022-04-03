/*
3. Типизация функций, используя Generic
В уроке про Generics мы написали интерфейс массива MyArray

interface MyArray<T> {
    [N: number]: T;

    добавьте типизацию для метода reduce
    reduce();
}

Справка о работе reduce

const initialValue = 0;
[1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator.
На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива
*/


interface MyArray<T> {
    [N: number]: T;
    map<U>(fn: (value: T, index: number, a: MyArray<T>) => U): MyArray<U>;
    reduce<U>(fn: (accumulator: T, value: T, index: number, a: MyArray<T>) => U, initial?: U): U;
}

const myArray: MyArray<number> = [5, 7, 9];

let variable = myArray[1];

myArray.map((v) => v+1);
myArray.map((v, i, a) => 'v'+a[i]);

myArray.reduce((prev, curr) => prev + curr, 0);
myArray.reduce((prev, curr) => String(prev) + '-' + String(curr), 'Result: ');


const myArray2: MyArray<string> = ['5', '7', '9'];

myArray2.reduce((prev, curr) => prev + ' ' + curr);