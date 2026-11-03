class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();

        let left = 0;
        let maxSize = 0;

        for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[i]);
            maxSize = Math.max(maxSize, set.size);
        }

        return maxSize;
    }
}
