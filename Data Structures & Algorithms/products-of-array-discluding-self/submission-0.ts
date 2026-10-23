class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = Array.from({ length: nums.length }, () => 1);

        let product = 1;
        for (let i = 1; i < nums.length; i++) {
            product = product * nums[i - 1];
            result[i] = product * result[i];
        }

        product = 1;
        for (let j = nums.length - 2; j >= 0; j--) {
            product = product * nums[j + 1];
            result[j] = product * result[j];
        }

        return result;
    }
}
