import debug from "debug";
const debugx = debug("tutorial001:annotationFunctions");

const add = (a: number, b: number): number => {
    return a + b;
}

const addObj = (config: { a: number, b: number }): number => {
    const { a, b } = config;
    return a + b;
}
const addObj2 = ({ a, b }: { a: number, b: number }): number => {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

const subtractObj = ({ a, b }: { a: number, b: number }): number => {
    return a - b;
}

//anonymous function
const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    debugx(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

//function
const logNumber: (i: number) => void = (i: number): void => {
    debugx(i);
}

const buildFullNames: (config: { first: string, last: string }) => number = (config: { first: string, last: string }) => {
    const { first, last } = config;
    debugx({ first, last });
    return 34;
}