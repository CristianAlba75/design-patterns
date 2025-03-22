/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

// * Interface fot the classes
interface Hamburger {
    prepare(): void;
}


// * Class by topic, must implement Hamburger interface
class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing CHICKEN hamburger');
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing BEEF hamburger');
    }
}

class BeanHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing BEAN hamburger');
    }
}

// * Abstract class
abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;


    orderHamburger(): void {
        const hamburger: Hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

// * Restaurants avoid hamburger type
class ChickenRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class BeanRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeanHamburger();
    }
}


function main(){
    let restaurant: Restaurant;

    const burgerType = prompt('Which hamburger do you want (chicken/beef/bean)?');

    // * According to type, we define the class to use
    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            throw new Error('No hamburger found');
    }

    restaurant.orderHamburger()
}

main();