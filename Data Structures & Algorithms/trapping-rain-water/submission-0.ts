class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const maxPrefix = new Array<number>(height.length);
        const maxSuffix = new Array<number>(height.length);
        let left = 0;
        let right = height.length - 1;

        while (left < height.length) {
            maxPrefix[left] =
                left === 0 ? height[left] : Math.max(maxPrefix[left - 1], height[left]);
            left++;

            maxSuffix[right] =
                right === height.length - 1
                    ? height[right]
                    : Math.max(maxSuffix[right + 1], height[right]);
            right--;
        }

        let totalAmount = 0;
        for (let i = 0; i < height.length; i++) {
            const amount = Math.min(maxPrefix[i], maxSuffix[i]) - height[i];
            totalAmount += amount;
        }

        return totalAmount;
    }
}
