function getRow(rowIndex: number): number[] {

    let row: number[] = [];
    let value: number = 0;
    for (let k: number = 0; rowIndex+1 > k; k++) {
        if (k == 0) {
            row.push(1);
            value = 1;
        } else {
            value = value * (rowIndex+1-k)/k
            row.push(value)
        }
        
    };

    return row
};
