// Middle of the road 72% better time and 50% space
// Understand now that bit operation probably better. 
// But the results with javascript aren't that much different
// readability of this code seems better for the very minor performance cost 

function isPowerOfFour(n: number): boolean {
    return Number.isInteger(Math.log(n) / Math.log(4)) ? true : false
};