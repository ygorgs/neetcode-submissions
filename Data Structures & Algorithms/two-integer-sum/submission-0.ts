class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i = 0; i < nums.length -1; i++) {
            for(let j=i+1; j < nums.length; j++) {
                const result = nums[i] + nums[j];
                if(result === target) {
                    return [i, j]
                }
            }
        }

        return [];
    }
}
