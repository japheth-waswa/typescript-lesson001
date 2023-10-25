import debug from "debug";
const debugx = debug("tutorial001:classess");

class Vehicle {

    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('beep');
        debugx("beep");
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }

    private drive(): void {
        console.log('vroom')
    }
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('green');
console.log(vehicle.color)

const car = new Car(10, 'purple');
car.startDrivingProcess();
console.log(car.color);

