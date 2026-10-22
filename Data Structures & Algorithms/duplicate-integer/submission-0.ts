class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numbers = new Set<number>();
        for(const n of nums) {
            if(numbers.has(n)) {
                return true
            }
            numbers.add(n)
        }
        return false
    }
}
