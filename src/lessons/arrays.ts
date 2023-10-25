import debug from "debug";
const debugx = debug("tutorial001:arrays");

const carMakers1 = ['toyota', 'nissan'];
let carMakers: string[] = ['toyota', 'nissan'];

const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

const carsByMake2: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

//flexible types
const importantDates = [new Date(), '2023-09-10'];
const importantDates2: (number | Date)[] = [new Date(), 45];
importantDates2.push(22);
importantDates2.push(new Date());
