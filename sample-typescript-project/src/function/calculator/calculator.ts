export class Calculator {
    //プロパティ
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    add(a: number, b: number): number {
        return a + b;
    }

    multiplication = (a: number, b: number) => {
        return a * b;
    }

}

const cal = new Calculator("taro");
console.log(cal.add(10, 20));
console.log(cal.multiplication(10, 20));