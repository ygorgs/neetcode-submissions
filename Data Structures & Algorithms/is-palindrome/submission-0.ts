class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i = 0;
        let j = s.length - 1;
        const regex = /[a-zA-Z0-9]/;

        while (i < j) {
            const left = s[i];
            const right = s[j];

            if(!regex.test(left)) {
                i++;
                continue;
            }

            if(!regex.test(right)) {
                j--;
                continue;
            }

            if (left.toLowerCase() === right.toLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
}
