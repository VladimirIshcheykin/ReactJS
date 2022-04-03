
const str = 'string';


interface MyObjInterface {
    a: number;
    b: string;
    c: string[];
}

const Obj: MyObjInterface = {
    a: 1,
    b: 'ddddd',
    c: ['a', 'b', 'c']
}

const val = Obj.c;

const a = [5, 10, 15, 20];
const b = a.reduce(
    (sum, curr) => {
        return sum + curr;
    }
    );

const c = a.reduce(
    (sum, curr) => sum + curr
);

