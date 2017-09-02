// You goal is to implement the operation of XOR (carryless) multiplication
// problem posted here: https://www.reddit.com/r/dailyprogrammer/comments/6ba9id/20170515_challenge_315_easy_xor_multiplication/
// Think of bitwise XOR (^) as binary addition without carrying
// The ^ operator looks at the binary representation of the values of two
// expressions and does a bitwise exclusive OR operation on them.
// The result of this operation behaves as follows:
//   0101   (expression1)
//   1100   (expression2)
//   ----
//   1001   (result)
// When one, and only one, of the expressions has a 1 in a digit, the
// result has a 1 in that digit. Otherwise, the result has a 0 in that digit.

function xorMultiply(a,b){
  let results = 0;
  while (b !== 0) {
    console.log("b", b.toString(2));
    console.log("a", a.toString(2));

    // The bitwise AND operator (&) compares each bit of the first operand to the
    //corresponding bit of the second operand. If both bits are 1, the corresponding
    //result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

    results ^= a * (b & 1);

    // The left shift assignment operator moves the specified amount of bits
    // to the right, adds a zero, and assigns the result to the variable:

    a <<= 1;

    // The right shift assignment operator moves the specified amount of bits
    // to the right and assigns the result to the variable:

    b >>= 1;
  }
  return results;
}
console.log(xorMultiply(14,13));

// Bitwise operation
// Simple computer work on sets of data bits
// In digital computer programming, a bitwise operation operates on one or more bit patterns or binary numerals at the level of their individual bits. It is a fast, simple action directly supported by the processor, and is used to manipulate values for comparisons and calculations.On simple low-cost processors, typically, bitwise operations are substantially faster than division, several times faster than multiplication, and sometimes significantly faster than addition.
