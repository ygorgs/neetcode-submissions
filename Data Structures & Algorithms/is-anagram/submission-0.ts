class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const dic = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            const letter = s[i];
            if (dic.has(letter)) {
                dic.set(letter, (dic.get(letter) ?? 0) + 1);
            } else {
                dic.set(letter, 1);
            }

            const letter2 = t[i];
        }

        for (let i = 0; i < t.length; i++) {
            const letter = t[i];
            if (dic.has(letter) && dic.get(letter) > 0) {
                dic.set(letter, (dic.get(letter) ?? 0) - 1);
            } else {
                return false;
            }
        }

        return true
    }
}
