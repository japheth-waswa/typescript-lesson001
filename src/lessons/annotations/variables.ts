import debug from "debug";
const debugx = debug("tutorial001:annotationVariables");

const apples: number = 5;
const speed: string = `super fast`;
const hasName: boolean = true;
let nameNumber: boolean | number = true;
nameNumber = 34;
let setNothing: null = null;
let someUndefined: undefined = undefined;

//built in objects
let now: Date = new Date();


//Array
let colors: string[] = ['red', 'green']
let jNums: number[] = [9, 34, 19, 23.34]
let randArr: any[] = [9, true, "location", ["tx"]]


//classess
class Car { }
let car: Car = new Car()

//object literal
let point: { z: string; x: number; y: number } = {
    x: 10,
    y: 20,
    z: 'lat'
}


const json = '{"x":89,"y":"john doe"}';
const locale: { x: number; y: string } = JSON.parse(json);
