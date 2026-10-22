class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const data = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const result = target - nums[i];
            if(data.has(result)) {
                return [data.get(result), i]
            } else {
                data.set(nums[i], i);
            }
        }

        return [];
    }
}
