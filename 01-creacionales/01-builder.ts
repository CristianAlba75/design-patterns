/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */
import {COLORS} from "../helpers/colors.ts";

class Phone {

    public CPU: string = 'CPU - not defined';
    public RAM: string = 'RAM - not defined';
    public Camera: string = 'Camera - not defined';
    public Storage: string = 'Storage - not defined';

    displayInfo(){
        console.log(`Phone configuration
            CPU: ${this.CPU}
            RAM: ${this.RAM}
            Camera: ${this.Camera}
            Storage: ${this.Storage}
        `)
    }
}

class PhoneBuilder {
    // Object
    private readonly phone: Phone;

    constructor() {
        // Instance
        this.phone = new Phone();
    }

    setCPU(cpu: string) {
        this.phone.CPU = cpu;
        return this; // Return this instance
    }

    setRAM(ram: string) {
        this.phone.RAM = ram;
        return this;
    }

    setCamera(camera: string) {
        this.phone.Camera = camera;
        return this;
    }

    setStorage(storage: string) {
        this.phone.Storage = storage;
        return this;
    }

    build() {
        return this.phone; // Return phone instance
    }
}

function main() {
    const basicPhone:Phone = new PhoneBuilder()
        .setCPU('Mediatek')
        .setRAM('4 GB')
        .setCamera('8 MP')
        .setStorage('16 GB')
        .build();

    console.log('%cBasic Phone', COLORS.red);
    basicPhone.displayInfo();

    const advancedPhone:Phone = new PhoneBuilder()
        .setCPU('A18')
        .setRAM('8 GB')
        .setCamera('48 MP')
        .setStorage('256 GB')
        .build();

    console.log('%cAdvanced Phone', COLORS.green);
    advancedPhone.displayInfo();
}

main();