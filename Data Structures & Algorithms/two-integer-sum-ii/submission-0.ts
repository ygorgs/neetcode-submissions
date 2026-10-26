class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let index1 = 0;
        let index2 = numbers.length - 1;

        while (index1 < index2) {
            const result = numbers[index1] + numbers[index2];

            if (result > target) {
                index2--;
            } else if (result < target) {
                index1++;
            } else {
                return [index1 + 1, index2 + 1];
            }
        }

        return [];
    }
}
