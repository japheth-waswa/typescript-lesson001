import debug from "debug";
const debugx = debug("tutorial001:interfaces");

interface Vehicle {
    name: string; year: Date; broken: boolean; summary(): string
}

interface Reportable {
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown', carbonated: true, sugar: 40, summary(): string {
        return `my drink is ${this.color} with ${this.sugar} grams of sugar`
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    debugx(`Name: ${vehicle.name}`)
    debugx(`Year: ${vehicle.year}`)
    debugx(`Broken: ${vehicle.broken}`)
}

const printVehicle2 = ({ name, year, broken, summary }: Vehicle): void => {
    debugx(`Name: ${name}`)
    debugx(`Year: ${year}`)
    debugx(`Broken: ${broken}`)
    debugx(`summary: ${summary()}`)
}
const printSummary = (item: Reportable): void => {
    debugx(item.summary());

}
printVehicle(oldCivic);
printVehicle2(oldCivic);
printSummary(oldCivic);
printSummary(drink);