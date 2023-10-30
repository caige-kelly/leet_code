function twoSum(nums: number[], target: number): number[] {
    let p:number = 0;
    while (true) {
        for (let i: number = p+1; i < nums.length; i++) {
            if (nums[p] + nums[i] === target)
                return [p, i];
        };
        p++;
    };
}; 