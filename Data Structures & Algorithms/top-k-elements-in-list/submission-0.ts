class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>();

        for (const n of nums) {
            frequency.set(n, (frequency.get(n) ?? 0) + 1);
        }

        const topK = [...frequency.entries()]
            .sort((a,b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num)

        return topK
    }
}
