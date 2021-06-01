type TGuitarStringName = 'E' | 'a' | 'd' | 'g' | 'b' | 'e'
type TGuitarStrings = { [K in TGuitarStringName]: number }
type TFuncArgs = [TGuitarStrings] | [number, number, number, number, number, number]

function showGuitarStrings(...args: TFuncArgs): TGuitarStrings {
    if (args.length === 1 && typeof args[0] === 'object') {
        return args[0]
    }

    if (args.length === 6 && args.every((arg) => typeof arg === 'number')) {
        return { E: args[0], a: args[1], d: args[2], g: args[3], b: args[4], e: args[5] }
    }

    throw new Error('::: Invalid input data!')
}

// ✅ OK
console.log('::: Case #1:', showGuitarStrings({ E: 53, a: 42, d: 32, g: 24, b: 16, e: 12 }))

// ✅ OK
console.log('::: Case #2:', showGuitarStrings(53, 42, 32, 24, 16, 12))

// ❌
// console.log('::: Case #3:', showGuitarStrings())

// ❌
// console.log('::: Case #4:', showGuitarStrings({ E: 53, /* a: 42 */ d: 32, g: 24, b: 16, e: 12 }))

// ❌
// console.log('::: Case #5:', showGuitarStrings({ E: 53, a: 42 d: 32, g: 24, b: 16, e: 12 }, 42, 32, 24, 16, 12))

// ❌
// console.log('::: Case #6:', showGuitarStrings(53, 42, 32, 24, 16 /*, 12 */))
