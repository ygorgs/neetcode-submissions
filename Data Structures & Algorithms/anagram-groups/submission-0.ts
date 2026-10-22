class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const dic = new Map<string, string[]>();

        const getIndex = (s: string) => {
            return s.split("").sort().join("");
        };

        for (const str of strs) {
            const index = getIndex(str);
            const group = dic.get(index);
            if(group) {
                group.push(str)
            } else {
                dic.set(index, [str])
            }
        }

        return Array.from(dic.values());
    }
}
