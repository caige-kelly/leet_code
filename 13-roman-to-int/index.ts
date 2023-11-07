// Time complexity all over the place from 96% to 30%
// Space complexity consistently over 92% and under 48 mb

function romanToInt(s: string): number {

    let r: number = 0;
    for(let i: number = s.length-1; i >= 0; i--) {
        switch (s[i]) {
            case "I":
                r <= 4 ? r += 1 : r -= 1;
                break;
            case "V":
                r += 5;
                break;
            case "X":
                r <= 49 ? r += 10 : r -= 10;
                break;
            case "L":
                r += 50;
                break;
            case "C":
                r <= 499 ? r += 100 : r -= 100;
                break;
            case "D":
                r += 500;
                break;
            case "M":
                r += 1000;
                break;
        }
    }
    return r;
};