class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = [];
        const numsList = [...nums].sort((a, b) => a - b);

        for (let i = 0; i < numsList.length - 2; i++) {
            if (i > 0 && numsList[i] === numsList[i - 1]) {
                continue;
            }

            let j = i + 1;
            let k = numsList.length - 1;

            while (j < k) {
                const sum = numsList[i] + numsList[j] + numsList[k];

                if (sum > 0) {
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    result.push([numsList[i], numsList[j], numsList[k]]);
                    k--;
                    j++;
                    // Pula valores repetidos do ponteiro esquerdo
                    while (j < k && numsList[j] === numsList[j - 1]) {
                        j++;
                    }
                    // Pula valores repetidos do ponteiro direito
                    while (j < k && numsList[k] === numsList[k + 1]) {
                        k--;
                    }
                }
            }
        }

        return result;
    }
}
