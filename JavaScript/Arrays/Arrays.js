// Continuous And Holey Array

// SMI (Small Integer)
// Packed Element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5] // Array-Type: PACKED_SMI_ELEMENTS (Optimised)

arrTwo.push(6.0) // Array-Type: PACKED_DOUBLE_ELEMENTS

arrTwo.push('7') // Array-Type: PACKED_ELEMENTS

arrTwo[10] = 11 // HOLEY-ELEMENTS

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])

// Bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes Are Very Expensive

const arrThree= [1,2,3,4,5]
console.log(arrThree[2])

// Optimized Order
// SMI > DOUBLE > PACKED (Continuous Array)
// H_SMI > H_DOUBLE > H_PACKED (Holey Array)