class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0;
        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            let minValue = Math.min(heights[i], heights[j]);
            let area = (j - i) * minValue;

            maxArea = Math.max(area, maxArea);

            if (minValue === heights[i]) {
                i++;
            } else {
                j--;
            }
        }

        return maxArea;
    }
}
