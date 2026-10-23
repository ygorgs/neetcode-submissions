class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let longestCount = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let currentCount = 1;
                let nextNum = num + 1;
                while (set.has(nextNum)) {
                    currentCount++;
                    nextNum++;
                }


                if(longestCount < currentCount) {
                    longestCount = currentCount;
                }
                
            }
        }

        return longestCount;
    }
}
