class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const frequency = new Map<string, number>();

        let left = 0;
        let maxFrequency = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let actualFrequency = (frequency.get(s[right]) ?? 0) + 1
            frequency.set(s[right], actualFrequency);

            maxFrequency = Math.max(maxFrequency, actualFrequency);

            while((right - left + 1) - maxFrequency > k) {
                const leftChar = s[left];
                frequency.set(leftChar, frequency.get(leftChar)! - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);

        }

        return maxLength;
    }
}
