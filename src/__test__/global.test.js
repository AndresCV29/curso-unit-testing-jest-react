//Probar textos
const text = '¡Hola, mundo!'

test('', ()=>{
    expect(text).toMatch(/mundo/);
});

//Probar arreglos
const fruits = ['manzana', 'melon', 'banana']

test('¿Tenemos una banana?', ()=>{
    expect(fruits).toContain('banana');
});

//Probar números
test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

//Probar booleanos
test('Verdadero', () => {
    expect(true).toBeTruthy();
});

//Probar callbacks
const reverseString = (string, callback) => {
    callback(string.split("").reverse().join(""));
};

test('Probar un Callback', () => {
    reverseString('Hola', (string) => {
        expect(string).toBe('aloH');
    })
})

//Probar promesas
const reverseString2 = string => {
    return new Promise((resolve, reject) => {
        if(!string) {
            reject(Error('¡Error!'))
        }

        resolve(string.split("").reverse().join(""));
    });
};

test('Probar una promesa', () => {
    return reverseString2('Hola').then(string => {
        expect(string).toBe('aloH');
    })
})

//Probar async/await
test('Probar async/await', async () => {
    const string = await reverseString2 ('Hola');
    expect(string).toBe('aloH');
})


//Probar antes/despues de cada prueba
/* beforeEach(() => console.log('Antes de cada prueba'))
beforeAll(() => console.log('Antes de todas las prueba'))

afterEach(() => console.log('Después de cada prueba'))
afterAll(() => console.log('Después de todas las pruebas'))
 */
