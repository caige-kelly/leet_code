// Best run:
//      108 ms > 99.80%
//      50.4 mb > 99.48%
function isPalindrome(x: number): boolean {
    let a: string[] = Array.from(String(x))
    let l: number = a.length;
    let d: number = Math.floor(l / 2); 

    while (d > 0) {
        if (a[d-1] != a[l-d])
            return false;
        d--
    }

    return true;
};