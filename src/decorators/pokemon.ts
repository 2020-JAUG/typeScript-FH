
function printToConsole(constructor: Function) {
    console.log(constructor);

}

const printToConsoleConditional = (print: boolean = false): Function => {

    return print ? printToConsole : () => { }

}

const blockPrototype = function (constructor: Function) {
    // Object.seal(constructor);
    // Object.seal(constructor.prototype);
}


function CheckValidPokemon() {

    return function (target: any, propertyKey: string, descriptior: PropertyDescriptor) {

        const originalMethod = descriptior.value;

        descriptior.value = (id: number) => {

            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            } else {
                return originalMethod(id);
            }
        }
    }
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {

    @readOnly(true)
    public PokeApi: string = 'https://pokeapi.co/';

    constructor(
        public name: string
    ) { }

    @CheckValidPokemon()
    savePokemon(id: number) {

        console.log(`Pokemnon guardado en base de datos ${id}`);

    }

}

function readOnly(isWritable: boolean = true): Function {

    return function (target: any, propertyKey: string) {

        const descriptor: PropertyDescriptor = {

            get() {
                console.log(this);
                return 'Alejandro';
            },
            set(this, val) {
                // console.log(this, val);

                Object.defineProperty(this, propertyKey, {

                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;

    }
}

