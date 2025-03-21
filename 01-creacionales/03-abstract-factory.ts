/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import {COLORS} from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

class TropicalHamburger implements Hamburger {
    prepare() {
        console.log('Preparing %c tropical hamburger', COLORS.yellow);
    }
}

class VeganHamburger implements Hamburger {
    prepare() {
        console.log('Preparing %c vegan hamburger', COLORS.pink);
    }
}


class JuiceDrink implements Drink {
    pour() {
        console.log('Preparing %c juice drink', COLORS.orange);
    }
}

class WaterDrink implements Drink {
    pour() {
        console.log('Preparing %c water drink', COLORS.blue);
    }
}

interface RestaurantFactory{
    createHamburger(): Hamburger;
    createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
    createHamburger(): Hamburger {
        return new TropicalHamburger();
    }

    createDrink(): Drink {
        return new JuiceDrink();
    }
}

class HealthyFoodRestaurantFactory implements RestaurantFactory {
    createHamburger(): Hamburger {
        return new VeganHamburger();
    }

    createDrink(): Drink {
        return new WaterDrink();
    }
}

function main(factory: RestaurantFactory){
    const hamburger = factory.createHamburger();
    const drink = factory.createDrink();

    hamburger.prepare();
    drink.pour();
}

console.log('%cCommon menu', COLORS.red);
main(new FastFoodRestaurantFactory());


console.log('%cHealthy menu', COLORS.green);
main(new HealthyFoodRestaurantFactory());



